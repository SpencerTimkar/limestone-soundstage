"use client";
import { useState, useEffect } from 'react';
import { Mail, Camera } from 'lucide-react';

const allPhotos: string[] = [
    "/galleryphotos/1000008945.webp",
    "/galleryphotos/20250302_063102000_iOS.webp",
    "/galleryphotos/20250302_063119000_iOS.webp",
    "/galleryphotos/20250302_063222000_iOS.webp",
    "/galleryphotos/20250302_063543000_iOS.webp",
    "/galleryphotos/20250302_063718000_iOS.webp",
    "/galleryphotos/64E08044-3899-483C-AAE4-48B5F669C103.webp",
    "/galleryphotos/903F4C9C-9773-4E27-8AC4-BBD695FBD59E.webp",
    "/galleryphotos/AFDB8C78-D3E8-4ADF-810D-C22449EF2DD8.webp",
    "/galleryphotos/IMG_0879.webp",
    "/galleryphotos/IMG_1061.webp",
    "/galleryphotos/IMG_1069.webp",
    "/galleryphotos/IMG_1070.webp",
    "/galleryphotos/IMG_1071.webp",
    "/galleryphotos/IMG_1196.webp",
    "/galleryphotos/IMG_1197.webp",
    "/galleryphotos/IMG_1207.webp",
    "/galleryphotos/IMG_1223.webp",
    "/galleryphotos/IMG_1265.webp",
    "/galleryphotos/IMG_1273.webp",
    "/galleryphotos/IMG_1743.webp",
    "/galleryphotos/IMG_2231_v3.webp",
    "/galleryphotos/IMG_2344.webp",
    "/galleryphotos/IMG_2429.webp",
    "/galleryphotos/IMG_2836.webp",
    "/galleryphotos/IMG_2864.webp",
    "/galleryphotos/IMG_2865.webp",
    "/galleryphotos/IMG_2866.webp",
    "/galleryphotos/IMG_2867.webp",
    "/galleryphotos/IMG_2868.webp",
    "/galleryphotos/IMG_2870.webp",
    "/galleryphotos/IMG_2871.webp",
    "/galleryphotos/IMG_2873.webp",
    "/galleryphotos/IMG_2874.webp",
    "/galleryphotos/IMG_2876.webp",
    "/galleryphotos/IMG_2956.webp",
    "/galleryphotos/IMG_2959.webp",
    "/galleryphotos/IMG_2961.webp",
    "/galleryphotos/IMG_2962.webp",
    "/galleryphotos/IMG_2964.webp",
    "/galleryphotos/IMG_2968.webp",
    "/galleryphotos/IMG_2988.webp",
    "/galleryphotos/IMG_2994.webp",
    "/galleryphotos/IMG_3007.webp",
    "/galleryphotos/IMG_3011.webp",
    "/galleryphotos/IMG_3025.webp",
    "/galleryphotos/IMG_3026.webp",
    "/galleryphotos/IMG_3027.webp",
    "/galleryphotos/IMG_3223.webp",
    "/galleryphotos/IMG_3259.webp",
    "/galleryphotos/IMG_3261.webp",
    "/galleryphotos/IMG_3748.webp",
    "/galleryphotos/IMG_4210.webp",
    "/galleryphotos/IMG_5818.webp",
    "/galleryphotos/IMG_6663.webp",
    "/galleryphotos/IMG_6714.webp",
    "/galleryphotos/IMG_7817.webp",
    "/galleryphotos/IMG_7893.webp",
    "/galleryphotos/IMG_7898.webp",
    "/galleryphotos/IMG_8069.webp",
    "/galleryphotos/IMG_8488.webp",
    "/galleryphotos/IMG_8520.webp",
    "/galleryphotos/IMG_8542.webp",
    "/galleryphotos/IMG_8560.webp",
    "/galleryphotos/IMG_8801.webp",
    "/galleryphotos/IMG_8853.webp",
    "/galleryphotos/andrew spencer lizzie max band.webp",
    "/galleryphotos/andrew.webp",
    "/galleryphotos/crowd-2.webp",
    "/galleryphotos/crowd-3.webp",
    "/galleryphotos/crowd.webp",
];

const FanGallerySection = () => {
    const [photos, setPhotos] = useState<string[]>(allPhotos);

    useEffect(() => {
        // Randomize photos on mount
        const shuffled = [...allPhotos].sort(() => Math.random() - 0.5);
        setPhotos(shuffled);
    }, []);

    return (
        <section id="gallery" className="relative min-h-screen py-24 text-white">
            {/* Header Container */}
            <div className="container mx-auto max-w-6xl px-6 mb-16">
                <div className="text-center">
                    <h2
                        className="text-4xl md:text-6xl font-bold uppercase tracking-widest mb-6"
                    >
                        Gallery
                    </h2>
                    <p
                        className="text-xl text-zinc-400 max-w-2xl mx-auto mb-8"
                    >
                        We want to see your faces! Send us photos of you at our shows or rocking Limestone merch to be featured here.
                    </p>

                    <div>
                        <a
                            href="mailto:official.limestone.band@gmail.com?subject=Fan Photo Submission&body=Here is a photo for the Limestone Fan Gallery!"
                            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-zinc-200 transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                            Submit a Photo
                        </a>
                    </div>
                </div>
            </div>

            {/* Edge-to-Edge Gallery Grid */}
            <div className="w-full px-2">
                {photos.length > 0 ? (
                    <div className="columns-2 md:columns-4 lg:columns-5 gap-4 space-y-4">
                        {photos.map((photo, index) => (
                            <div
                                key={index}
                                className="break-inside-avoid relative overflow-hidden rounded-xl"
                            >
                                <img
                                    src={photo}
                                    alt={`Fan photo ${index + 1}`}
                                    className="w-full h-auto object-cover"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 border border-white/10 rounded-2xl bg-white/5">
                        <Camera className="w-16 h-16 text-zinc-600 mb-4" />
                        <p className="text-zinc-500 text-lg">No photos yet. Be the first to submit!</p>
                    </div>
                )}

            </div>
        </section>
    );
};

export default FanGallerySection;
