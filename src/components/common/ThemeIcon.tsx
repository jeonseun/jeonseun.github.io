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
    return <SunMoon />;
  }

  switch (theme) {
    case 'light':
      return <Sun />;
    case 'dark':
      return <Moon />;
    default:
      return <SunMoon />;
  }
}
