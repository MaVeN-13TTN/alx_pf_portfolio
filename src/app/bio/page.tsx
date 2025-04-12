import React from 'react';

export default function Bio() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-heading text-center">
        My Story
      </h1>

      <div className="space-y-6 text-body text-lg">
        <p>
          Hi there! I&apos;m Ndung&apos;u Kinyanjui — a tech enthusiast, lifelong learner, and problem-solver currently pursuing a Bachelor of Applied Science in Computer Science at Daystar University.
        </p>
        <p>
          My professional journey is rooted in curiosity and driven by impact. I began by building simple websites, then dove into full-stack development. Over time, my passion evolved into a deeper calling — securing cloud infrastructures, architecting solutions, and empowering others to do the same.
        </p>
        <p>
          🌐 Today, I hold certifications as an AWS Solutions Architect Associate and Cloud Practitioner, and serve as the GDG Cybersecurity Lead at Daystar. I organize cybersecurity events, lead workshops, and champion the integration of cloud technologies and security principles into everything I do.
        </p>
        <p>
          💡 At my core, I’m someone who believes in creating technology that empowers, protects, and scales. I thrive at the intersection of DevOps, cloud computing, and cybersecurity — and I’m always up for a challenge that makes a difference.
        </p>
        <p className="font-semibold text-accent mt-8 text-center">
          Let’s connect. Let’s innovate. Let’s secure the future.
        </p>
      </div>
    </div>
  );
}