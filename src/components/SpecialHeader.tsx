import { ExternalLink } from "lucide-react";
import { SwitchToComponentButton } from "./SwitchToComponentButton";

export function SpecialHeader({
    title,
    extendsClass,
    implementsClass,
    extendsClassLink,
    implementsClassLink,
    usesComponent,
    usesComponentLink,
}) {
    return (
        <div className="flex flex-col gap-2 pb-2 pt-1 ">
            <h1 className="text-4xl font-bold" id={title}>
                {title}
            </h1>
            <div className="flex flex-row flex-wrap gap-2 items-end -mt-2 brightness-100 relative w-full">
                {extendsClass && (
                    <div className="flex flex-row gap-2">
                        <h3 className="text-md font-semibold text-gray-400">
                            extends
                        </h3>
                        <a href={extendsClassLink}>
                            <div className="flex flex-row gap-2">
                                <h3 className="text-md font-semibold text-blue-500">
                                    {extendsClass}
                                </h3>
                                {extendsClassLink?.includes("https") && (
                                    <ExternalLink
                                        color="#2a7cf9"
                                        size={14}
                                        className="-ml-2"
                                    />
                                )}
                            </div>
                        </a>
                    </div>
                )}

                {implementsClass && (
                    <div className="flex flex-row gap-2">
                        <h3 className="text-md font-semibold text-gray-400">
                            implements
                        </h3>
                        <a href={implementsClassLink}>
                            <h3 className="text-md font-semibold text-blue-500">
                                {implementsClass}
                            </h3>
                        </a>
                    </div>
                )}

                {usesComponent && (
                    <SwitchToComponentButton link={usesComponentLink} />
                )}
            </div>
        </div>
    );
}

export default SpecialHeader;
