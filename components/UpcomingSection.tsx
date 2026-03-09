"use client";

import { motion } from "framer-motion";
import { Calendar, Music } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function UpcomingSection() {
    return (
        <section id="upcoming" className="relative min-h-[100dvh] md:min-h-[150vh] flex flex-col items-center justify-center py-20 md:py-48 px-6 overflow-hidden ">
            {/* Background Image */}
            <div className="absolute inset-0 z-0" >
                <Image
                    src="/images/starving necklace.webp"
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

                <div className="grid md:grid-cols-2 gap-12 items-center translate-y-1">
                    {/* Album Cover */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative aspect-square w-full max-w-[260px] md:max-w-md mx-auto"
                    >
                        <Image
                            src="/images/starving_cover.webp"
                            alt="Starving - Single Cover"
                            fill
                            className="object-cover shadow-2xl"
                            priority
                        />
                    </motion.div>

                    {/* Release Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-center md:text-left space-y-8"
                    >
                        <div>
                            <h3 className="text-4xl md:text-7xl font-bold text-white mb-4 italic uppercase">
                                starving
                            </h3>
                            <div className="flex items-center gap-3 text-zinc-400 text-lg justify-center md:justify-start">
                                <Calendar size={20} />
                                <span>February 1, 2026</span>
                            </div>
                        </div>

                        <p className="text-zinc-300 text-lg md:text-xl leading-relaxed max-w-sm mx-auto md:mx-0">
                            Our new single drops February 1st. Pre-save now to be the first to hear it.
                        </p>

                        <Link
                            href="https://distrokid.com/hyperfollow/limestone2/starving?utm_campaign=website&utm_medium=Email+&utm_source=SendGrid"
                            target="_blank"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black uppercase tracking-[0.2em] text-sm md:text-base font-bold hover:bg-zinc-200 transition-transform transform hover:scale-105"
                        >
                            <Music size={20} />
                            Pre-Save Now
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
