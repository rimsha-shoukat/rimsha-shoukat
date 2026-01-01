import React from 'react';
import { ThemeProvider } from '../components/themeProvider';

export default function Home() {
  return (
    <div className="bg-[#ececec] text-black dark:bg-[#171a21] dark:text-white w-40 h-20 flex items-center justify-center">
      <ThemeProvider />
    </div>
  );
}
