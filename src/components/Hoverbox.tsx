import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./components/ui/tooltip"
import { cn } from "./lib/utils";

export default function Hoverbox({
    title,
    body,
    xPercent,
    yPercent,
    side="bottom",
    className,
}: {
    title: string;
    body: string;
    xPercent: number;
    yPercent: number;
    side: "bottom" | "top" | "right" | "left";
    className: string;
}) {
    return (
        <div
            className={cn("hover-box", className)}
            style={{ left: xPercent + "%", top: yPercent + "%" }}
        >
        <Tooltip>
            <TooltipTrigger asChild>
                <div className="bg-sky-600 min-w-6 flex h-6 text-sky-50 items-center justify-center rounded-full absolute">
                    <div className=" w-full h-full bg-sky-500 rounded-full animate-ping"/>
                    <p className="absolute flex text-sm px-2">{title}</p>
                </div>
            </TooltipTrigger>
            <TooltipContent className="bg-sky-900 flex max-w-64" side={side}>
                <p className="flex text-wrap">{body}</p>
            </TooltipContent>
        </Tooltip>
        </div>
    );
}
