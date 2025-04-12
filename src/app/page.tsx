import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h1 className="text-4xl md:text-5xl mb-4 text-heading font-bold">
        MaVeN-13TTN
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-secondary font-normal">
        Full Stack Developer & Software Engineer
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <Link
          href="/bio"
          className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors font-medium"
        >
          Learn About Me
        </Link>
        <Link
          href="/portfolio"
          className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-heading dark:text-secondary rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium"
        >
          View My Work
        </Link>
        <Link
          href="/elevator-pitch"
          className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-heading dark:text-secondary rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
        >
          Elevator Pitch
        </Link>
      </div>
    </div>
  );
}