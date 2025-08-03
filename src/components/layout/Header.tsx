import Link from 'next/link';
import ThemeToggle from '@/components/common/ThemeToggle';
import MobileNav from '@/components/common/MobileNav';
import DesktopNav from '@/components/common/DesktopNav';

export function Header() {
  return (
    <header className="flex items-center justify-between container px-4 py-2 md:px-8 md:py-4 mx-auto">
      <h2 className="text-lg font-semibold">
        <Link href="/">우니 Tech</Link>
      </h2>
      <div className="flex items-center gap-4">
        <MobileNav />
        <DesktopNav />
        <ThemeToggle />
      </div>
    </header>
  );
}
