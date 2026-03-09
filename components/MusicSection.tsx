"use client";

import { motion } from "framer-motion";

export default function MusicSection() {
    const tracks = [
        { title: "Starving", id: "77H2Bx13YzJcnA7mdAVa2G" },
        { title: "Sedona", id: "0X6zQIdc1MlPBEBlglitHj" },
        { title: "Growing Down", id: "6t6pdFx4NOJYGIR8hSSjTL" },
    ];

    return (
        <section id="music" className="relative py-16 md:py-24 bg-transparent text-white">
            <div className="relative z-10 container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold uppercase tracking-widest mb-12 text-center"
                >
                    Music
                </motion.h2>

                <div className="flex justify-center gap-6 mb-12 flex-wrap">
                    <a
                        href="https://open.spotify.com/artist/60Ms8qhGHWJAeZgbOA6Dyq?si=ZoLlYJSpRRuZ7fCmb-fFFQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 border border-zinc-700/50 rounded-full bg-black/20 hover:bg-zinc-800/50 hover:border-zinc-500 transition-all duration-300 backdrop-blur-sm group"
                    >
                        <svg className="w-5 h-5 text-[#1DB954] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" /></svg>
                        <span className="text-sm tracking-wider font-medium text-zinc-300 group-hover:text-white">Spotify</span>
                    </a>
                    <a
                        href="https://music.apple.com/us/artist/limestone/1820102301"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 border border-zinc-700/50 rounded-full bg-black/20 hover:bg-zinc-800/50 hover:border-zinc-500 transition-all duration-300 backdrop-blur-sm group"
                    >
                        <svg className="w-5 h-5 text-[#FA243C] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-1c-3.859 0-7-3.141-7-7s3.141-7 7-7 7 3.141 7 7-3.141 7-7 7z" /><path d="M15.54 10.665c-.044-.01-.09-.015-.136-.015-.295 0-.583.125-.79.356-.889.988-1.503 1.144-1.928 1.144-.395 0-1.066-.374-1.685-.644-.523-.228-.999-.436-1.319-.436-.613 0-1.258.333-1.638.748-1.401 1.59-1.096 4.39.467 6.634.618.894 1.344 1.763 2.062 1.763.155 0 .284-.047.382-.083.33-.119.799-.286 1.488-.286.689 0 1.168.172 1.503.295.093.034.212.078.356.078.729 0 1.529-1.03 2.155-1.944.593-.863.858-1.232 1.056-1.596-.02-.01-1.226-.453-1.447-1.748-.201-1.173.69-1.996 1.411-2.459-.289-.785-.92-1.458-1.897-1.807zM13.251 7.15c.571 0 1.056-.201 1.457-.6.416-.411.633-.94.633-1.543 0-.103-.01-.206-.031-.304-.546.041-1.077.294-1.468.706-.391.397-.685.938-.685 1.52 0 .077.005.155.021.232.036.005.051.01.072.01.001-.001-.001-.001.001-.021z" /></svg>
                        <span className="text-sm tracking-wider font-medium text-zinc-300 group-hover:text-white">Apple Music</span>
                    </a>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {tracks.map((track) => (
                        <div key={track.title} className="flex flex-col gap-4">
                            <div className="w-full rounded-xl bg-purple-950/30 shadow-lg">
                                <iframe
                                    style={{ borderRadius: "12px" }}
                                    src={`https://open.spotify.com/embed/track/${track.id}?utm_source=generator&theme=0`}
                                    width="100%"
                                    height="352"
                                    frameBorder="0"
                                    allowFullScreen
                                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                    loading="lazy"
                                    title={track.title}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
