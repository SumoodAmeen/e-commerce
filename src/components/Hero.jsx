import heroImage from '../assets/hero/hero1.jpeg';

const Hero = () => {
    return (
        <section className="w-full">
            {/* Mobile View */}
            <div>
                {/* Hero Image - Full width on mobile */}
                <div className="w-full">
                    <img
                        src={heroImage}
                        alt="Hero"
                        className="w-full h-[70vh] md:h-screen object-cover object-top"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
