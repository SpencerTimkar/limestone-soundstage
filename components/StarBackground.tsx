"use client";

import Image from "next/image";

export default function StarBackground() {

    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60 mix-blend-lighten overflow-hidden">
            {/* Star Container */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-[95vw] min-w-[270vw] h-auto max-w-none opacity-40 mix-blend-screen animate-warble rotate-355 pointer-events-none will-change-transform">
                {/* Main Star */}
                <div className="relative w-full h-full">
                    {/* Static Star Background */}
                    <Image
                        src="/images/high_res_star_png.png"
                        alt=""
                        width={3840}
                        height={2160}
                        className="w-full h-full object-contain"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}
