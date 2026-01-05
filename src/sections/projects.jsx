import Image from "next/image";

const projects = [
    {
        id: 0,
        image: "shoppey",
        title: "Shoppey",
        detail: "lorem w-full h-auto mt-32 mb-20 flex items-center justify-center w-full h-auto mt-32 mb-20 flex items-center justify-center",
        tech: ["reactjs", "api", "tailwindcss", "css"]
    },
    {
        id: 1,
        image: "internship",
        title: "Brand",
        detail: "lorem w-full h-auto mt-32 mb-20 flex items-center justify-center w-full h-auto mt-32 mb-20 flex items-center justify-center",
        tech: ["js", "css", "html", "tailwindcss"]
    },
    {
        id: 2,
        image: "trello",
        title: "Trello",
        detail: "lorem w-full h-auto mt-32 mb-20 flex items-center justify-center w-full h-auto mt-32 mb-20 flex items-center justify-center",
        tech: ["nextjs", "mongodb", "jwt", "shadcnui"]
    },
    {
        id: 3,
        image: "portfolio",
        title: "Portfolio",
        detail: "lorem w-full h-auto mt-32 mb-20 flex items-center justify-center w-full h-auto mt-32 mb-20 flex items-center justify-center",
        tech: ["reactjs", "tailwindcss", "css", "html"]
    },
]

export function Projects() {
    return (
        <>
            <section className="w-full h-auto mt-32 mb-20 flex items-center justify-center">
                <div className="w-[77vw] h-auto flex flex-col items-start justify-center gap-8">
                    <div className="w-[60%] flex flex-col">
                        <p className="text-sm dark:text-[#f1f1f1]/50 text-[#0e0e0e]/50 font-semibold">MY Work</p>
                        <h1 className="text-4xl font-extrabold">Projects</h1>
                        <p className="text-justify mt-2 line-clamp-4 dark:text-[#f1f1f1]/50 text-[#0e0e0e]/80">
                            As an IT student, I actively develop my skills through practical projects,
                            recognised certifications, and continuous learning. I take a structured and
                            detail-oriented approach to development and aim to contribute to teams that
                            value code quality, collaboration, and long-term scalability.
                        </p>
                    </div>
                    <div className="w-full h-auto flex flex-row items-start justify-start gap-8 overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        {/* projects scroll */}
                        <div className="w-84 h-auto hover:scale-[0.95] transition-all duration-500 ease-in-out flex flex-col items-center justify-center gap-2 p-4 rounded-md bg-[#f1f1f1] dark:bg-[#0e0e0e]">
                            <div className="rounded-md w-full h-48 bg-[url('/assests/internship.png')] bg-cover bg-center" />
                            <div className="w-84 p-4 flex flex-col gap-2">
                                <h1 className="font-extrabold text-xl line-clamp-1">Internship (task)</h1>
                                <p className="text-[1rem] text-justify">
                                    lorem w-full h-auto mt-32 mb-20 flex items-center justify-center w-full h-auto mt-32 mb-20 flex items-center justify-center.
                                </p>
                                <div className="flex flex-row gap-2 text-sm">
                                    <p className="text-blue-700">#javascript</p>
                                    <p className="text-green-500">#css</p>
                                    <p className="text-red-500">#html5</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-84 h-auto hover:scale-[0.95] transition-all duration-500 ease-in-out flex flex-col items-center justify-center gap-2 p-4 rounded-md bg-[#f1f1f1] dark:bg-[#0e0e0e]">
                            <div className="rounded-md w-full h-48 bg-[url('/assests/shoppey.png')] bg-cover bg-center" />
                            <div className="w-84 p-4 flex flex-col gap-2">
                                <h1 className="font-extrabold text-xl line-clamp-1">Shoppey app</h1>
                                <p className="text-[1rem] text-justify">
                                    lorem w-full h-auto mt-32 mb-20 flex items-center justify-center w-full h-auto mt-32 mb-20 flex items-center justify-center.
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
                            <div className="rounded-md w-full h-48 bg-[url('/assests/trello.png')] bg-cover bg-center" />
                            <div className="w-84 p-4 flex flex-col gap-2">
                                <h1 className="font-extrabold text-xl line-clamp-1">Trello app</h1>
                                <p className="text-[1rem] text-justify">
                                    lorem w-full h-auto mt-32 mb-20 flex items-center justify-center w-full h-auto mt-32 mb-20 flex items-center justify-center.
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
                            <div className="rounded-md w-full h-48 bg-[url('/assests/portfolio.png')] bg-cover bg-center" />
                            <div className="w-84 p-4 flex flex-col gap-2">
                                <h1 className="font-extrabold text-xl line-clamp-1">Portfolio app</h1>
                                <p className="text-[1rem] text-justify">
                                    lorem w-full h-auto mt-32 mb-20 flex items-center justify-center w-full h-auto mt-32 mb-20 flex items-center justify-center.
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