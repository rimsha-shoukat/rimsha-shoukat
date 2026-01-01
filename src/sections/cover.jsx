import { ThemeProvider } from "@/components/themeProvider"

export function Cover() {
    return (
        <>
            <main className="w-screen h-screen">

                {/* navbar */}
                <nav className="w-full h-auto px-8 py-3 flex flex-row items-center justify-between">
                    <h1 className="">rimsha</h1>
                    <span className="w-auto flex flex-row items-center justify-center gap-4">
                        <button>Home</button>
                        <button>About</button>
                        <button>Projects</button>
                        <button>Work</button>
                        <button>Contact</button>
                        <span className="border-l-2 border-gray-400 dark:border-white/50 h-6 pl-4">
                            <ThemeProvider />
                        </span>
                    </span>
                </nav>

                {/* cover content */}
                <section className="w-full h-full flex flex-col items-center justify-center gap-4">
                    <div className="flex flex-col items-start gap-16">
                        {/* intro */}
                        <div className="flex flex-row items-center justify-center gap-16">
                            <span className="flex flex-col items-start justify-center gap-4">
                                <h1 className="text-4xl font-bold">Full Stack Next.js <br /> Developer </h1>
                                <p className="dark:text-[#f1f1f1] text-[#0a0a0a]">Building modern web applications with cutting-edge technologies.</p>
                                {/* links */}
                                <span className="flex flex-row items-center justify-start gap-4 mt-4">
                                    <button>Lin</button>
                                    <button>Git</button>
                                    <button>Mai</button>
                                    <button>Res</button>
                                </span>
                            </span>
                            {/* image */}
                            <span className="w-50 h-50 bg-gray-300 dark:bg-gray-700">
                            </span>
                        </div>
                        {/* tech stack */}
                        <span className="flex flex-row">
                            <h1>Texh stack</h1>
                            <span className="flex flex-row items-center justify-center gap-3 border-l-2 border-gray-400 dark:border-white/50 h-6 pl-4 ml-4">
                                <button className="bg-amber-950 w-7 h-7 rounded-full">H</button>
                                <button className="bg-amber-950 w-7 h-7 rounded-full">C</button>
                                <button className="bg-amber-950 w-7 h-7 rounded-full">J</button>
                                <button className="bg-amber-950 w-7 h-7 rounded-full">T</button>
                                <button className="bg-amber-950 w-7 h-7 rounded-full">R</button>
                                <button className="bg-amber-950 w-7 h-7 rounded-full">N</button>
                                <button className="bg-amber-950 w-7 h-7 rounded-full">M</button>
                                <button className="bg-amber-950 w-7 h-7 rounded-full">S</button>
                                <button className="bg-amber-950 w-7 h-7 rounded-full">F</button>
                            </span>
                        </span>
                    </div>
                </section>

            </main>
        </>
    )
}