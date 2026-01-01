"use client";
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export function ThemeProvider() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    // useEffect only runs on the client, so now we can safely show the UI - not having hydration errors
    useEffect(() => {
        setMounted(true)
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="w-[2.6rem] h-auto border border-gray-400 dark:border-white/50 hover:border-amber-900 rounded-xl bg-[#f1f1f1] dark:bg-[#0a0a0a] flex flex-row items-center justify-between transition-colors duration-300 ease-in-out" title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}>
            {/* sun icon - active light mode click to switch to dark mode */}
            <span key={`sun-${theme}`} className={`sun w-5 h-5 rounded-full bg-white flex items-center justify-center ${theme === 'light' ? 'opacity-100' : 'opacity-0 invisible'}`}  >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
            </span>
            {/* moon icon - active dark mode click to switch to light mode */}
            <span key={`moon-${theme}`} className={`moon w-5 h-5 rounded-full bg-black flex items-center justify-center ${theme === 'dark' ? 'opacity-100' : 'opacity-0 invisible'}`} >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" /></svg>
            </span>
        </button>
    )
}