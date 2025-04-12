import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-4xl md:text-5xl mb-4 text-heading font-bold">
        Ndung&apos;u Kinyanjui
      </h1>
      <p className="text-lg md:text-xl mb-6 text-secondary font-normal">
        Cloud Engineer | Cybersecurity Analyst | DevOps Enthusiast | Builder of Secure Digital Solutions
      </p>
      <div className="max-w-2xl mx-auto mb-8 text-body text-base md:text-lg space-y-4">
        <p>
          Welcome to my digital space — where passion meets purpose.
        </p>
        <p>
          I&apos;m Ndung&apos;u Kinyanjui, and this website is more than a portfolio — it&apos;s a curated story of who I am, what I do, and the impact I aim to make through technology. My mission is to engineer secure, scalable systems that power meaningful digital experiences, while continuously learning and leading in the cloud and cybersecurity space.
        </p>
        <p className="font-semibold text-accent">🌟 Ready to explore my journey?</p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Link
          href="/bio"
          className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors font-medium"
        >
          → [My Bio]
        </Link>
        <Link
          href="/portfolio"
          className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-heading dark:text-secondary rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium"
        >
          → [My Portfolio]
        </Link>
        <Link
          href="/elevator-pitch"
          className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-heading dark:text-secondary rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
        >
          → [My Elevator Pitch]
        </Link>
      </div>
      <p className="text-lg md:text-xl text-body font-medium">
        Let’s build something exceptional — together.
      </p>
    </div>
  );
}