
export function Contact() {
    return (
        <>
            <section className="w-full mt-25 mb-15 h-auto flex iteme-center justify-center">
                <div className="w-[77vw] h-auto flex flex-col">
                    <div className="w-full">
                        <p className="text-sm tracking-wider dark:text-[#f1f1f1]/50 text-[#0e0e0e]/50">GET IN TOUCH</p>
                        <h1 className="text-4xl font-extrabold">Contact</h1>
                    </div>
                    <div className="mt-10 w-full flex flex-row items-center justify-center gap-4">
                        {/* contact form  */}
                        <div className="w-1/2 flex flex-col items-start justify-center gap-8">
                            <input className="px-4 py-2 w-full rounded-md dark:bg-[#f1f1f1]/20 bg-[#0e0e0e]/10" type="text" placeholder="Enter Your Name" />
                            <textarea rows="8" placeholder="Type Your Message Here..." className="w-full px-4 py-2 rounded-md dark:bg-[#f1f1f1]/20 bg-[#0e0e0e]/10" />
                            <div className="relative mt-4 flex items-center justify-center">
                                <button className="tracking-wider px-4 py-2 bg-black text-[#f1f1f1] dark:bg-white dark:text-[#0a0a0a] rounded-sm font-semibold hover:bg-[#0a0a0a]/90 dark:hover:bg-[#f1f1f1]/90 transition-all duration-300 ease-in-out">
                                    SEND MESSAGE
                                </button>
                                {/* <button className="absolute p-2 rounded-full bg-green-800 hover:bg-green-800/50 transition-colors duration-300 ease-in-out">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
                                </button>
                                <button className="absolute p-2 rounded-full bg-red-800 hover:bg-red-800/50 transition-colors duration-300 ease-in-out">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 1-1.732" /><path d="m22 5.5-6.419 4.179a2 2 0 0 1-2.162 0L7 5.5" /><rect x="7" y="3" width="15" height="12" rx="2" /></svg>
                                </button>
                                <button className="absolute p-2 rounded-full bg-blue-800 hover:bg-blue-800/50 transition-colors duration-300 ease-in-out">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                                </button> */}
                            </div>

                        </div>
                        {/* Image with links */}
                        <div className="w-1/2 border">Image</div>
                    </div>
                </div>
            </section>
        </>
    )
}