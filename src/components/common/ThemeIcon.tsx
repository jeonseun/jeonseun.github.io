'use client';
import { useEffect, useState } from 'react';
import { Moon, Sun, SunMoon } from 'lucide-react';

const useMounted = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
};

export default function ThemeIcon({ theme }: { theme: string | undefined }) {
  const mounted = useMounted();

  if (!mounted) {
    return <SunMoon className="h-4 w-4" strokeWidth={1.5} />;
  }

  switch (theme) {
    case 'light':
      return <Sun className="h-4 w-4" strokeWidth={1.5} />;
    case 'dark':
      return <Moon className="h-4 w-4" strokeWidth={1.5} />;
    default:
      return <SunMoon className="h-4 w-4" strokeWidth={1.5} />;
  }
}
