'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import {
  // Cloud Computing
  Cloud, Database, Server,
  // Cybersecurity
  Shield, ShieldCheck, Lock, Key,
  // DevOps
  GitBranch, Terminal, Workflow, Settings,
  // Additional Tech Icons
  Globe, Wifi, HardDrive, Code
} from 'lucide-react';

type IconSize = "lg" | "md" | "sm";
type IconType = "fill" | "outline";

interface IconConfig {
  size: IconSize;
  type: IconType;
  Icon: React.ElementType;
}

// Create a dense background with many tech icons
const generateIcons = (): IconConfig[] => {
  const baseIcons: IconConfig[] = [
    // Cloud Computing
    { size: "lg", type: "fill", Icon: Cloud },
    { size: "md", type: "outline", Icon: Database },
    { size: "lg", type: "fill", Icon: Server },

    // Cybersecurity
    { size: "lg", type: "fill", Icon: Shield },
    { size: "md", type: "outline", Icon: ShieldCheck },
    { size: "sm", type: "fill", Icon: Lock },
    { size: "lg", type: "outline", Icon: Key },

    // DevOps
    { size: "md", type: "fill", Icon: GitBranch },
    { size: "lg", type: "outline", Icon: Terminal },
    { size: "sm", type: "fill", Icon: Workflow },
    { size: "md", type: "outline", Icon: Settings },

    // Additional Tech Icons
    { size: "lg", type: "fill", Icon: Globe },
    { size: "md", type: "outline", Icon: Wifi },
    { size: "sm", type: "fill", Icon: HardDrive },
    { size: "lg", type: "outline", Icon: Code }
  ];

  // Create a larger array by duplicating and mixing the base icons
  const allIcons: IconConfig[] = [];

  // Add the base icons
  allIcons.push(...baseIcons);

  // Add duplicates with variations
  for (let i = 0; i < 5; i++) { // Create 5 sets of duplicates for higher density
    baseIcons.forEach(icon => {
      const sizeVariations: IconSize[] = ["sm", "md", "lg"];
      const typeVariations: IconType[] = ["fill", "outline"];

      // Randomize size and type for variety
      const size = sizeVariations[Math.floor(Math.random() * sizeVariations.length)];
      const type = typeVariations[Math.floor(Math.random() * typeVariations.length)];

      allIcons.push({ size, type, Icon: icon.Icon });
    });
  }

  return allIcons;
};

const icons = generateIcons();

interface DynamicBackgroundProps {
  children: React.ReactNode;
}

const DynamicBackground = ({ children }: DynamicBackgroundProps) => {
  const { isDarkMode } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setHasMounted(true);
    setDimensions({
      width: backgroundRef.current?.offsetWidth || 0,
      height: backgroundRef.current?.offsetHeight || 0
    });

    const handleResize = () => {
      setDimensions({
        width: backgroundRef.current?.offsetWidth || 0,
        height: backgroundRef.current?.offsetHeight || 0
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!backgroundRef.current) return;

    const backgroundElement = backgroundRef.current;

    // Subtle floating animation for icons
    iconsRef.current.forEach((icon) => {
      if (!icon) return;
      const randomDelay = Math.random() * 5; // Random delay between 0-5s
      const randomDuration = 15 + Math.random() * 20; // Random duration between 15-35s

      // Generate a random rotation angle
      const rotationAngle = Math.random() * 360;

      // Set the CSS custom property for rotation
      icon.style.setProperty('--rotation', `rotate(${rotationAngle}deg)`);

      // Apply the floating animation
      icon.style.animation = `float ${randomDuration}s ease-in-out ${randomDelay}s infinite`;
    });

    // Mouse movement effect
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const rect = backgroundElement.getBoundingClientRect();

      iconsRef.current.forEach((icon, index) => {
        if (!icon) return;
        const speed = (index % 5 + 1) * 0.02; // Slightly reduced speed for smoother movement
        const x = (clientX - rect.left - dimensions.width / 2) * speed;
        const y = (clientY - rect.top - dimensions.height / 2) * speed;

        // Apply mouse movement (the rotation is handled by the CSS animation via custom property)
        icon.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    backgroundElement.addEventListener('mousemove', handleMouseMove);
    return () => backgroundElement.removeEventListener('mousemove', handleMouseMove);
  }, [dimensions]);

  const getIconSize = (size: IconSize) => {
    switch (size) {
      case 'lg': return 'w-12 h-12';
      case 'md': return 'w-8 h-8';
      case 'sm': return 'w-6 h-6';
      default: return 'w-8 h-8';
    }
  };

  // Theme-adaptive colors
  // In dark mode: use warm colors (warning, orange, amber)
  // In light mode: use cool colors (accent, blue, indigo)
  const getIconColor = (type: IconType, index: number) => {
    // Create color variations based on index
    const darkModeColors = [
      'text-warning', 'text-orange-400', 'text-amber-400', 'text-yellow-400',
      'text-warning/80', 'text-orange-400/80', 'text-amber-400/80', 'text-yellow-400/80'
    ];

    const lightModeColors = [
      'text-accent', 'text-blue-500', 'text-indigo-500', 'text-violet-500',
      'text-accent/80', 'text-blue-500/80', 'text-indigo-500/80', 'text-violet-500/80'
    ];

    const colorIndex = index % 8;
    const colors = isDarkMode ? darkModeColors : lightModeColors;

    if (type === "outline") {
      // For outline icons, use more transparent versions
      return colors[colorIndex].replace(/\/80$/, '/40');
    }

    return colors[colorIndex];
  };

  return (
    <div
      className="relative w-full overflow-hidden min-h-screen"
      ref={backgroundRef}
    >
      {hasMounted && (
        <div className="absolute inset-0 pointer-events-none">
          {icons.map(({ size, type, Icon }, i) => (
            <div
              key={i}
              ref={(el: HTMLDivElement | null) => {
                if (iconsRef.current) {
                  iconsRef.current[i] = el;
                }
              }}
              className={`absolute transition-all duration-300 ease-out opacity-5 hover:opacity-20 ${getIconSize(size)}`}
              style={{
                // Distribute icons more evenly across the screen
                top: `${(i % 10) * (dimensions.height / 10) + Math.random() * (dimensions.height / 10)}px`,
                left: `${Math.floor(i / 10) * (dimensions.width / 10) + Math.random() * (dimensions.width / 10)}px`,
                transform: `rotate(${Math.random() * 360}deg)` // Add random rotation for more visual interest
              }}
            >
              <Icon
                className={`w-full h-full ${getIconColor(type, i)}`}
                strokeWidth={type === 'outline' ? 1 : 1.5}
              />
            </div>
          ))}
        </div>
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default DynamicBackground;
