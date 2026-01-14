import { useState, useEffect, useRef } from 'react';
import searchIcon from '../assets/navbar/search.svg';
import bagIcon from '../assets/navbar/bag.svg';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);
    const scrollTimeoutRef = useRef(null);

    const navLinks = [
        { name: 'HOME', href: '/' },
        { name: 'SHOP', href: '/shop' },
        { name: 'GIFTS', href: '/gifts' },
        { name: 'COLLECTION', href: '/collection' },
        { name: 'SIZE CHART', href: '/size-chart' },
        { name: 'ABOUT', href: '/about' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Check if scrolled past threshold for background change
            setIsScrolled(currentScrollY > 50);

            // Hide/show navbar based on scroll direction
            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                // Scrolling down & past threshold - hide navbar
                setIsVisible(false);
            } else if (currentScrollY < lastScrollY.current) {
                // Scrolling up - show navbar
                setIsVisible(true);
            }

            lastScrollY.current = currentScrollY;

            // Reset idle timer on each scroll
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
            // Show navbar after user stops scrolling for 800ms
            scrollTimeoutRef.current = setTimeout(() => {
                setIsVisible(true);
            }, 800);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 bg-white
                    ${isVisible ? 'translate-y-0' : 'md:translate-y-0 -translate-y-full'}
                `}
            >
                {/* Unified Navbar for Desktop and Mobile */}
                <div className="flex justify-between items-center py-3 px-4 md:py-8 md:px-10">
                    {/* Hamburger Menu Button */}
                    <button
                        className="bg-transparent border-none cursor-pointer p-1 flex flex-col gap-[5px]"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        <span className="block w-5 h-[1.5px] bg-[#1a1a1a]"></span>
                        <span className="block w-5 h-[1.5px] bg-[#1a1a1a]"></span>
                        <span className="block w-5 h-[1.5px] bg-[#1a1a1a]"></span>
                    </button>

                    {/* Centered Logo */}
                    <div className="text-[22px] md:text-xl font-normal tracking-[2px] uppercase text-[#1a1a1a]">
                        Abhaya
                    </div>

                    {/* Right Icons */}
                    <div className="flex items-center gap-4">
                        {/* Profile Icon - Desktop Only */}
                        <button
                            className="hidden md:flex bg-transparent border-none cursor-pointer p-1 items-center justify-center transition-opacity duration-200 hover:opacity-70"
                            aria-label="User account"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <circle cx="12" cy="8" r="4" />
                                <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                            </svg>
                        </button>
                        {/* Search Icon */}
                        <button
                            className="bg-transparent border-none cursor-pointer p-1 flex items-center justify-center transition-opacity duration-200 hover:opacity-70"
                            aria-label="Search"
                        >
                            <img className="w-5 h-5" src={searchIcon} alt="Search" />
                        </button>
                        {/* Bag Icon */}
                        <button
                            className="bg-transparent border-none cursor-pointer p-1 flex items-center justify-center transition-opacity duration-200 hover:opacity-70"
                            aria-label="Shopping bag"
                        >
                            <img className="w-5 h-5" src={bagIcon} alt="Bag" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Menu Overlay - Works on both Desktop and Mobile */}
            <div
                className={`fixed inset-0 bg-black/50 z-[1001] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                onClick={toggleMobileMenu}
            >
                <div
                    className={`fixed top-0 h-full w-[280px] bg-white p-5 shadow-[2px_0_10px_rgba(0,0,0,0.1)] transition-all duration-300 overflow-y-auto flex flex-col ${isMobileMenuOpen ? 'left-0' : '-left-[300px]'
                        }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        className="bg-transparent border-none cursor-pointer p-3 flex items-center justify-center mb-8 hover:opacity-70 self-start -ml-3 -mt-3"
                        onClick={toggleMobileMenu}
                        aria-label="Close menu"
                    >
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                    <nav className="flex flex-col gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="font-sans text-sm font-normal text-[#1a1a1a] no-underline tracking-[1px] uppercase py-2.5 transition-opacity duration-200 hover:opacity-70"
                                onClick={toggleMobileMenu}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Navbar;
