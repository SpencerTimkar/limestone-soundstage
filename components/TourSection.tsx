"use client";

import { motion } from "framer-motion";
import { tourDates } from "../data/tourDates";
import Link from "next/link";

export default function TourSection() {
    return (
        <section id="tour" className="py-16 md:py-24 bg-transparent text-white relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold uppercase tracking-widest mb-12 text-center"
                >
                    Upcoming Shows
                </motion.h2>

                <div className="flex flex-col gap-px bg-white/10 border border-white/10">
                    {tourDates.map((tour) => (
                        <div
                            key={tour.id}
                            className="flex flex-col md:flex-row items-center justify-between p-6 bg-black hover:bg-zinc-900 transition-colors gap-4"
                        >
                            <div className="text-center md:text-left">
                                <div className="text-xl font-bold text-white">{tour.date}</div>
                            </div>

                            <div className="flex-1 text-center md:text-left md:px-8">
                                <div className="text-lg font-semibold text-zinc-200">{tour.venue}</div>
                                <div className="text-sm text-zinc-500 uppercase tracking-wide">{tour.city}</div>
                            </div>


                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
