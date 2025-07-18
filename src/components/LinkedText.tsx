export default function HereLinkedText({text, href}: {text: string, href: string}) {
    return (
        <div className="flex flex-row gap-1">
            <p>{text}</p>
            <a href={href} className="text-blue-400 underline hover:text-blue-300">
                here.
            </a>
        </div>
    )
}