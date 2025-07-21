"use client";

export function SwitchToComponentButton({link}) {
    return (
        <>
            <a href={link}>
                <button
                    className="bg-sky-500 flex py-2 px-4 rounded-md absolute right-10 bottom-3 font-bold text-gray-50 hover:bg-sky-800 transition-all duration-300 hover:cursor-pointer"
                >
                    Switch to Component
                </button>
            </a>
        </>
    )
}