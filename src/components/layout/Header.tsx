import Link from 'next/link';
import ThemeToggle from '@/components/common/ThemeToggle';
import MobileNav from '@/components/common/MobileNav';
import DesktopNav from '@/components/common/DesktopNav';
import { Separator } from '@/components/ui/separator';

export function Header() {
  return (
    <header className="flex items-center justify-between mx-auto max-w-[880px] h-12 p-4 md:h-16 border-b">
      <h2 className="text-lg font-semibold">
        <Link href="/">우니 Tech</Link>
      </h2>
      <div className="flex items-center gap-4 h-full">
        <MobileNav />
        <DesktopNav />
        <Separator orientation="vertical" />
        <ThemeToggle />
      </div>
    </header>
  );
}
