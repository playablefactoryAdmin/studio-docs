"use client";

import Image from "next/image";
import { useState } from "react";

export const Slider = ({ src1, src2, width, height }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);

    const handleMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!isDragging) return;

        const rect = event.currentTarget.getBoundingClientRect();
        const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

        setSliderPosition(percent);
    };

    const handleMouseDown = () => {
        setIsDragging(true);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div className="relative flex mt-6" onMouseUp={handleMouseUp}>
            <div
                className="relative flex select-none"
                onMouseMove={handleMove}
                onMouseDown={handleMouseDown}
            >

                <Image
                    alt="Tiling Sprite Component" width={width} height={height} draggable={false}
                    src={src1}
                />
                <div
                    className="absolute top-0 left-0 right-0 w-full h-full select-none"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                    <Image
                        alt="Tiling Sprite Component" width={width} height={height} draggable={false}
                        src={src2}
                    />
                </div>
                <div
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                    style={{
                        left: `calc(${sliderPosition}% - 1px)`,
                    }}
                >
                    <div className="bg-white absolute rounded-full h-3 w-3 overflow-hidden -left-1 top-[calc(50%-5px)]" />
                </div>
            </div>
        </div>
    );
};

export default Slider;