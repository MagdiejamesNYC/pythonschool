import React, { useState } from 'react';
import { Filter, Search } from 'lucide-react';
import { Creature } from '../types';

interface CollectionProps {
  creatures: Creature[];
}

export const Collection: React.FC<CollectionProps> = ({ creatures }) => {
  const [filterRarity, setFilterRarity] = useState<string>('all');
  const [filterCollected, setFilterCollected] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCreatures = creatures.filter(creature => {
    const matchesRarity = filterRarity === 'all' || creature.rarity === filterRarity;
    const matchesCollected = filterCollected === 'all' || 
      (filterCollected === 'collected' && creature.collected) ||
      (filterCollected === 'uncollected' && !creature.collected);
    const matchesSearch = creature.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      creature.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesRarity && matchesCollected && matchesSearch;
  });

  const collectedCount = creatures.filter(c => c.collected).length;
  const totalCount = creatures.length;

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common': return 'bg-gray-100 text-gray-800 border-gray-300';
      case 'Rare': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Epic': return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'Legendary': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Creature Collection</h1>
          <p className="text-xl text-gray-600 mb-6">
            Collected {collectedCount} of {totalCount} creatures
          </p>
          <div className="max-w-md mx-auto bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${(collectedCount / totalCount) * 100}%` }}
            />
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-700">Filters:</span>
            </div>
            
            <select
              value={filterRarity}
              onChange={(e) => setFilterRarity(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="all">All Rarities</option>
              <option value="Common">Common</option>
              <option value="Rare">Rare</option>
              <option value="Epic">Epic</option>
              <option value="Legendary">Legendary</option>
            </select>
            
            <select
              value={filterCollected}
              onChange={(e) => setFilterCollected(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="all">All Creatures</option>
              <option value="collected">Collected</option>
              <option value="uncollected">Not Collected</option>
            </select>
            
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search creatures..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Creatures Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCreatures.map((creature) => (
            <div
              key={creature.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all transform hover:scale-105 ${
                creature.collected ? '' : 'opacity-60'
              }`}
            >
              <div className="p-6 text-center">
                <div className={`text-6xl mb-4 ${creature.collected ? '' : 'grayscale'}`}>
                  {creature.collected ? creature.emoji : '❓'}
                </div>
                
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {creature.collected ? creature.name : '???'}
                </h3>
                
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium border mb-3 ${getRarityColor(creature.rarity)}`}>
                  {creature.rarity}
                </div>
                
                <p className="text-gray-600 text-sm">
                  {creature.collected ? creature.description : 'Keep learning to discover this creature!'}
                </p>
                
                {!creature.collected && (
                  <div className="mt-4 text-purple-600 text-sm font-medium">
                    🥚 Hatch eggs to unlock
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredCreatures.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">No creatures found</h3>
            <p className="text-gray-600">Try adjusting your filters or search term.</p>
          </div>
        )}
      </div>
    </div>
  );
};