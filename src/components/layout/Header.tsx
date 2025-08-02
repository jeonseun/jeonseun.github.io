import Link from 'next/link';
import ThemeToggle from '@/components/common/ThemeToggle';

export function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <Link href="/">JSU Tech</Link>

      <div>
        <ThemeToggle />
      </div>
    </header>
  );
}
