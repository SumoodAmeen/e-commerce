import heroImage from '../assets/navbar/hero.jpeg';

const Hero = () => {
    return (
        <section className="w-full">
            {/* Mobile View */}
            <div className="md:hidden">
                {/* Hero Image - Full width on mobile */}
                <div className="w-full">
                    <img
                        src={heroImage}
                        alt="Hero"
                        className="w-full h-[70vh] object-cover"
                    />
                </div>

                {/* Content Section */}
                <div className="px-4 py-6">
                    <h1
                        className="text-[28px] font-normal text-[#1a1a1a] tracking-[1px] mb-4"
                    >
                        IN PRESENCE
                    </h1>
                    <p className="text-[15px] leading-[1.4] text-[#1a1a1a] font-light">
                        Timeless abayas designed for modern elegance.{' '}
                        <span className="text-[#000000] font-medium">
                            Crafted with care, each piece blends modesty, comfort, and refined style for everyday wear and special moments.
                        </span>
                        <br />
                        <br />
                        Discover effortless silhouettes, premium fabrics, and subtle details made to move with you and elevate your presence, wherever you go.
                    </p>
                </div>
            </div>

            {/* Desktop View */}
            <div className="hidden md:block relative">
                {/* Hero Image - Full width with overlay */}
                <div className="relative w-full h-[85vh]">
                    <img
                        src={heroImage}
                        alt="Hero"
                        className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 w-full p-16 pb-20">
                        <div className="max-w-2xl">
                            <h1
                                className="text-[48px] font-normal text-white tracking-[2px] mb-6"
                                style={{ fontFamily: "'Darlington', serif" }}
                            >
                                IN PRESENCE
                            </h1>
                            <p className="text-[18px] leading-[1.8] text-white/90 font-light">
                                The{' '}
                                <span className="text-[#d4af37] font-medium">
                                    film is homage to Late Architect Didi Contractor's philosophy
                                </span>{' '}
                                where making is a regenerative act, a form of social cohesion, and a
                                reclamation of culture.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
