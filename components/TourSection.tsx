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
                            <div className="text-center md:text-left min-w-[100px]">
                                <div className="text-xl font-bold text-white uppercase">{tour.date}</div>
                                {tour.time && <div className="text-sm text-zinc-400 mt-1">{tour.time}</div>}
                            </div>

                            <div className="flex-1 text-center md:text-left md:px-8 space-y-1">
                                <div className="text-lg font-semibold text-zinc-200">{tour.venue}</div>
                                {tour.details && <div className="text-sm text-zinc-400 italic">{tour.details}</div>}
                                <div className="text-xs text-zinc-500 uppercase tracking-wide">
                                    {tour.city}
                                    {tour.age && <span className="mx-2">• {tour.age}</span>}
                                    {tour.cover && <span className="mx-2">• {tour.cover}</span>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
