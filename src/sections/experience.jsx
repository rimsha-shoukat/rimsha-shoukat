
export function Experience() {
    return (
        <>
            <section className="w-full flex items-center justify-center">
                <div className="w-[77vw] flex flex-col gap-12">
                    <div className="text-center">
                        <p className="text-sm dark:text-[#f1f1f1]/50 text-[#0e0e0e]/50 font-semibold">MY Contributions</p>
                        <h1 className="text-4xl font-extrabold max-[600px]:text-2xl">Experience & Learning Journey</h1>
                        <p className="text-justify max-[600px]:text-sm mt-4 dark:text-[#f1f1f1]/50 text-[#0e0e0e]/80">
                            From an internship to open-source contributions and regular LeetCode practice, I actively build my skills and apply them to real-world projects.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute right-1/2 top-0 max-[600px]:right-3 h-full w-1 dark:bg-[#f1f1f1]/20 bg-[#0e0e0e]/20"></div>

                        {/* Items */}
                        <div className="flex flex-col gap-12">
                            {/* Item */}
                            <div className="flex justify-between items-center w-full">
                                <div className="internship w-1/2 max-[600px]:w-full text-right pr-8">
                                    <a href="https://drive.google.com/file/d/1MrDm3DX6oz_Dg3oxnTqBSydo-4RARs_v/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                        <h2 className="font-bold text-xl cursor-default hover:underline" title="view certificate" >Internship</h2>
                                    </a>
                                    <p className="text-sm dark:text-[#f1f1f1]/50 text-[#0e0e0e]/50">Developers Hub Corporation</p>
                                    <p className="text-[0.95rem] mt-2">
                                        Developed real-world front-end tasks focusing on clean UI, responsiveness, and maintainable code.
                                    </p>
                                </div>
                                <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full z-10">
                                    <span className="text-white font-bold">1</span>
                                </div>
                                <div className="w-1/2 max-[600px]:hidden"></div>
                            </div>

                            {/* Item */}
                            <div className="flex max-[600px]:flex-row-reverse justify-between items-center w-full">
                                <div className="w-1/2 max-[600px]:hidden"></div>
                                <div className="flex items-center justify-center w-8 h-8 bg-green-600 rounded-full z-10">
                                    <span className="text-white font-bold">2</span>
                                </div>
                                <div className="opensource w-1/2 max-[600px]:w-full max-[600px]:pr-8 max-[600px]:pl-0 pl-8 text-left">
                                    <a href="https://github.com/repos?q=owner%3A%40me+fork%3Atrue" target="_blank" rel="noopener noreferrer">
                                        <h2 className="font-bold text-xl cursor-default hover:underline" title="view in github" >Open-Source Contributions</h2>
                                    </a>
                                    <p className="text-sm dark:text-[#f1f1f1]/50 text-[#0e0e0e]/50">GitHub Projects</p>
                                    <p className="text-[0.95rem] mt-2">
                                        Contributed to multiple open-source projects, adding features, improving features and fixing bugs.
                                    </p>
                                </div>
                            </div>

                            {/* Item */}
                            <div className="flex justify-between items-center w-full">
                                <div className="leetcode w-1/2 max-[600px]:w-full text-right pr-8">
                                    <a href="https://leetcode.com/u/rimsha-devs/" target="_blank" rel="noopener noreferrer">
                                        <h2 className="font-bold text-xl cursor-default hover:underline" title="view leet profile">LeetCode Practice</h2>
                                    </a>
                                    <p className="text-sm dark:text-[#f1f1f1]/50 text-[#0e0e0e]/50">Self-Learning</p>
                                    <p className="text-[0.95rem] mt-2">
                                        Practiced DSA problems regularly to improve problem-solving and coding efficiency.
                                    </p>
                                </div>
                                <div className="flex items-center justify-center w-8 h-8 bg-purple-600 rounded-full z-10">
                                    <span className="text-white font-bold">3</span>
                                </div>
                                <div className="w-1/2 max-[600px]:hidden"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}