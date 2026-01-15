"use client";
import React, { useState } from "react";

export function Contact() {
    const [active, setActive] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [sender, setSender] = useState("");
    const [inquiry, setInquiry] = useState("");
    const isDisable = !sender || !inquiry;
    const number = "923180812170";
    const email = "rimsha.devs@gmail.com";
    const linkedinUrl = "https://www.linkedin.com/in/rimsha-shoukat/";

    // encode message
    const getMessage = () =>
        encodeURIComponent(`Name: ${sender}\n\nMessage:\n${inquiry}`);
    // send whatsapp message
    const handleWhatsapp = () => {
        if (!sender || !inquiry) return alert("Please fill all fields");
        window.open(
            `https://wa.me/${number}?text=${getMessage()}`,
            "_blank"
        );
    };
    // send email
    const handleEmail = () => {
        if (!sender || !inquiry) return alert("Please fill all fields");
        window.location.href =
            `mailto:${email}?subject=New Inquiry from ${sender}&body=${getMessage()}`;
    };
    // open linkedIn
    const handleLinkedin = () => {
        window.open(linkedinUrl, "_blank");
    };

    return (
        <>
            <section className="w-full mt-25 mb-20 h-auto flex iteme-center justify-center">
                <div className="w-[77vw] h-auto flex flex-col">
                    <div className="w-full">
                        <p className="text-sm tracking-wider dark:text-[#f1f1f1]/50 text-[#0e0e0e]/50">GET IN TOUCH</p>
                        <h1 className="text-4xl font-extrabold">Contact</h1>
                    </div>
                    <div className="mt-10 w-full flex flex-row items-center justify-center gap-4">
                        {/* contact form  */}
                        <div className="w-1/2 flex flex-col items-start justify-center gap-8">
                            <input
                                className="px-4 py-2 border w-full rounded-md dark:bg-[#f1f1f1]/20 bg-[#0e0e0e]/10"
                                type="text" placeholder="Enter Your Name" value={sender}
                                onChange={(e) => setSender(e.target.value)} />
                            <textarea
                                value={inquiry} onChange={(e) => setInquiry(e.target.value)}
                                rows="8" placeholder="Type Your Message Here..." className="border resize-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full px-4 py-2 rounded-md dark:bg-[#f1f1f1]/20 bg-[#0e0e0e]/10" />
                            <div className="relative flex items-center justify-center">
                                {/* Animated circle */}
                                <div className={`contactDiv ${active ? "active" : ""} absolute w-48 h-48 dark:bg-[#f1f1f1]/10 bg-[#0e0e0e]/20 rounded-full`} />
                                {/* send button */}
                                <button disabled={isDisable} onClick={() => setActive(!active)} className={`tracking-wider z-10 px-4 py-2 ${isDisable ? "bg-gray-500 dark:bg-gray-400" : "bg-black dark:bg-white hover:bg-[#0a0a0a]/90 dark:hover:bg-[#f1f1f1]/90"} text-[#f1f1f1] dark:text-[#0a0a0a] rounded-sm font-semibold transition-all duration-300 ease-in-out`}>
                                    SEND MESSAGE
                                </button>
                                {
                                    !active &&
                                    <p className="absolute bottom-10 left-0 line-clamp-1 text-xs opacity-60 text-center">
                                        Choose contact method
                                    </p>
                                }
                                {/* sending message methods buttons */}
                                <button onClick={handleWhatsapp} className={`contactBtn btn1 ${active ? "active" : ""} absolute p-3 rounded-full bg-green-800 hover:bg-green-800/70 transition-colors duration-300 ease-in-out`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg>
                                </button>
                                <button onClick={handleEmail} className={`contactBtn btn2 ${active ? "active" : ""} absolute p-3 rounded-full bg-red-800 hover:bg-red-800/70 transition-colors duration-300 ease-in-out`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 1-1.732" /><path d="m22 5.5-6.419 4.179a2 2 0 0 1-2.162 0L7 5.5" /><rect x="7" y="3" width="15" height="12" rx="2" /></svg>
                                </button>
                                <button onClick={handleLinkedin} className={`contactBtn btn3 ${active ? "active" : ""} absolute p-3 rounded-full bg-blue-800 hover:bg-blue-800/70 transition-colors duration-300 ease-in-out`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                                </button>
                            </div>
                        </div>
                        {/* Image with as */}
                        <div className="relative w-1/2 h-full flex items-center justify-center">
                            {/* contact methods buttons */}
                            <a className={`methods method1 ${clicked ? "clicked" : ""} absolute p-2 rounded-full bg-gray-800 hover:bg-gray-900/70 transition-colors duration-300 ease-in-out cursor-default`} href="https://github.com/rimsha-shoukat" target="_blank" rel="noopener noreferrer">
                                <button className={`p-2 rounded-full bg-gray-800 hover:bg-gray-900/70 transition-colors duration-300 ease-in-out`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                                </button>
                            </a>
                            <a className={`absolute methods method2 ${clicked ? "clicked" : ""} p-2 rounded-full bg-blue-800 hover:bg-blue-800/70 transition-colors duration-300 ease-in-out cursor-default`} href="https://www.linkedin.com/in/rimsha-shoukat/" target="_blank" rel="noopener noreferrer">
                                <button className={`p-2 rounded-full bg-blue-800 hover:bg-blue-800/70 transition-colors duration-300 ease-in-out`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-aedin-icon lucide-aedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                                </button>
                            </a>
                            <a className={`absolute methods method3 ${clicked ? "clicked" : ""} absolute p-2 rounded-full bg-red-800 hover:bg-red-800/70 transition-colors duration-300 ease-in-out cursor-default`} href="mailto:rimsha.devs@gmail.com" target="_blank" rel="noopener noreferrer">
                                <button className={`p-2 rounded-full bg-red-800 hover:bg-red-800/70 transition-colors duration-300 ease-in-out`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mails-icon lucide-mails"><path d="M17 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 1-1.732" /><path d="m22 5.5-6.419 4.179a2 2 0 0 1-2.162 0L7 5.5" /><rect x="7" y="3" width="15" height="12" rx="2" /></svg>
                                </button>
                            </a>
                            <a className={`methods method4 ${clicked ? "clicked" : ""} absolute p-2 rounded-full bg-amber-800 hover:bg-amber-900/70 transition-colors duration-300 ease-in-out cursor-default`} href="https://drive.google.com/file/d/1eBpDK8KwSEzHfDNR_AjkbPPPKlX6J7pJ/view?usp=drive_a" target="_blank" rel="noopener noreferrer">
                                <button className={`p-2 rounded-full bg-amber-800 hover:bg-amber-900/70 transition-colors duration-300 ease-in-out`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-user-icon lucide-file-user"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /><path d="M14 2v5a1 1 0 0 0 1 1h5" /><path d="M16 22a4 4 0 0 0-8 0" /><circle cx="12" cy="15" r="3" /></svg>
                                </button>
                            </a>
                            {/* image */}
                            <svg onClick={() => setClicked(!clicked)} className="ghost" width="200px" height="200px" viewBox="0 0 46800 46800" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">
                                <path fillOpacity=".23" fill="currentColor" d="M5294 38333c1434 1460 4160 398 6407 1176 1830 630 2690 4750 4810 4000s5710-2690 8100-2030 5360 5130 7280 2940c1630-1860 2410-6480 6490-6010 4090 470 4980 150 4430-4890-320-2930 2220-5360-1210-7630-5350-3550-13870-1340-19030 2120-5910 3970-19410 8110-17250 10310z"></path><path d="M37685 19816c0 8817 3580 11090 3580 15178 0 2270-3540-2797-5527-1650-1842 1063-4110 2068-6414 484-1372-944 540-2480-2110-2480-2117 0-5340 1523-7358 1850-1834 300-3790-1648-7027-540-2019 692-9129 5612-9129 3345 0-2890 3327-6035 3327-16187 0-9836 6868-17816 15330-17816 8460 0 15328 7980 15328 17816z" className="a d"></path><path strokeWidth="430" d="M37685 19815.1c0 8816.5 3580 11089.7 3580 15178.4 0 2268.6-4890 613.6-6875 1760.7-1842 1063.4-1088 2665-3740 3692.3-1906 732.2-4446-2638.2-7098-2638.2-2120 0-6020 2835.8-7860 1929.3s-1660-3905-4500-4195.6c-2120-220.8-7510 2708-7510 441.7 0-2894 3320-6031.9 3320-16189.5 0-9832.2 6860-17816.5 15330-17816.5 8460 0 15320 7972.7 15320 17804.9z" className="a d b"></path><path strokeWidth="400" d="M17303 10797c-2056 0-3725 1917-3725 4280 0 2362 1670 4280 3725 4280 1590 0 2946-1146 3480-2757 536 1610 1893 2756 3482 2756 2056 0 3725-1918 3725-4280 0-2363-1670-4280-3725-4280-1588 0-2946 1140-3480 2750-536-1610-1894-2750-3482-2750z" className="c b"></path><path d="M24994 15813a1613 1620 0 11-3226 0 1613 1620 0 113226 0zm-5118 0a1613 1620 0 11-3226 0 1613 1620 0 113226 0z"></path><path fillOpacity=".12" d="M32360 8065c590-208 3560 3720 4100 7850 370 2807 212 7140 637 9615 424 2475 4090 8900 2616 8840-3465-142-5675-5716-4884-13687 890-8990-3870-12127-2470-12618zm1413 27930c-802 786-2262 4526-3040 2830-778-1698-130-4720-707-9193-440-3403-2060-7463-868-6844 1187 616 2050 2475 3130 5712 946 2830 2446 6554 1485 7496zm-11526 940c-767 818-2645 1794-3594 1610-1250-244-1444-4440-942-7166 500-2690 1450-6610 2250-7200 970-720 70 2670 980 7340 700 3570 2060 4600 1310 5400zm-10253-2285c-1110-162-2160 114-3040 354-1230 335-80-1516 1555-4738 1230-2437 1520-4948 2240-5632 850-814-240 2370-440 5463-190 2867 500 4672-320 4552z"></path><path d="M9660 12802c2735-7367 7996-8913 9335-8838 2032 114 1472 3062-2475 4100-4023 1060-8297 8614-6860 4738z" className="c d"></path></g>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}