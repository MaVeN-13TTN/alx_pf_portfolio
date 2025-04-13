import React from 'react';
import { about } from '@/data/about';

export default function Bio() {
  // Split the bio into paragraphs
  const bioParagraphs = about.bio.split('\n\n');

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-heading text-center">
        My Story
      </h1>

      {/* Bio Section */}
      <div className="space-y-6 text-body text-lg mb-16">
        {bioParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <p className="font-semibold text-accent mt-8 text-center">
          Let&apos;s connect. Let&apos;s innovate. Let&apos;s secure the future.
        </p>
      </div>

      {/* Interests Section */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-heading">
          Areas of Interest
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glassmorphism p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3 text-heading">Cloud Computing</h3>
            <p>{about.interests.cloudComputing}</p>
          </div>
          <div className="glassmorphism p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3 text-heading">Cybersecurity</h3>
            <p>{about.interests.cybersecurity}</p>
          </div>
          <div className="glassmorphism p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3 text-heading">Artificial Intelligence</h3>
            <p>{about.interests.artificialIntelligence}</p>
          </div>
          <div className="glassmorphism p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3 text-heading">Software Engineering</h3>
            <p>{about.interests.softwareEngineering}</p>
          </div>
        </div>
      </div>

      {/* Goals Section */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-heading">
          Professional Goals
        </h2>
        <div className="glassmorphism p-6 rounded-xl">
          <p className="text-body text-lg">{about.goals}</p>
        </div>
      </div>
    </div>
  );
}
