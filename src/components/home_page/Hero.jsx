import { Link } from 'react-router-dom';
import heroImage from '../../assets/hero/her2.jpeg';
import heroDesktopImage from '../../assets/hero/hero_desktop2.jpg';

const Hero = () => {
    return (
        <section className="w-full">
            <div>
                <div className="w-full relative">
                    {/* Shop Link Overlay */}
                    <Link
                        to="/shop"
                        className="absolute bottom-8 md:bottom-16 left-1/2 transform -translate-x-1/2 z-10 text-white text-[22px] md:text-[32px] font-medium tracking-widest uppercase underline underline-offset-4 hover:opacity-80 transition-opacity duration-300"
                    >
                        Shop
                    </Link>
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
