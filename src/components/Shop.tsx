import React, { useState } from 'react';
import { ShoppingBag, Sparkles, Zap } from 'lucide-react';
import { UserProgress, Creature } from '../types';

interface ShopProps {
  progress: UserProgress;
  onBuyEgg: (cost: number) => boolean;
  onHatchEgg: () => Creature | null;
}

export const Shop: React.FC<ShopProps> = ({ progress, onBuyEgg, onHatchEgg }) => {
  const [hatchedCreature, setHatchedCreature] = useState<Creature | null>(null);
  const [isHatching, setIsHatching] = useState(false);

  const eggPrices = [
    { name: 'Common Egg', cost: 50, rarity: 'Common', description: 'Basic egg with common creatures' },
    { name: 'Rare Egg', cost: 150, rarity: 'Rare', description: 'Special egg with rare creatures' },
    { name: 'Epic Egg', cost: 300, rarity: 'Epic', description: 'Premium egg with epic creatures' },
    { name: 'Legendary Egg', cost: 600, rarity: 'Legendary', description: 'Mythical egg with legendary creatures' }
  ];

  const handleBuyEgg = (cost: number) => {
    const success = onBuyEgg(cost);
    if (success) {
      // Show success animation or message
    }
  };

  const handleHatchEgg = async () => {
    if (progress.eggs === 0 || isHatching) return;
    
    setIsHatching(true);
    
    // Add some suspense with delay
    setTimeout(() => {
      const creature = onHatchEgg();
      setHatchedCreature(creature);
      setIsHatching(false);
      
      // Clear the result after showing it
      if (creature) {
        setTimeout(() => setHatchedCreature(null), 4000);
      }
    }, 2000);
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common': return 'from-gray-500 to-gray-600';
      case 'Rare': return 'from-blue-500 to-blue-600';
      case 'Epic': return 'from-purple-500 to-purple-600';
      case 'Legendary': return 'from-yellow-500 to-yellow-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-6">
            <ShoppingBag className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Creature Shop</h1>
          <p className="text-xl text-gray-600 mb-6">
            Spend your hard-earned points on mysterious eggs!
          </p>
          <div className="flex items-center justify-center space-x-2 text-lg">
            <Zap className="w-6 h-6 text-yellow-500" />
            <span className="font-bold text-gray-800">{progress.points} points</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Egg Shop */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Buy Eggs</h2>
            
            {eggPrices.map((egg, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="text-3xl">🥚</div>
                      <h3 className="text-xl font-bold text-gray-800">{egg.name}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{egg.description}</p>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Zap className="w-4 h-4 text-yellow-500" />
                        <span className="font-semibold">{egg.cost} points</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${getRarityColor(egg.rarity)}`}>
                        {egg.rarity}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleBuyEgg(egg.cost)}
                    disabled={progress.points < egg.cost}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 ${
                      progress.points >= egg.cost
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 shadow-lg'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Buy Egg
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Hatch Eggs */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Hatch Eggs</h2>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="mb-6">
                <div className="text-8xl mb-4">
                  {isHatching ? '🌟' : '🥚'}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {isHatching ? 'Hatching...' : 'Your Eggs'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {isHatching 
                    ? 'Something magical is happening!'
                    : `You have ${progress.eggs} eggs ready to hatch`
                  }
                </p>
              </div>

              {progress.eggs > 0 ? (
                <button
                  onClick={handleHatchEgg}
                  disabled={isHatching}
                  className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 ${
                    isHatching
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-teal-600 to-green-600 text-white hover:from-teal-700 hover:to-green-700 shadow-lg'
                  }`}
                >
                  {isHatching ? (
                    <div className="flex items-center space-x-2">
                      <Sparkles className="w-5 h-5 animate-spin" />
                      <span>Hatching...</span>
                    </div>
                  ) : (
                    `Hatch Egg (${progress.eggs} available)`
                  )}
                </button>
              ) : (
                <div className="text-gray-500">
                  <p className="mb-4">No eggs to hatch!</p>
                  <p className="text-sm">Buy eggs from the shop to start collecting creatures.</p>
                </div>
              )}

              {/* Hatched Creature Display */}
              {hatchedCreature && (
                <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-200">
                  <div className="text-6xl mb-4">{hatchedCreature.emoji}</div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    Congratulations! 🎉
                  </h4>
                  <p className="text-lg font-semibold text-purple-600 mb-2">
                    You discovered: {hatchedCreature.name}
                  </p>
                  <p className="text-gray-600 text-sm mb-2">
                    {hatchedCreature.description}
                  </p>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${getRarityColor(hatchedCreature.rarity)}`}>
                    {hatchedCreature.rarity}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};