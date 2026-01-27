"use client";

import { motion, useScroll, useSpring, useTransform, useVelocity, MotionValue } from "framer-motion";
import Image from "next/image";

// Helper component for individual ghost layers to keep hooks cleaner
function GhostLayer({ velocity, index }: { velocity: MotionValue<number>, index: number }) {
    // Lag factor: keep it tight for smear effect
    const y = useTransform(velocity, (v) => v * (index * 0.001));

    // Stretch factor: stretches vertically with speed ("smear" effect)
    const scaleY = useTransform(velocity, [-1500, 0, 1500], [1 + index * 0.015, 1, 1 + index * 0.015]);

    // Squash factor: slightly thins horizontally to preserve apparent mass (optional, but looks better)
    const scaleX = useTransform(velocity, [-1500, 0, 1500], [1 - index * 0.015, 1, 1 - index * 0.015]);



    const maskStyle = {
        maskImage: 'url(/images/high_res_star_png.png)',
        WebkitMaskImage: 'url(/images/high_res_star_png.png)',
        maskSize: 'contain',
        WebkitMaskSize: 'contain',
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskPosition: 'center'
    };

    // Directional origin: 
    // If v > 0 (scroll down, content moves up), we want trail below -> origin top (0).
    // If v < 0 (scroll up, content moves down), we want trail above -> origin bottom (1).
    const originY = useTransform(velocity, (v) => v > 0 ? 0 : 1);

    return (
        <motion.div
            className="absolute inset-0 mix-blend-screen"
            style={{
                y,
                scaleY,
                scaleX,
                originY,

                opacity: 0.6 / index, // Slightly higher opacity for the smear core
                willChange: "transform, opacity, filter", // Hint for GPU acceleration
                ...maskStyle
            }}
        >
            <Image
                src="/images/high_res_star_png.png"
                alt=""
                width={3840}
                height={2160}
                className="w-full h-full object-contain"
                priority
            />
        </motion.div>
    );
}

export default function StarBackground() {
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 150,
        stiffness: 200,
        mass: 2
    });



    const maskStyle = {
        maskImage: 'url(/images/high_res_star_png.png)',
        WebkitMaskImage: 'url(/images/high_res_star_png.png)',
        maskSize: 'contain',
        WebkitMaskSize: 'contain',
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskPosition: 'center'
    };

    // calculate 7 layers
    const layers = [1, 2, 3, 4, 5, 6, 7];

    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60 mix-blend-lighten overflow-hidden">
            {/* Masked Container for Star & Noise */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-[95vw] min-w-[270vw] h-auto max-w-none opacity-40 mix-blend-screen animate-warble rotate-355 pointer-events-none">

                {/* Cloud/Ghost Layers */}
                {layers.map((i) => (
                    <GhostLayer key={i} velocity={smoothVelocity} index={i} />
                ))}

                {/* Main Star */}
                <motion.div
                    className="relative w-full h-full"
                    style={{
                        ...maskStyle
                    }}
                >
                    {/* Static Star Background */}
                    <Image
                        src="/images/high_res_star_png.png"
                        alt=""
                        width={3840}
                        height={2160}
                        className="w-full h-full object-contain"
                        priority
                    />
                    {/* Noise Overlay */}
                    <div className="absolute -inset-[50%] w-[200%] h-[200%] bg-noise-harsh opacity-90 animate-noise mix-blend-hard-light pointer-events-none"></div>
                </motion.div>
            </div>
        </div>
    );
}
