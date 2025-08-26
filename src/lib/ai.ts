// DeepSeek AI Integration for Student Feedback
interface DeepSeekResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

export interface AIFeedback {
  isCorrect: boolean;
  explanation: string;
  encouragement: string;
  nextSteps: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  relatedTopics: string[];
}

export interface StudentAnswer {
  questionText: string;
  studentAnswer: string;
  correctAnswer: string;
  context: {
    chapterTitle: string;
    difficulty: string;
    topic: string;
    achieverStatus?: 'low achiever' | 'average achiever' | 'high achiever';
    totalQuestionsAnswered?: number;
    correctAnswersCount?: number;
  };
}

const getApiKey = (): string | null => {
  // First check environment variable (secure)
  const envKey = import.meta.env.VITE_DEEPSEEK_API_KEY;
  if (envKey && envKey !== 'your-api-key-here') {
    return envKey;
  }
  
  // Fallback to localStorage (for user-provided keys)
  return localStorage.getItem('deepseek_api_key');
};

const callDeepSeekAPI = async (messages: any[], temperature: number = 0.7, maxTokens: number = 500): Promise<string> => {
  const apiKey = getApiKey();
  if (!apiKey) {
    throw new Error('DeepSeek API key not configured');
  }

  const baseUrl = import.meta.env.VITE_DEEPSEEK_BASE_URL || 'https://api.deepseek.com';
  
  const response = await fetch(`${baseUrl}/v1/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'deepseek-chat',
      messages,
      temperature,
      max_tokens: maxTokens,
      stream: false
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`DeepSeek API error: ${response.status} - ${errorText}`);
  }

  const data: DeepSeekResponse = await response.json();
  return data.choices[0]?.message?.content || '';
};

export const analyzeStudentAnswer = async (answer: StudentAnswer): Promise<AIFeedback> => {
  // Check if DeepSeek is configured
  if (!getApiKey()) {
    return generateFallbackFeedback(answer);
  }

  try {
    const achieverContext = answer.context.achieverStatus 
      ? `\nStudent Performance Profile: ${answer.context.achieverStatus} (${answer.context.correctAnswersCount}/${answer.context.totalQuestionsAnswered} correct answers in this chapter)`
      : '';

    const prompt = `
You are an AI tutor for Python programming, specifically designed to help children and beginners learn. 
Analyze the student's answer and provide personalized feedback based on their performance profile.

Question: "${answer.questionText}"
Student's Answer: "${answer.studentAnswer}"
Correct Answer: "${answer.correctAnswer}"
Chapter: ${answer.context.chapterTitle}
Topic: ${answer.context.topic}
Difficulty: ${answer.context.difficulty}${achieverContext}

Please provide feedback in the following JSON format:
{
  "isCorrect": boolean,
  "explanation": "Clear explanation of why the answer is right/wrong (max 100 words)",
  "encouragement": "Positive, motivating message for the student (max 50 words)",
  "nextSteps": ["specific action 1", "specific action 2", "specific action 3"],
  "difficulty": "easy|medium|hard",
  "relatedTopics": ["topic1", "topic2", "topic3"]
}

Guidelines based on student performance:
${answer.context.achieverStatus === 'low achiever' ? `
- LOW ACHIEVER: Be extra encouraging and supportive
- Provide simpler explanations with basic concepts
- Suggest reviewing fundamental materials and taking time to practice
- Recommend easier related topics and step-by-step approaches
- Focus on building confidence and foundational understanding
` : answer.context.achieverStatus === 'average achiever' ? `
- AVERAGE ACHIEVER: Provide balanced feedback
- Give clear explanations with some additional context
- Suggest practicing similar problems and reviewing specific concepts
- Recommend related topics that build on current knowledge
- Encourage continued progress with specific improvement areas
` : answer.context.achieverStatus === 'high achiever' ? `
- HIGH ACHIEVER: Provide challenging and advanced feedback
- Give detailed explanations with deeper insights
- Suggest exploring advanced concepts and challenging problems
- Recommend complex related topics and optimization techniques
- Encourage exploration of advanced programming patterns
` : `
- Provide encouraging and supportive feedback appropriate for beginners
- Use simple language and clear explanations
- Focus on learning and building understanding
`}

Additional guidelines:
- Be encouraging and positive, even for wrong answers
- Use simple language appropriate for beginners
- Focus on learning, not just correctness
- Provide actionable next steps
- Keep explanations concise but helpful
- Suggest related topics they might want to explore
- Respond ONLY with valid JSON, no additional text
`;

    const messages = [
      {
        role: "system",
        content: "You are a helpful, encouraging Python tutor for beginners and children. Always respond with valid JSON only. Adapt your feedback based on the student's performance profile."
      },
      {
        role: "user",
        content: prompt
      }
    ];

    const responseText = await callDeepSeekAPI(messages, 0.7, 600);
    
    if (!responseText) {
      throw new Error('No response from DeepSeek AI');
    }

    // Clean the response to ensure it's valid JSON
    const cleanedResponse = responseText.trim();
    let jsonStart = cleanedResponse.indexOf('{');
    let jsonEnd = cleanedResponse.lastIndexOf('}') + 1;
    
    if (jsonStart === -1 || jsonEnd === 0) {
      throw new Error('Invalid JSON response format');
    }
    
    const jsonString = cleanedResponse.substring(jsonStart, jsonEnd);
    const feedback = JSON.parse(jsonString) as AIFeedback;
    
    // Validate the response structure
    if (!feedback.hasOwnProperty('isCorrect') || !feedback.explanation || !feedback.encouragement) {
      throw new Error('Invalid feedback structure');
    }
    
    return feedback;

  } catch (error) {
    console.error('Error analyzing answer with DeepSeek AI:', error);
    return generateFallbackFeedback(answer);
  }
};

const generateFallbackFeedback = (answer: StudentAnswer): AIFeedback => {
  const isCorrect = answer.studentAnswer.toLowerCase().trim() === answer.correctAnswer.toLowerCase().trim();
  const achieverStatus = answer.context.achieverStatus;
  
  // Customize fallback feedback based on achiever status
  let explanation, encouragement, nextSteps;
  
  if (achieverStatus === 'low achiever') {
    explanation = isCorrect 
      ? "Excellent work! You're getting the hang of this concept. Take your time and keep practicing - you're doing better than you think!"
      : "That's not quite right, but don't worry! Learning programming takes time and patience. Let's break this down into smaller steps and try again.";
    encouragement = isCorrect
      ? "Great job! You're building confidence! 🌟"
      : "Keep trying! Every mistake helps you learn. You've got this! 💪";
    nextSteps = isCorrect
      ? ["Review this concept to make sure you understand it", "Try a similar problem to practice", "Take your time with the next question"]
      : ["Go back and review the lesson material slowly", "Try to understand each part step by step", "Don't hesitate to ask for help"];
  } else if (achieverStatus === 'high achiever') {
    explanation = isCorrect 
      ? "Perfect! You clearly understand this concept well. You might want to explore more advanced applications of this topic."
      : "Close, but not quite right. Since you're doing well overall, let's think about the nuances of this concept and what might have led to this answer.";
    encouragement = isCorrect
      ? "Outstanding work! Ready for the next challenge! 🚀"
      : "Great effort! Use this as a learning opportunity to deepen your understanding! 🧠";
    nextSteps = isCorrect
      ? ["Explore advanced applications of this concept", "Try to solve this problem in a different way", "Look into related advanced topics"]
      : ["Analyze why this answer seemed correct", "Review the subtle differences in similar concepts", "Challenge yourself with harder variations"];
  } else {
    // Average achiever or no status
    explanation = isCorrect 
      ? "Great job! Your answer is correct. You're understanding the concept well and showing good progress in your Python learning journey."
      : "Not quite right, but that's perfectly okay! Learning programming takes practice and patience. Remember, you need 100% correct answers to advance to the next chapter, so take your time to understand each concept.";
    encouragement = isCorrect
      ? "Excellent work! Keep up the fantastic learning! 🌟"
      : "Don't worry, mistakes help us learn! You can redo the chapter if needed to achieve 100%. Keep going! 💪";
    nextSteps = isCorrect
      ? ["Try the next question to continue learning", "Review related concepts to deepen understanding", "Practice with similar problems to reinforce knowledge"]
      : ["Review the lesson material carefully", "Use the redo button if you need to start over", "Practice with similar examples"];
  }
  
  return {
    isCorrect,
    explanation,
    encouragement,
    nextSteps,
    difficulty: 'medium',
    relatedTopics: [answer.context.topic, "Python basics", "Programming fundamentals"]
  };
};

export const generatePersonalizedHint = async (
  questionText: string, 
  studentAttempts: string[], 
  context: { chapterTitle: string; topic: string; achieverStatus?: string }
): Promise<string> => {
  if (!getApiKey()) {
    return generateFallbackHint(context.achieverStatus);
  }

  try {
    const achieverContext = context.achieverStatus 
      ? `\nStudent Performance Level: ${context.achieverStatus}`
      : '';

    const prompt = `
You are helping a student who is struggling with a Python question. 
Provide a helpful hint without giving away the answer.

Question: "${questionText}"
Student's previous attempts: ${studentAttempts.length > 0 ? studentAttempts.join(', ') : 'No previous attempts'}
Chapter: ${context.chapterTitle}
Topic: ${context.topic}${achieverContext}

${context.achieverStatus === 'low achiever' ? `
This student is a LOW ACHIEVER - provide very simple, encouraging hints that break down the problem into tiny steps.
` : context.achieverStatus === 'high achiever' ? `
This student is a HIGH ACHIEVER - provide more sophisticated hints that challenge them to think deeper.
` : `
Provide a balanced hint appropriate for an average learner.
`}

Provide a single, encouraging hint (max 50 words) that guides them toward the solution without revealing it.
Be specific and actionable. Use simple language for beginners.
Respond with ONLY the hint text, no additional formatting.
`;

    const messages = [
      {
        role: "system",
        content: "You are a helpful Python tutor. Provide hints, not answers. Keep responses concise and encouraging. Adapt to the student's performance level."
      },
      {
        role: "user",
        content: prompt
      }
    ];

    const hintText = await callDeepSeekAPI(messages, 0.8, 100);
    return hintText.trim() || generateFallbackHint(context.achieverStatus);

  } catch (error) {
    console.error('Error generating hint with DeepSeek:', error);
    return generateFallbackHint(context.achieverStatus);
  }
};

const generateFallbackHint = (achieverStatus?: string): string => {
  if (achieverStatus === 'low achiever') {
    return "Take it step by step. Read the question slowly and think about what each word means.";
  } else if (achieverStatus === 'high achiever') {
    return "Consider the edge cases and think about what the question is really testing. What concept is at the core of this problem?";
  } else {
    return "Try breaking down the problem into smaller steps. Look at the examples in the lesson for guidance.";
  }
};

export const testDeepSeekConnection = async (): Promise<boolean> => {
  try {
    const messages = [
      {
        role: "user",
        content: "Hello, please respond with just the word 'success' to test the connection."
      }
    ];

    const response = await callDeepSeekAPI(messages, 0.1, 10);
    return response.toLowerCase().includes('success');
  } catch (error) {
    console.error('DeepSeek connection test failed:', error);
    return false;
  }
};