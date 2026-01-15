"use client";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@/components/themeProvider";

export function Navbar() {
    const [activeSection, setActiveSection] = useState("home");

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    const btn = (id, label) => {
        const isActive = activeSection === id;
        return (
            <button
                onClick={() => scrollTo(id)}
                className={`text-sm transition-all duration-300 ease-in-out
            ${isActive ? "opacity-40 pointer-events-none" : "hover:opacity-70"}`}
            >
                {label}
            </button>
        )
    };

    return (
        <nav className="fixed top-0 w-full px-8 py-3 flex justify-between bg-white/50 dark:bg-black/50 z-50">
            <h1 className="font-bold text-xl">rimsha</h1>

            <div className="flex items-center gap-4">
                {btn("home", "Home")}
                {btn("about", "About")}
                {btn("projects", "Projects")}
                {btn("experience", "Experience")}
                {btn("contact", "Contact")}
                <span className="border-l-2 h-6 pl-4">
                    <ThemeProvider />
                </span>
            </div>
        </nav>
    );
}
