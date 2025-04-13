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
    <footer className="bg-background border-t border-border mt-auto">
      {/* Main footer content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About section */}
          <div>
            <h3 className="text-lg font-semibold text-heading mb-4">Ndung&apos;u Kinyanjui</h3>
            <p className="text-secondary mb-4 max-w-md">
              Cloud Engineer and Cybersecurity Analyst focused on building secure, scalable digital solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/ndungu-kinyanjui/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-accent transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/MaVeN-13TTN"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-accent transition-colors"
                aria-label="GitHub Profile"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-secondary hover:text-accent transition-colors"
                aria-label="Email Contact"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold text-heading mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-secondary hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/bio" className="text-secondary hover:text-accent transition-colors">
                  My Story
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-secondary hover:text-accent transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/elevator-pitch" className="text-secondary hover:text-accent transition-colors">
                  Elevator Pitch
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact section */}
          <div>
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
                  className="ml-1 hover:text-accent transition-colors"
                >
                  kinyanjuindungu1324@gmail.com
                </a>
              </li>
              <li className="flex items-center text-secondary">
                <Phone size={16} className="mr-2 text-accent" />
                <span>📱 Phone: </span>
                <span className="ml-1">+254-728-446-824</span>
              </li>
            </ul>
            <p className="text-secondary mt-4">
              Let&apos;s connect and build something impactful!
            </p>
          </div>
        </div>

        {/* Copyright and scroll to top */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-secondary">
            © {new Date().getFullYear()} Ndung&apos;u Kinyanjui. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 p-2 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors focus:outline-none"
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