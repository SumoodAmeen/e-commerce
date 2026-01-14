import heroImage from '../assets/hero/hero1.jpeg';
import heroDesktopImage from '../assets/hero/hero_desktop.jpeg';

const Hero = () => {
    return (
        <section className="w-full">
            <div>
                <div className="w-full">
                    {/* Mobile Hero Image */}
                    <img
                        src={heroImage}
                        alt="Hero"
                        className="w-full h-[70vh] object-cover object-top md:hidden"
                    />
                    {/* Desktop Hero Image */}
                    <img
                        src={heroDesktopImage}
                        alt="Hero"
                        className="hidden md:block w-full h-screen object-cover object-top"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
