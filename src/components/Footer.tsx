"use client";

import React from 'react';
import Link from 'next/link';
import { Mail, ArrowUp, Phone } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border/50 mt-auto relative z-10 backdrop-blur-sm bg-background/80 transition-all duration-300">
      {/* Main footer content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {/* About section */}
          <div className="p-4">
            <h3 className="text-lg font-semibold text-heading mb-4">Ndung&apos;u Kinyanjui</h3>
            <p className="text-secondary mb-4 max-w-md">
              Cloud Engineer and Cybersecurity Analyst focused on building secure, scalable digital solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/ndungu-kinyanjui/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-accent hover:bg-accent/5 transition-all duration-200 p-2 rounded-md"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/MaVeN-13TTN"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-accent hover:bg-accent/5 transition-all duration-200 p-2 rounded-md"
                aria-label="GitHub Profile"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-secondary hover:text-accent hover:bg-accent/5 transition-all duration-200 p-2 rounded-md"
                aria-label="Email Contact"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="p-4">
            <h3 className="text-lg font-semibold text-heading mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-secondary hover:text-accent hover:bg-accent/5 transition-all duration-200 inline-block px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/bio" className="text-secondary hover:text-accent hover:bg-accent/5 transition-all duration-200 inline-block px-3 py-2 rounded-md text-sm font-medium">
                  My Story
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-secondary hover:text-accent hover:bg-accent/5 transition-all duration-200 inline-block px-3 py-2 rounded-md text-sm font-medium">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/elevator-pitch" className="text-secondary hover:text-accent hover:bg-accent/5 transition-all duration-200 inline-block px-3 py-2 rounded-md text-sm font-medium">
                  Elevator Pitch
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact section */}
          <div className="p-4">
            <h3 className="text-lg font-semibold text-heading mb-4">📬 Contact</h3>
            <p className="text-secondary mb-4">
              I&apos;m always open to exciting opportunities, collaborations, or just tech conversations. You can reach me at:
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-secondary">
                <Mail size={16} className="mr-2 text-accent" />
                <span>📧 Email: </span>
                <a
                  href="mailto:kinyanjuindungu1324@gmail.com"
                  className="ml-1 hover:text-accent hover:bg-accent/5 transition-all duration-200 px-2 py-1 rounded-md"
                >
                  kinyanjuindungu1324@gmail.com
                </a>
              </li>
              <li className="flex items-center text-secondary">
                <Phone size={16} className="mr-2 text-accent" />
                <span>📱 Phone: </span>
                <a href="tel:+254728446824" className="ml-1 hover:text-accent hover:bg-accent/5 transition-all duration-200 px-2 py-1 rounded-md">+254-728-446-824</a>
              </li>
            </ul>
            <p className="text-secondary mt-4">
              Let&apos;s connect and build something impactful!
            </p>
          </div>
        </div>

        {/* Copyright and scroll to top */}
        <div className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between border-t border-border/50">
          <p className="text-sm text-secondary">
            © {new Date().getFullYear()} Ndung&apos;u Kinyanjui. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 p-2 rounded-md text-secondary hover:text-accent hover:bg-accent/5 transition-all duration-200 focus:outline-none"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;