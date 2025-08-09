'use client';
import { useTheme } from 'next-themes';
import ThemeIcon from '@/components/common/ThemeIcon';

const THEMES = ['light', 'dark', 'system'];

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    const currentTheme = theme || 'system';
    const currentIndex = THEMES.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % THEMES.length;
    setTheme(THEMES[nextIndex]);
  };

  return (
    <div onClick={handleThemeChange} className="cursor-pointer">
      <ThemeIcon theme={theme} />
    </div>
  );
}