import Link from 'next/link';
import ThemeToggle from '@/components/common/ThemeToggle';
import MobileNav from '@/components/common/MobileNav';
import DesktopNav from '@/components/common/DesktopNav';

export function Header() {
  return (
    <header className="flex items-center justify-between mx-auto max-w-[1280px] h-12 p-4 md:h-16">
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
