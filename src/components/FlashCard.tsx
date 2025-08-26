import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { FlashCard as FlashCardType } from '../types';

interface FlashCardProps {
  card: FlashCardType;
  onFlip: () => void;
  disabled?: boolean;
}

export const FlashCard: React.FC<FlashCardProps> = ({ card, onFlip, disabled = false }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    if (disabled) return;
    
    setIsFlipped(!isFlipped);
    
    // Only call onFlip (which awards points) when flipping to back for the first time
    if (!isFlipped && !card.flipped) {
      onFlip();
    }
  };

  return (
    <div className="perspective-1000 w-full h-48">
      <div 
        className={`relative w-full h-full cursor-pointer transition-transform duration-600 preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={handleFlip}
      >
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl shadow-lg flex items-center justify-center p-6">
          <div className="text-center text-white">
            <div className="text-4xl mb-4">🎴</div>
            <p className="text-lg font-medium mb-4">{card.front}</p>
            <div className="flex items-center justify-center text-purple-200 text-sm">
              <RotateCcw className="w-4 h-4 mr-1" />
              Click to flip
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-teal-500 to-green-600 rounded-xl shadow-lg flex items-center justify-center p-6">
          <div className="text-center text-white">
            <div className="text-4xl mb-4">✨</div>
            <p className="text-lg leading-relaxed">{card.back}</p>
            {card.flipped && (
              <div className="mt-4 text-teal-200 text-sm font-medium">
                +5 points earned!
              </div>
            )}
            <div className="mt-4 flex items-center justify-center text-teal-200 text-sm">
              <RotateCcw className="w-4 h-4 mr-1" />
              Click to flip back
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};