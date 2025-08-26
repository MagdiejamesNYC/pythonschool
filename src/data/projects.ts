import { CodingProject } from '../types';

export const projects: CodingProject[] = [
  {
    id: 1,
    title: "Maya's Magic Pet Shop",
    description: "Help Maya organize her magical pet shop by creating variables for her adorable creatures!",
    difficulty: "Beginner",
    points: 50,
    requirements: [
      "Create variables to store information about Maya's magical pets",
      "Use different data types: strings for names, numbers for ages, and booleans for special abilities",
      "Print a welcome message for Maya's pet shop"
    ],
    testCases: [
      {
        id: 1,
        input: "Check if pet_name is a string",
        expectedOutput: "True",
        description: "Pet name should be stored as text"
      },
      {
        id: 2,
        input: "Check if pet_age is a number",
        expectedOutput: "True", 
        description: "Pet age should be stored as a number"
      },
      {
        id: 3,
        input: "Check if can_fly is True or False",
        expectedOutput: "True",
        description: "Flying ability should be True or False"
      },
      {
        id: 4,
        input: "Check if welcome message contains 'Maya'",
        expectedOutput: "True",
        description: "Welcome message should mention Maya"
      }
    ],
    starterCode: `# Maya's Magic Pet Shop
# Help Maya organize information about her magical pets!

# Create variables for a magical pet
pet_name = # Put the pet's name here (use quotes for text!)
pet_age = # Put the pet's age here (just a number!)
can_fly = # Can this pet fly? (True or False)

# Create a welcome message for Maya's shop
welcome_message = # Create a message like "Welcome to Maya's Magic Pet Shop!"

# Let's see what you created!
print("Pet Name:", pet_name)
print("Pet Age:", pet_age)
print("Can Fly:", can_fly)
print(welcome_message)`,
    hints: [
      "Remember to put text in quotes like 'Sparkles' or \"Fluffy\"",
      "Numbers don't need quotes, just write them like 3 or 7",
      "For True/False, write exactly True or False (with capital letters)",
      "You can create the welcome message like: 'Welcome to Maya's Magic Pet Shop!'"
    ],
    unlocked: true,
    completed: false
  },
  {
    id: 2,
    title: "Number Calculator Adventure",
    description: "Create a simple calculator that can add two numbers",
    difficulty: "Beginner",
    points: 100,
    requirements: [
      "Create a function called 'add_numbers' that takes two parameters",
      "The function should return the sum of the two numbers",
      "Handle both integer and float inputs"
    ],
    testCases: [
      {
        id: 1,
        input: "add_numbers(5, 3)",
        expectedOutput: "8",
        description: "Adding two positive integers"
      },
      {
        id: 2,
        input: "add_numbers(-2, 7)",
        expectedOutput: "5",
        description: "Adding negative and positive numbers"
      },
      {
        id: 3,
        input: "add_numbers(3.5, 2.1)",
        expectedOutput: "5.6",
        description: "Adding decimal numbers"
      },
      {
        id: 4,
        input: "add_numbers(0, 0)",
        expectedOutput: "0",
        description: "Adding zeros"
      }
    ],
    starterCode: `def add_numbers(a, b):
    # Write your code here
    pass

# Test your function
print(add_numbers(5, 3))`,
    hints: [
      "Use the + operator to add two numbers",
      "Make sure to return the result, not print it",
      "Python handles integers and floats automatically"
    ],
    unlocked: false,
    completed: false
  },
  {
    id: 3,
    title: "String Manipulator",
    description: "Build a function that processes and formats text strings",
    difficulty: "Beginner",
    points: 200,
    requirements: [
      "Create a function called 'format_name' that takes a full name",
      "Return the name in 'Last, First' format",
      "Handle names with different numbers of parts",
      "Capitalize each part properly"
    ],
    testCases: [
      {
        id: 1,
        input: "format_name('john doe')",
        expectedOutput: "'Doe, John'",
        description: "Format a simple two-part name"
      },
      {
        id: 2,
        input: "format_name('mary jane watson')",
        expectedOutput: "'Watson, Mary Jane'",
        description: "Format a three-part name"
      },
      {
        id: 3,
        input: "format_name('ALICE SMITH')",
        expectedOutput: "'Smith, Alice'",
        description: "Handle uppercase input"
      },
      {
        id: 4,
        input: "format_name('bob')",
        expectedOutput: "'Bob'",
        description: "Handle single name"
      }
    ],
    starterCode: `def format_name(full_name):
    # Write your code here
    pass

# Test your function
print(format_name('john doe'))`,
    hints: [
      "Use split() to separate the name parts",
      "Use title() or capitalize() to fix capitalization",
      "Check the length of the split result",
      "Use join() or string concatenation to build the result"
    ],
    unlocked: false,
    completed: false
  },
  {
    id: 4,
    title: "List Data Analyzer",
    description: "Create a function that analyzes a list of numbers and returns statistics",
    difficulty: "Intermediate",
    points: 300,
    requirements: [
      "Create a function called 'analyze_numbers' that takes a list of numbers",
      "Return a dictionary with: sum, average, min, max, and count",
      "Handle empty lists gracefully",
      "Round averages to 2 decimal places"
    ],
    testCases: [
      {
        id: 1,
        input: "analyze_numbers([1, 2, 3, 4, 5])",
        expectedOutput: "{'sum': 15, 'average': 3.0, 'min': 1, 'max': 5, 'count': 5}",
        description: "Analyze a simple list"
      },
      {
        id: 2,
        input: "analyze_numbers([10, -5, 3.5, 0])",
        expectedOutput: "{'sum': 8.5, 'average': 2.12, 'min': -5, 'max': 10, 'count': 4}",
        description: "Analyze mixed positive/negative numbers"
      },
      {
        id: 3,
        input: "analyze_numbers([])",
        expectedOutput: "{'sum': 0, 'average': 0, 'min': None, 'max': None, 'count': 0}",
        description: "Handle empty list"
      },
      {
        id: 4,
        input: "analyze_numbers([7])",
        expectedOutput: "{'sum': 7, 'average': 7.0, 'min': 7, 'max': 7, 'count': 1}",
        description: "Analyze single number"
      }
    ],
    starterCode: `def analyze_numbers(numbers):
    # Write your code here
    pass

# Test your function
print(analyze_numbers([1, 2, 3, 4, 5]))`,
    hints: [
      "Use built-in functions: sum(), min(), max(), len()",
      "Check if the list is empty before calculating min/max",
      "Use round() to round the average to 2 decimal places",
      "Return a dictionary with the required keys"
    ],
    unlocked: false,
    completed: false
  },
  {
    id: 5,
    title: "Password Validator",
    description: "Build a secure password validation system with multiple criteria",
    difficulty: "Intermediate",
    points: 400,
    requirements: [
      "Create a function called 'validate_password' that checks password strength",
      "Return a dictionary with 'valid' (boolean) and 'errors' (list)",
      "Check: length >= 8, has uppercase, lowercase, digit, special character",
      "Special characters: !@#$%^&*"
    ],
    testCases: [
      {
        id: 1,
        input: "validate_password('MyPass123!')",
        expectedOutput: "{'valid': True, 'errors': []}",
        description: "Valid strong password"
      },
      {
        id: 2,
        input: "validate_password('weak')",
        expectedOutput: "{'valid': False, 'errors': ['Too short', 'Missing uppercase', 'Missing digit', 'Missing special character']}",
        description: "Weak password with multiple issues"
      },
      {
        id: 3,
        input: "validate_password('NoSpecial123')",
        expectedOutput: "{'valid': False, 'errors': ['Missing special character']}",
        description: "Missing only special character"
      },
      {
        id: 4,
        input: "validate_password('lowercase123!')",
        expectedOutput: "{'valid': False, 'errors': ['Missing uppercase']}",
        description: "Missing only uppercase"
      }
    ],
    starterCode: `def validate_password(password):
    # Write your code here
    pass

# Test your function
print(validate_password('MyPass123!'))`,
    hints: [
      "Use len() to check password length",
      "Use any() with generator expressions to check character types",
      "Check: password.isupper(), password.islower(), password.isdigit()",
      "Define special characters as a string and use 'in' operator"
    ],
    unlocked: false,
    completed: false
  },
  {
    id: 6,
    title: "Advanced File Processor",
    description: "Create a sophisticated text file analyzer that processes and summarizes content",
    difficulty: "Advanced",
    points: 500,
    requirements: [
      "Create a function called 'analyze_text' that takes text content",
      "Return analysis: word count, sentence count, most common word, reading time",
      "Calculate reading time (assume 200 words per minute)",
      "Handle punctuation and case-insensitive word counting"
    ],
    testCases: [
      {
        id: 1,
        input: "analyze_text('Hello world. This is a test. Hello again!')",
        expectedOutput: "{'word_count': 8, 'sentence_count': 3, 'most_common_word': 'hello', 'reading_time_minutes': 0.04}",
        description: "Analyze simple text"
      },
      {
        id: 2,
        input: "analyze_text('Python is great! Python is powerful. I love Python programming.')",
        expectedOutput: "{'word_count': 9, 'sentence_count': 3, 'most_common_word': 'python', 'reading_time_minutes': 0.045}",
        description: "Text with repeated words"
      },
      {
        id: 3,
        input: "analyze_text('')",
        expectedOutput: "{'word_count': 0, 'sentence_count': 0, 'most_common_word': '', 'reading_time_minutes': 0}",
        description: "Empty text"
      },
      {
        id: 4,
        input: "analyze_text('One sentence')",
        expectedOutput: "{'word_count': 2, 'sentence_count': 1, 'most_common_word': 'one', 'reading_time_minutes': 0.01}",
        description: "Single sentence without punctuation"
      }
    ],
    starterCode: `def analyze_text(text):
    # Write your code here
    pass

# Test your function
print(analyze_text('Hello world. This is a test. Hello again!'))`,
    hints: [
      "Use split() to count words, handle empty strings",
      "Count sentences by looking for '.', '!', '?' characters",
      "Use collections.Counter or manual counting for most common word",
      "Remove punctuation and convert to lowercase for word analysis",
      "Reading time = word_count / 200 (words per minute)"
    ],
    unlocked: false,
    completed: false
  }
];