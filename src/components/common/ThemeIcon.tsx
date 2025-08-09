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
  const iconProps = { className: 'h-4 w-4', strokeWidth: 1.5 };

  let IconComponent;

  if (!mounted) {
    IconComponent = SunMoon;
  } else {
    switch (theme) {
      case 'light':
        IconComponent = Sun;
        break;
      case 'dark':
        IconComponent = Moon;
        break;
      default:
        IconComponent = SunMoon;
        break;
    }
  }

  return <IconComponent {...iconProps} />;
}
