"use client";

export default function Footer() {
    return (
        <footer className="py-12 bg-black text-zinc-500 text-sm">
            <div className="container mx-auto px-6 flex flex-col items-center gap-6">
                <div className="flex gap-6 uppercase tracking-widest text-xs">
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors">Spotify</a>
                    <a href="#" className="hover:text-white transition-colors">YouTube</a>
                    <a href="#" className="hover:text-white transition-colors">Email</a>
                </div>
                <p>&copy; {new Date().getFullYear()} Limestone. All rights reserved.</p>
            </div>
        </footer>
    );
}
