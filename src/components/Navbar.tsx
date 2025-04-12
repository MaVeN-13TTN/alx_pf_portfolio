"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
  const pathname = usePathname();
  const { isDarkMode, toggleTheme } = useTheme();

  const isActive = (path: string) => {
    return pathname === path
      ? 'text-accent font-medium'
      : 'text-body hover:text-accent transition-colors duration-200';
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-semibold text-heading hover:text-accent transition-colors duration-200"
            style={{
              fontWeight: 'var(--font-weight-semibold)',
              letterSpacing: 'var(--letter-spacing-tight)'
            }}
          >
            Ndung&apos;u Kinyanjui
          </Link>
          <div className="flex items-center space-x-8">
            <Link
              href="/bio"
              className={`flex items-center ${isActive('/bio')}`}
              style={{
                fontWeight: 'var(--font-weight-medium)',
                letterSpacing: 'var(--letter-spacing-normal)'
              }}
            >
              Bio
            </Link>
            <Link
              href="/portfolio"
              className={`flex items-center ${isActive('/portfolio')}`}
              style={{
                fontWeight: 'var(--font-weight-medium)',
                letterSpacing: 'var(--letter-spacing-normal)'
              }}
            >
              Portfolio
            </Link>
            <Link
              href="/elevator-pitch"
              className={`flex items-center ${isActive('/elevator-pitch')}`}
              style={{
                fontWeight: 'var(--font-weight-medium)',
                letterSpacing: 'var(--letter-spacing-normal)'
              }}
            >
              Elevator Pitch
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-heading dark:text-secondary hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center"
              aria-label="Toggle theme"
            >
              <span className="w-5 h-5 flex items-center justify-center">
                {isDarkMode ? "☀️" : "🌙"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
