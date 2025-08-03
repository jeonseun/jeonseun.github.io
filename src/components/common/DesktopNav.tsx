'use client';
import Link from 'next/link';

export default function DesktopNav() {
  return (
    <nav className="hidden md:flex gap-4">
      <Link href="/blog" className="text-sm">
        Blog
      </Link>
      <Link href="/about" className="text-sm">
        About
      </Link>
      <Link href="/contact" className="text-sm">
        Contact
      </Link>
    </nav>
  );
}
