"use client";

import React, { useEffect, useRef, useState } from 'react';
import { X, ChevronDown, ChevronUp } from 'lucide-react';
import { detailedSkillCategories, DetailedSkillCategory } from '@/data/skills';

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
  const [expandedSkills, setExpandedSkills] = useState<{[key: string]: boolean}>({});
  const [detailedCategory, setDetailedCategory] = useState<DetailedSkillCategory | null>(null);

  useEffect(() => {
    if (category && isOpen) {
      // Find the detailed category that matches the selected category
      const detailed = detailedSkillCategories.find(cat => cat.id === category.id);
      setDetailedCategory(detailed || null);

      // Initialize all skills as collapsed
      if (detailed) {
        const initialExpandState = detailed.skills.reduce((acc, skill) => {
          acc[skill.name] = false;
          return acc;
        }, {} as {[key: string]: boolean});
        setExpandedSkills(initialExpandState);
      }
    }
  }, [category, isOpen]);

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

  const toggleSkill = (skillName: string) => {
    setExpandedSkills(prev => ({
      ...prev,
      [skillName]: !prev[skillName]
    }));
  };

  if (!isOpen || !category || !detailedCategory) return null;

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

  // We're now using expandable sections instead of skill level indicators

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
          <h3 className="text-xl font-semibold mb-4 text-heading">Detailed Skills</h3>
          <p className="text-secondary mb-6">{detailedCategory.description}</p>

          <div className="space-y-4">
            {detailedCategory.skills.map((skill, index) => (
              <div key={index} className="border border-border rounded-lg overflow-hidden">
                <div
                  className={`flex justify-between items-center p-4 ${colors.bg} cursor-pointer`}
                  onClick={() => toggleSkill(skill.name)}
                >
                  <h4 className="font-semibold text-heading flex items-center">
                    {skill.name}
                  </h4>
                  <button className={`p-1 hover:${colors.bg} rounded-full transition-colors`}>
                    {expandedSkills[skill.name] ?
                      <ChevronUp className="w-5 h-5 text-secondary" /> :
                      <ChevronDown className="w-5 h-5 text-secondary" />}
                  </button>
                </div>

                {expandedSkills[skill.name] && (
                  <div className="p-4 bg-background">
                    <p className="text-secondary mb-4">{skill.description}</p>
                    <div className="space-y-2">
                      <h5 className="font-medium text-heading">Key Skills:</h5>
                      <ul className="list-disc pl-5 space-y-1">
                        {skill.items.map((item, i) => (
                          <li key={i} className="text-secondary">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsModal;
