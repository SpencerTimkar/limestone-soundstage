"use client";

import Image from "next/image";

interface StarBackgroundProps {
    className?: string;
    starClassName?: string;
}

export default function StarBackground({ className = "opacity-60", starClassName = "top-1/2 -translate-y-1/2" }: StarBackgroundProps) {

    return (
        <div className={`absolute inset-0 z-0 pointer-events-none mix-blend-lighten overflow-hidden ${className}`}>
            {/* Star Container */}
            <div className={`absolute  -left-[95vw] min-w-[270vw] h-auto max-w-none opacity-50 mix-blend-screen animate-warble rotate-355 pointer-events-none will-change-transform ${starClassName}`}>
                {/* Main Star */}
                <div className="relative w-full h-full">
                    {/* Static Star Background */}
                    <Image
                        src="/images/high_res_star_png.webp"
                        alt=""
                        width={3840}
                        height={2160}
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
