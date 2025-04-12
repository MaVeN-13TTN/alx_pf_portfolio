import React from 'react';

export default function ElevatorPitch() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-heading text-center">
        🎙️ Elevator Pitch (Video Coming Soon!)
      </h1>

      <div className="space-y-6 text-body text-lg">
        <p className="font-semibold">
          What drives me? Building secure systems that empower people and scale businesses.
        </p>
        <p>
          Hi! I&apos;m Ndung&apos;u Kinyanjui — a cloud engineer and cybersecurity advocate passionate about designing infrastructure that&apos;s built to last. I love solving complex problems, mentoring future technologists, and leading by doing.
        </p>
        <p>
          Soon, you&apos;ll be able to watch my 60-second elevator pitch right here. Until then, here&apos;s the essence of it:
        </p>
        <blockquote className="border-l-4 border-accent pl-4 italic text-secondary my-6">
          &ldquo;I build with purpose. I secure with precision. I scale with confidence. I&apos;m ready for the challenge — are you?&rdquo;
        </blockquote>
        <p className="text-center font-medium text-accent">
          Stay tuned for the video!
        </p>
      </div>
    </div>
  );
}