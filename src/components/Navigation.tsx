import React from 'react';
import { BookOpen, TextSelection as Collection, ShoppingBag, Home, Code, Shield } from 'lucide-react';

interface NavigationProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentView, onViewChange }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'chapters', label: 'Learn', icon: BookOpen },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'collection', label: 'Collection', icon: Collection },
    { id: 'shop', label: 'Shop', icon: ShoppingBag },
    { id: 'compliance', label: 'Legal', icon: Shield }
  ];

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex space-x-8">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => onViewChange(id)}
              className={`flex items-center space-x-2 px-4 py-4 border-b-2 transition-colors ${
                currentView === id
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-600 hover:text-purple-500 hover:border-purple-300'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};