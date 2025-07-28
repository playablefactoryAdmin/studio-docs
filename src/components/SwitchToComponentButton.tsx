"use client";

export function SwitchToComponentButton({link, switchText}) {
    if (!switchText) {
        switchText = "Switch to Component";
    }
    return (
        <>
            <a href={link} className="ml-auto">
                <button
                    // className="bg-sky-500 flex py-2 px-4 rounded-md absolute sm:right-10 sm:bottom-2 font-bold text-gray-50
                    //  hover:bg-sky-800 transition-all duration-300 hover:cursor-pointer
                    //  -bottom-0 right-0"
                    className="justify-end bg-sky-500 py-2 px-4 rounded-md hover:cursor-pointer text-gray-50 font-bold items-end ml-auto"
                >
                    <span className="hidden sm:block">{switchText}</span>
                    <span className="block sm:hidden">Switch</span>
                </button>
            </a>
        </>
    )
}