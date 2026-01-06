
export function About() {
    return (
        <>
            <section className="w-full flex flex-row items-center justify-center">
                <div className="aboutSection w-[77vw] h-auto bg-[#f1f1f1] dark:bg-[#0a0a0a] border border-[#0a0a0a]/50 dark:border-[#f1f1f1]/50 rounded-md flex flex-row items-center justify-between p-10 gap-2">
                    {/* about me */}
                    <span className="w-1/2 flex flex-col items-start justify-center gap-5">
                        <h1 className="text-2xl font-bold line-clamp-2">Developing Clean, Scalable Web Applications</h1>
                        <p className="text-justify dark:text-[#f1f1f1]/50 text-[#0e0e0e]/80">
                            I am a Front-End Developer with hands-on experience in HTML, CSS, JavaScript, React.js, Framer Motion, and Tailwind CSS, currently progressing towards full-stack development using Next.js.
                            <br /><br />
                            Since 2024, I have been building responsive and accessible web applications, with a strong focus on performance, clean and maintainable code, and intuitive user experiences.
                        </p>
                        {/* resume link button */}
                        <button className="px-4 py-2 bg-black text-[#f1f1f1] dark:bg-white dark:text-[#0a0a0a] rounded-sm font-semibold hover:bg-[#0a0a0a]/90 dark:hover:bg-[#f1f1f1]/90 transition-all duration-300 ease-in-out">Click to view resume
                            <svg className="inline pb-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                        </button>
                    </span>
                    {/* certificates */}
                    <span className="w-1/2 h-full flex items-center justify-center hover:scale-105 transition-all duration-300 ease-in-out">
                        <span className="absolute -rotate-6 -translate-x-1/3 -translate-y-8 w-65 h-auto border border-[#0a0a0a] dark:border-[#f1f1f1]/30 bg-[#f1f1f1] dark:bg-[#0a0a0a] rounded-sm">
                            <div className="w-full h-45 bg-[url('/assests/python.png')] bg-cover bg-no-repeat bg-center"></div>
                            <p className="p-2 text-xs text-[#000000] dark:text-[#f1f1f1]">Python Programming Certification — Cisco Networking Academy.</p>
                        </span>
                        <span className="absolute -rotate-3 w-65 h-auto translate-x-2 border border-[#0a0a0a] dark:border-[#f1f1f1]/30 bg-[#f1f1f1] dark:bg-[#0a0a0a] rounded-sm">
                            <div className="w-full h-45 bg-[url('/assests/networks.png')] bg-cover bg-no-repeat bg-center"></div>
                            <p className="p-2 text-xs text-[#0a0a0a] dark:text-[#f1f1f1]">Introduction to Networks — Cisco Networking Academy.</p>
                        </span>
                        <span className="absolute w-65 h-auto border border-[#0a0a0a] dark:border-[#f1f1f1]/30 translate-x-1/2 translate-y-12 bg-[#f1f1f1] dark:bg-[#0a0a0a] rounded-sm">
                            <div className="w-full h-45 bg-[url('/assests/c++.png')] bg-cover bg-no-repeat bg-center"></div>
                            <p className="p-2 text-xs text-[#0a0a0a] dark:text-[#f1f1f1]">C++ Programming Certification — Cisco Networking Academy</p>
                        </span>
                    </span>
                </div>
            </section>
        </>
    )
}