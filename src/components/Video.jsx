import React from 'react';
import Video from '../assets/video/video.mp4';


const SeasonVideo = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Video */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={Video} type="video/mp4" />
            </video>

            {/* Overlay (optional dark layer) */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Content on top 
            <div className="relative z-10 flex h-full flex-col items-center justify-center text-white text-center px-4">
                <h1 className="text-3xl md:text-5xl font-semibold tracking-wide">
                    New Collection
                </h1>
                <p className="mt-3 text-sm md:text-lg opacity-90">
                    Timeless. Elegant. Modest.
                </p>
                <button className="mt-6 px-6 py-2 border border-white hover:bg-white hover:text-black transition">
                    Shop Now
                </button>
            </div>*/}
        </div>
    );
};

export default SeasonVideo;
