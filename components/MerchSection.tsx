"use client";

import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function MerchSection() {
    return (
        <section id="merch" className="relative min-h-[60vh] flex flex-col items-center justify-center py-24 px-6 overflow-hidden">

          
            <div className="relative z-10 text-center max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold uppercase tracking-widest text-white drop-shadow-2xl mb-6"
                >
                    Merchandise
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-zinc-300 text-lg md:text-xl tracking-wide mb-12 max-w-2xl mx-auto"
                >
                    Official Limestone apparel and accessories. <br />Designed by us, printed on demand.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Link
                        href="https://limestoneband.printify.me"
                        target="_blank"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black uppercase tracking-[0.2em] text-sm md:text-base font-bold hover:bg-zinc-200 transition-transform transform hover:scale-105"
                    >
                        <ShoppingBag size={20} />
                        Visit Store
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
