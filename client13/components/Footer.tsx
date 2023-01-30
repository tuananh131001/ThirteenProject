"use client";
import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};
const ExternalLink: React.FC<Props> = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="px-6 flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Home
          </Link>
          <Link
            href="/repos"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Repos
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://github.com/tuananh131001">
            GitHub
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/tuananh131001/">
            Linkedin
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <Link
            href=""
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Uses
          </Link>
          <Link
            href=""
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Guestbook
          </Link>
          <Link
            href=""
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Snippets
          </Link>
          <Link
            href=""
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Tweets
          </Link>
        </div>
      </div>
    </footer>
  );
}
