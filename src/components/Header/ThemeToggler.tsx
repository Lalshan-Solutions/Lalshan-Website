import { useTheme } from "next-themes";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/5 animate-pulse" />;
  }

  return (
    <button
      aria-label="theme toggler"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#F8FAFC] dark:bg-white/5 hover:bg-[#F1F5F9] dark:hover:bg-white/10 text-[#64748B] dark:text-[#94A3B8] hover:text-primary dark:hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-primary/20"
    >
      <div className={`absolute inset-0 rounded-xl bg-primary/0 group-hover:bg-primary/5 dark:group-hover:bg-primary/20 transition-colors duration-300`} />

      {/* Light Mode Icon */}
      <span className={`transition-all duration-500 absolute ${theme === 'dark' ? 'scale-0 opacity-0 rotate-90' : 'scale-100 opacity-100 rotate-0'}`}>
        <LightModeOutlined fontSize="small" />
      </span>

      {/* Dark Mode Icon */}
      <span className={`transition-all duration-500 absolute ${theme === 'dark' ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 -rotate-90'}`}>
        <DarkModeOutlined fontSize="small" />
      </span>
    </button>
  );
};

export default ThemeToggler;
