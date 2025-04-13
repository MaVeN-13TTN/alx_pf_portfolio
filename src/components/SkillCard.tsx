"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Cloud, Shield, Code, Settings, Brain } from 'lucide-react';

interface SkillCardProps {
  title: string;
  description: string;
  icon: string;
  onClick?: () => void;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, description, icon, onClick }) => {
  // Function to render the appropriate icon
  const renderIcon = () => {
    switch (icon) {
      case 'cloud':
        return <Cloud className="w-6 h-6 text-accent" />;
      case 'shield':
        return <Shield className="w-6 h-6 text-success" />;
      case 'code':
        return <Code className="w-6 h-6 text-warning" />;
      case 'settings':
        return <Settings className="w-6 h-6 text-warning" />;
      case 'brain':
        return <Brain className="w-6 h-6 text-accent" />;
      default:
        return <Code className="w-6 h-6 text-accent" />;
    }
  };

  return (
    <div 
      className="glassmorphism p-6 rounded-xl hover:shadow-md transition-all duration-300 hover:scale-[1.02] cursor-pointer"
      onClick={onClick}
    >
      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
        {renderIcon()}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-heading">{title}</h3>
      <p className="text-secondary mb-4">{description}</p>
      
      {onClick && (
        <div className="mt-4 flex items-center justify-center">
          <button className="px-4 py-2 bg-accent/10 hover:bg-accent/20 text-accent rounded-md text-sm font-medium transition-all duration-300 flex items-center">
            View Details <ArrowRight className="ml-1 w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default SkillCard;
