"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function VenomousSection() {
    return (
        <section id="venomous" className="relative min-h-[100dvh] md:min-h-[150vh] flex flex-col items-center justify-center py-20 md:py-48 px-6 overflow-hidden ">
            {/* Background Image */}
            <div className="absolute inset-0 z-0" >
                <Image
                    src="/images/Venomouswebbackground.webp"
                    alt=""
                    fill
                    className="object-cover opacity-40"
                    priority
                />

            </div>

            {/* Top fade */}
            <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent" />

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />

            <div className="relative z-10 max-w-6xl mx-auto w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold uppercase tracking-widest text-white drop-shadow-2xl mb-12 md:mb-16 text-center"
                >

                </motion.h2>

                <div className="flex flex-col items-center justify-center -translate-y-10">
                    {/* Release Info */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center space-y-8 w-full max-w-2xl"
                    >
                        <div>
                            <h3 className="text-4xl md:text-7xl font-bold text-white mb-4 italic uppercase">
                                venomous
                            </h3>
                        </div>

                        <div className="w-full rounded-xl bg-black/40 shadow-lg  backdrop-blur-sm ">
                            <iframe data-testid="embed-iframe" style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/track/0lep6fkjOLyak9wvwkVpYx?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
