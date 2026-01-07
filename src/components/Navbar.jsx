import { useState } from 'react';
import searchIcon from '../assets/navbar/search.svg';
import bagIcon from '../assets/navbar/bag.svg';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'HOME', href: '/' },
        { name: 'SHOP', href: '/shop' },
        { name: 'GIFTS', href: '/gifts' },
        { name: 'COLLECTION', href: '/collection' },
        { name: 'SIZE CHART', href: '/size-chart' },
        { name: 'ABOUT', href: '/about' },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="sticky top-0 bg-white z-[1000]">
            {/* Desktop Navbar */}
            <div className="hidden md:flex flex-col items-center py-4 px-10">
                <div className="flex justify-center items-center w-full relative mb-4">
                    <div
                        className="text-xl font-normal text-[#1a1a1a] tracking-[2px] uppercase"
                        style={{ fontFamily: "'Darlington', serif" }}
                    >
                        Abhaya
                    </div>
                    <div className="flex items-center gap-4 absolute right-0">
                        <button
                            className="bg-transparent border-none cursor-pointer p-1 flex items-center justify-center transition-opacity duration-200 hover:opacity-70"
                            aria-label="User account"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <circle cx="12" cy="8" r="4" />
                                <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                            </svg>
                        </button>
                        <button
                            className="bg-transparent border-none cursor-pointer p-1 flex items-center justify-center transition-opacity duration-200 hover:opacity-70"
                            aria-label="Search"
                        >
                            <img className="w-5 h-5" src={searchIcon} alt="Search" />
                        </button>
                        <button
                            className="bg-transparent border-none cursor-pointer p-1 flex items-center justify-center transition-opacity duration-200 hover:opacity-70"
                            aria-label="Shopping bag"
                        >
                            <img className="w-5 h-5" src={bagIcon} alt="Bag" />
                        </button>
                    </div>
                </div>
                <nav className="flex justify-center items-center gap-5 lg:gap-8 flex-wrap">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="font-sans text-[11px] lg:text-[11px] md:text-[10px] font-normal text-[#1a1a1a] no-underline tracking-[1px] uppercase transition-opacity duration-200 py-1 hover:opacity-70"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
            </div>

            {/* Mobile Navbar */}
            <div className="flex md:hidden justify-between items-center py-0 px-0">
                <button
                    className="bg-transparent border-none cursor-pointer p-1 flex flex-col gap-[5px]"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    <span className="block w-5 h-[1.5px] bg-[#1a1a1a] transition-all duration-300"></span>
                    <span className="block w-5 h-[1.5px] bg-[#1a1a1a] transition-all duration-300"></span>
                    <span className="block w-5 h-[1.5px] bg-[#1a1a1a] transition-all duration-300"></span>
                </button>
                <div
                    className="text-[22px] font-normal text-[#1a1a1a] tracking-[2px] uppercase"
                    style={{ fontFamily: "'Darlington', serif" }}
                >
                    Abhaya
                </div>
                <div className="flex items-center gap-4">
                    <button
                        className="bg-transparent border-none cursor-pointer p-1 flex items-center justify-center transition-opacity duration-200 hover:opacity-70"
                        aria-label="Search"
                    >
                        <img className="w-[20px] h-[20px]" src={searchIcon} alt="Search" />
                    </button>
                    <button
                        className="bg-transparent border-none cursor-pointer p-1 flex items-center justify-center transition-opacity duration-200 hover:opacity-70"
                        aria-label="Shopping bag"
                    >
                        <img className="w-[20px] h-[20px]" src={bagIcon} alt="Bag" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-[1001] transition-all duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
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
                    <nav className="flex flex-col gap-15">
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
        </header>
    );
};

export default Navbar;
