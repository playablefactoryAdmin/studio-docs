"use client";

export function SwitchToComponentButton({link}) {
    return (
        <>
            <a href={link}>
                <button
                    className="bg-sky-500 flex py-2 px-4 rounded-md absolute sm:right-10 sm:bottom-5 font-bold text-gray-50
                     hover:bg-sky-800 transition-all duration-300 hover:cursor-pointer
                     -bottom-0 right-0"
                >
                    <span className="hidden sm:block">Switch to Component</span>
                    <span className="block sm:hidden">Switch</span>
                </button>
            </a>
        </>
    )
}