"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section id="about" className="py-24 bg-transparent text-white">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold uppercase tracking-widest mb-8"
                >
                    About
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="prose prose-invert mx-auto"
                >
                    <p className="text-xl text-zinc-300 leading-relaxed">
                        Limestone is an alternative-rock band that brings a unique blend 
                        of melodic and hard-hitting elements to the genre. Hailing from 
                        Lawrence, Kansas, they are known for emotionally charged songwriting, 
                        powerful instrumentals, and a sound that balances vulnerability with intensity.
                        Formed in a basement one winter day in 2024, Limestone has generated an 
                        undeniable presence in their local music scene. With their upcoming 
                        self-titled EP, Limestone, the band is hungry to expand their reach 
                        and connect with listeners far beyond their Kansas roots.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
