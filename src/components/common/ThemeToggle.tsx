'use client';
import { useTheme } from 'next-themes';
import ThemeIcon from '@/components/common/ThemeIcon';

export default function ThemeToggle() {
  const themes = ['light', 'dark', 'system'];
  const { theme, setTheme } = useTheme();

  const getCurrentThemeIndex = () => {
    const index = themes.indexOf(theme || 'system');
    return index !== -1 ? index : 1;
  };

  const handleThemeChange = () => {
    const nextMode = (getCurrentThemeIndex() + 1) % themes.length;
    setTheme(themes[nextMode]);
  };

  return (
    <div onClick={handleThemeChange} className="cursor-pointer">
      <ThemeIcon theme={theme} />
    </div>
  );
}
