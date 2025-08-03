import Link from 'next/link';
import ThemeToggle from '@/components/common/ThemeToggle';
import MobileNav from '@/components/common/MobileNav';

export function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <Link href="/">JSU Tech</Link>

      <div className="flex items-center gap-4">
        <MobileNav />
        <ThemeToggle />
      </div>
    </header>
  );
}
