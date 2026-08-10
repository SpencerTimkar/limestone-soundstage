"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { track } from "@vercel/analytics";

export default function MusicSection() {
    useEffect(() => {
        const handleBlur = () => {
            if (document.activeElement?.tagName === "IFRAME") {
                track("Player Interaction", {
                    song: "Grace",
                    type: "Homepage Single Player",
                    location: "Homepage Music Section",
                });
            }
        };
        window.addEventListener("blur", handleBlur);
        return () => window.removeEventListener("blur", handleBlur);
    }, []);

    return (
        <section id="music" className="relative py-24 md:py-32 min-h-[80vh] bg-transparent text-white overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/grace_background.webp"
                    alt="Grace Background"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
            </div>

            {/* Top fade */}
            <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black via-black/80 to-transparent z-0" />
            
            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-0" />

            <div className="relative z-10 container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-zinc-300 font-semibold mb-2 block">
                        New Single Out Now
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-widest drop-shadow-2xl">
                        Grace
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full rounded-2xl overflow-hidden shadow-2xl bg-black/60 backdrop-blur-xl p-3 md:p-4 border border-white/20"
                >
                    <iframe
                        data-testid="embed-iframe"
                        style={{ borderRadius: "12px" }}
                        src="https://open.spotify.com/embed/track/4rZZaQnV5SHnxVLxn7KQS1?utm_source=generator&theme=0&si=3e057ebf20734c86"
                        width="100%"
                        height="352"
                        frameBorder="0"
                        allowFullScreen
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        title="Grace - Single"
                    />

                    <div className="mt-4 flex justify-center">
                        <Link
                            href="/grace"
                            onClick={() => track("Click Hyperfollow Button", { release: "Grace", location: "Homepage Music Section" })}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-zinc-200 transition-all font-bold text-xs uppercase tracking-widest shadow-lg group"
                        >
                            <span>Stream On All Platforms</span>
                            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
