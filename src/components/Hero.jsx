import heroImage from '../assets/hero/hero1.jpeg';

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

                {/* Content Section 
                <div className="px-4 py-6">
                    <h1
                        className="text-[28px] font-light text-[#1a1a1a] tracking-[1px] mb-4"
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
                </div>*/}
            </div>

            {/* Desktop View */}
            <div className="hidden md:block">
                {/* Hero Image - Full width */}
                <div className="w-full">
                    <img
                        src={heroImage}
                        alt="Hero"
                        className="w-full h-[85vh] object-cover"
                    />
                </div>

                {/* Content Section - Below Image 
                <div className="px-16 py-10">
                    <h1
                        className="text-[36px] font-normal text-[#1a1a1a] tracking-[2px] mb-6"
                    >
                        IN PRESENCE
                    </h1>
                    <p className="text-[17px] leading-[1.7] text-[#1a1a1a] font-light max-w-3xl">
                        Timeless abayas designed for modern elegance.{' '}
                        <span className="text-[#000000] font-medium">
                            Crafted with care, each piece blends modesty, comfort, and refined style for everyday wear and special moments.
                        </span>
                        <br />
                        <br />
                        Discover effortless silhouettes, premium fabrics, and subtle details made to move with you and elevate your presence, wherever you go.
                    </p>
                </div>*/}
            </div>
        </section>
    );
};

export default Hero;
