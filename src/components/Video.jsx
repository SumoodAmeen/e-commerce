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
        </div>
    );
};

export default SeasonVideo;
