"use client";

import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  description: string;
  icon?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  color: string;
  description: string;
  skills: Skill[];
}

interface SkillsModalProps {
  category: SkillCategory | null;
  isOpen: boolean;
  onClose: () => void;
}

const SkillsModal: React.FC<SkillsModalProps> = ({ category, isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !category) return null;

  // Determine the color classes based on the category color
  const getColorClasses = () => {
    switch (category.color) {
      case 'accent':
        return {
          bg: 'bg-accent/10',
          text: 'text-accent',
          border: 'border-accent/20',
          pill: 'bg-accent/5 text-accent'
        };
      case 'success':
        return {
          bg: 'bg-success/10',
          text: 'text-success',
          border: 'border-success/20',
          pill: 'bg-success/5 text-success'
        };
      case 'warning':
        return {
          bg: 'bg-warning/10',
          text: 'text-warning',
          border: 'border-warning/20',
          pill: 'bg-warning/5 text-warning'
        };
      default:
        return {
          bg: 'bg-accent/10',
          text: 'text-accent',
          border: 'border-accent/20',
          pill: 'bg-accent/5 text-accent'
        };
    }
  };

  const colors = getColorClasses();

  // Function to render the skill level indicator
  const renderSkillLevel = (level: Skill['level']) => {
    const levels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];
    const index = levels.indexOf(level);

    return (
      <div className="flex items-center space-x-1 mt-1">
        {levels.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 w-6 rounded-full ${i <= index ? colors.text : 'bg-gray-200 dark:bg-gray-700'}`}
          />
        ))}
        <span className="ml-2 text-xs text-secondary">{level}</span>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md animate-fade-in">
      <div
        ref={modalRef}
        className="glassmorphism rounded-xl shadow-xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col animate-scale-in"
      >
        {/* Header */}
        <div className={`p-6 ${colors.bg} border-b ${colors.border}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 rounded-full ${colors.bg} flex items-center justify-center`}>
                <span className="text-2xl">{category.icon}</span>
              </div>
              <h2 className="text-2xl font-bold text-heading">{category.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-background/20 text-secondary hover:text-heading transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <p className="mt-4 text-secondary">{category.description}</p>
        </div>

        {/* Skills list */}
        <div className="p-6 overflow-y-auto">
          <h3 className="text-xl font-semibold mb-4 text-heading">Skills & Proficiency</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {category.skills.map((skill, index) => (
              <div key={index} className="glassmorphism p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-heading flex items-center">
                    {skill.icon && <span className="mr-2">{skill.icon}</span>}
                    {skill.name}
                  </h4>
                  <span className={`px-2 py-1 text-xs rounded-full ${colors.pill}`}>
                    {skill.level}
                  </span>
                </div>
                {renderSkillLevel(skill.level)}
                <p className="mt-2 text-secondary text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsModal;
