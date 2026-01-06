
export function Projects() {
    return (
        <>
            <section className="w-full h-auto mt-30 mb-30 flex items-center justify-center">
                <div className="w-[77vw] h-auto flex flex-col items-start justify-center gap-8">
                    <div className="w-[60%] flex flex-col">
                        <p className="text-sm dark:text-[#f1f1f1]/50 text-[#0e0e0e]/50 font-semibold">MY Work</p>
                        <h1 className="text-4xl font-extrabold">Projects</h1>
                    </div>
                    <div className="w-full h-auto flex flex-row items-start justify-start gap-8 overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        {/* projects scroll */}
                        <div className="w-84 h-auto hover:scale-[0.95] transition-all duration-500 ease-in-out flex flex-col items-center justify-center gap-2 p-4 rounded-md bg-[#f1f1f1] dark:bg-[#0e0e0e]">
                            {/* project image */}
                            <div className="relative rounded-md w-full h-48 bg-[url('/assests/internship.png')] bg-cover bg-center">
                                <button className="absolute top-2 right-2 text-white bg-gray-700/50 hover:bg-gray-700/70 rounded-full p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                                </button>
                            </div>
                            {/* description */}
                            <div className="w-84 p-4 flex flex-col gap-2">
                                <h1 className="font-bold text-lg line-clamp-1 cursor-default" title="view project live">Internship Projects
                                    <svg className="inline pb-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                                </h1>
                                <p className="text-sm text-justify dark:text-[#f1f1f1]/50 text-[#0e0e0e]/80">
                                    Developed front-end tasks during an internship at Developers Hub Corporation, focusing on clean UI implementation, responsive design, and structured, maintainable code. Converted design requirements into functional components while following best development practices.
                                </p>
                                <div className="flex flex-row gap-2 text-sm">
                                    <p className="text-blue-700">#javascript</p>
                                    <p className="text-green-500">#css</p>
                                    <p className="text-red-500">#html5</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-84 h-auto hover:scale-[0.95] transition-all duration-500 ease-in-out flex flex-col items-center justify-center gap-2 p-4 rounded-md bg-[#f1f1f1] dark:bg-[#0e0e0e]">
                            {/* project image */}
                            <div className="relative rounded-md w-full h-48 bg-[url('/assests/shoppey.png')] bg-cover bg-center">
                                <button className="absolute top-2 right-2 text-white bg-gray-700/50 hover:bg-gray-700/70 rounded-full p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                                </button>
                            </div>
                            {/* description */}
                            <div className="w-84 p-4 flex flex-col gap-2">
                                <h1 className="font-bold text-lg line-clamp-1 cursor-default" title="view project live">Shoppey — E-commerce App
                                    <svg className="inline pb-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                                </h1>
                                <p className="text-sm text-justify dark:text-[#f1f1f1]/50 text-[#0e0e0e]/80">
                                    Built a modern e-commerce front-end with dynamic product rendering, API integration, and responsive layouts. Focused on performance, reusable components, and clean user flows to deliver a smooth and intuitive shopping experience.
                                </p>
                                <div className="flex flex-row gap-2 text-sm">
                                    <p className="text-blue-700">#reactjs</p>
                                    <p className="text-green-500">#tailwindcss</p>
                                    <p className="text-red-500">#api</p>
                                    <p className="text-amber-900">#html5</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-84 h-auto hover:scale-[0.95] transition-all duration-500 ease-in-out flex flex-col items-center justify-center gap-2 p-4 rounded-md bg-[#f1f1f1] dark:bg-[#0e0e0e]">
                            {/* project image */}
                            <div className="relative rounded-md w-full h-48 bg-[url('/assests/trello.png')] bg-cover bg-center">
                                <button className="absolute top-2 right-2 text-white bg-gray-700/50 hover:bg-gray-700/70 rounded-full p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                                </button>
                            </div>
                            {/* description */}
                            <div className="w-84 p-4 flex flex-col gap-2">
                                <h1 className="font-bold text-lg line-clamp-1 cursor-default" title="view project live">Trello — Task Management App
                                    <svg className="inline pb-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                                </h1>
                                <p className="text-sm text-justify dark:text-[#f1f1f1]/50 text-[#0e0e0e]/80">
                                    Developed a task management application using Next.js with secure authentication, database integration, and modular UI components. Implemented scalable architecture and focused on state management, user experience, and clean data flow.
                                </p>
                                <div className="flex flex-row gap-2 text-sm">
                                    <p className="text-blue-700">#nextjs</p>
                                    <p className="text-green-500">#mongodb</p>
                                    <p className="text-red-500">#tailwindcss</p>
                                    <p className="text-amber-900">#shadncnui</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-84 h-auto hover:scale-[0.95] transition-all duration-500 ease-in-out flex flex-col items-center justify-center gap-2 p-4 rounded-md bg-[#f1f1f1] dark:bg-[#0e0e0e]">
                            {/* project image */}
                            <div className="relative rounded-md w-full h-48 bg-[url('/assests/portfolio.png')] bg-cover bg-center">
                                <button className="absolute top-2 right-2 text-white bg-gray-700/50 hover:bg-gray-700/70 rounded-full p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                                </button>
                            </div>
                            {/* description */}
                            <div className="w-84 p-4 flex flex-col gap-2">
                                <h1 className="font-bold text-lg line-clamp-1 cursor-default" title="view project live">Personal Portfolio
                                    <svg className="inline pb-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                                </h1>
                                <p className="text-sm text-justify dark:text-[#f1f1f1]/50 text-[#0e0e0e]/80">
                                    Built a previous personal portfolio to showcase projects and skills, with a focus on responsive design, performance, and clean UI structure. This project reflects my earlier approach to front-end development before transitioning to a more advanced and scalable setup.
                                </p>
                                <div className="flex flex-row gap-2 text-sm">
                                    <p className="text-blue-700">#reactjs</p>
                                    <p className="text-green-500">#tailwindcss</p>
                                    <p className="text-red-500">#html5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}