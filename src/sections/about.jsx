
export function About() {
    return (
        <>
            <section className="w-full flex flex-row items-center justify-center">
                <div className="aboutSection w-[77vw] max-[600px]:w-[90vw] h-auto bg-[#f1f1f1] dark:bg-[#0a0a0a] border border-[#0a0a0a]/50 dark:border-[#f1f1f1]/50 rounded-md flex flex-row items-center justify-center max-[1300px]:p-6 p-10 gap-2">
                    {/* about me */}
                    <span className="w-1/2 max-[1300px]:w-2/2 flex flex-col items-start justify-center gap-5">
                        <h1 className="text-2xl max-[1300px]:text-xl font-bold line-clamp-2">Developing Clean, Scalable Web Applications</h1>
                        <p className="text-justify dark:text-[#f1f1f1]/50 text-[#0e0e0e]/80 max-[1300px]:text-sm">
                            I am an IT student and Front-End Developer with hands-on experience in HTML, CSS, JavaScript, React.js, Framer Motion, and Tailwind CSS, currently progressing towards full-stack development using Next.js.
                            <br /><br />
                            Since 2024, I have applied my skills to real-world projects. I focus on building responsive, accessible, and scalable web applications with clean, maintainable code and intuitive user experiences.
                        </p>
                        {/* resume a button */}
                        <a className="cursor-default" href="https://drive.google.com/file/d/1eBpDK8KwSEzHfDNR_AjkbPPPKlX6J7pJ/view?usp=drive_a" target="_blank" rel="noopener noreferrer">
                            <button className="px-4 py-2 bg-black text-[#f1f1f1] dark:bg-white dark:text-[#0a0a0a] rounded-sm font-semibold hover:bg-[#0a0a0a]/90 dark:hover:bg-[#f1f1f1]/90 transition-all duration-300 ease-in-out">Click to view resume
                                <svg className="inline pb-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                            </button>
                        </a>
                    </span>
                    {/* certificates */}
                    <span className="w-1/2 max-[1300px]:hidden h-full flex items-center justify-center hover:scale-105 transition-all duration-300 ease-in-out">
                        <a className="cursor-default absolute -rotate-6 -translate-x-1/3 -translate-y-8 w-65 h-auto border border-[#0a0a0a] dark:border-[#f1f1f1]/30 bg-[#f1f1f1] dark:bg-[#0a0a0a] rounded-sm" href="https://drive.google.com/file/d/1iRtutVGXnfCuefsvE3SEtbXm5RlYSbmu/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <span className="w-65 h-auto">
                                <div className="w-full h-45 bg-[url('/assests/python.png')] bg-cover bg-no-repeat bg-center"></div>
                                <p className="p-2 text-xs text-[#000000] dark:text-[#f1f1f1]">Python Programming Certification — Cisco Networking Academy.</p>
                            </span>
                        </a>
                        <a className="cursor-default absolute -rotate-3 translate-x-2 w-65 h-auto border border-[#0a0a0a] dark:border-[#f1f1f1]/30 bg-[#f1f1f1] dark:bg-[#0a0a0a] rounded-sm" href="https://drive.google.com/file/d/11c4HsDF4glkQ7nbkPIuq_tAhzrd1Wpwu/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <span className="w-65 h-auto">
                                <div className="w-full h-45 bg-[url('/assests/networks.png')] bg-cover bg-no-repeat bg-center"></div>
                                <p className="p-2 text-xs text-[#0a0a0a] dark:text-[#f1f1f1]">Introduction to Networks — Cisco Networking Academy.</p>
                            </span>
                        </a>
                        <a className="cursor-default absolute w-65 h-auto border border-[#0a0a0a] dark:border-[#f1f1f1]/30 translate-x-1/2 translate-y-12 bg-[#f1f1f1] dark:bg-[#0a0a0a] rounded-sm" href="https://drive.google.com/file/d/1nU9oTUJL3dGlszmvF-_5ef5YfCPbyCn8/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <span className="w-65 h-auto">
                                <div className="w-full h-45 bg-[url('/assests/c++.png')] bg-cover bg-no-repeat bg-center"></div>
                                <p className="p-2 text-xs text-[#0a0a0a] dark:text-[#f1f1f1]">C++ Programming Certification — Cisco Networking Academy</p>
                            </span>
                        </a>
                    </span>
                </div>
            </section>
        </>
    )
}