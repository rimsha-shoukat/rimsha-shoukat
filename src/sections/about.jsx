
export function About() {
    return (
        <>
            <section className="w-full h-screen flex flex-row items-center justify-center">
                <div className="w-[80vw] h-[60vh] bg-[#f1f1f1] dark:bg-[#0a0a0a] border rounded-md flex flex-row items-center justify-between p-10 gap-2">
                    <span className="w-1/2 flex flex-col items-start justify-center gap-5">
                        <h1 className="text-3xl font-bold">About me</h1>
                        <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aut, beatae maxime aliquid inventore est quibusdam laborum blanditiis! Recusandae dicta praesentium commodi pariatur totam ratione ex rem voluptatum neque provident?</p>
                        <button className="px-4 py-2 bg-black text-[#f1f1f1] dark:bg-white dark:text-[#0a0a0a] rounded-sm font-semibold hover:bg-[#0a0a0a]/90 dark:hover:bg-[#f1f1f1]/90 transition-all duration-300 ease-in-out">Click to view resume /</button>
                    </span>
                    <span className="w-1/2 h-full flex items-center justify-center border">images</span>
                </div>
            </section>
        </>
    )
}