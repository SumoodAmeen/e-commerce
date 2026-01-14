import { useState } from 'react';

const Footer = () => {
    const [email, setEmail] = useState('');

    const supportLinks = [
        { name: 'Shipping', href: '/shipping' },
        { name: 'Return & Exchange', href: '/return-exchange' },
        { name: 'Return Policy', href: '/return-policy' },
        { name: 'Care & Materials', href: '/care-materials' },
        { name: 'Terms of use', href: '/terms' },
        { name: 'Privacy', href: '/privacy' },
        { name: 'Track Order', href: '/track-order' },
    ];

    const exploreLinks = [
        { name: 'Twos Day Sale', href: '/twos-day-sale' },
        { name: 'Futurwork', href: '/futurwork' },
        { name: 'CSK x Abhaya', href: '/csk-abhaya' },
        { name: 'Slider', href: '/slider' },
        { name: 'Episodic', href: '/episodic' },
    ];

    const companyLinks = [
        { name: 'About', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
    ];

    const socialLinks = [
        { name: 'Instagram', href: 'https://instagram.com' },
        { name: 'YouTube', href: 'https://youtube.com' },
        { name: 'LinkedIn', href: 'https://linkedin.com' },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle email subscription
        console.log('Email submitted:', email);
        setEmail('');
    };

    return (
        <footer className="bg-[#fafafa] pt-12 pb-6 px-6 md:px-12 lg:px-16">
            {/* Desktop Layout */}
            <div className="hidden md:block">
                <div className="flex justify-between items-start gap-8 mb-16">
                    {/* Left Section - Logo, Description, Email */}
                    <div className="max-w-[280px]">
                        <div className="text-lg font-normal text-[#1a1a1a] tracking-[2px] uppercase mb-4">
                            ABHAYA
                        </div>
                        <p className="text-[13px] text-[#666] leading-relaxed mb-8">
                            India needed an Indian brand for Indian customers.
                            <br />We stepped in.
                            <br />It's that simple.
                            <br />And honestly, we're having a blast doing it.
                        </p>
                        <form onSubmit={handleSubmit} className="relative">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter email address"
                                className="w-full py-3 px-4 pr-12 border border-[#ddd] rounded-full bg-white text-sm text-[#333] placeholder-[#999] outline-none focus:border-[#999] transition-colors"
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-[#ddd] bg-white flex items-center justify-center hover:border-[#999] transition-colors cursor-pointer"
                            >
                                <svg className="w-4 h-4 text-[#666]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        </form>
                    </div>

                    {/* Navigation Columns */}
                    <div className="flex gap-16 lg:gap-24">
                        {/* Explore */}
                        <div>
                            <h4 className="text-[11px] text-[#999] uppercase tracking-wider mb-4">Explore</h4>
                            <ul className="space-y-3">
                                {exploreLinks.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="text-[13px] text-[#333] hover:text-[#666] transition-colors no-underline">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h4 className="text-[11px] text-[#999] uppercase tracking-wider mb-4">Support</h4>
                            <ul className="space-y-3">
                                {supportLinks.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="text-[13px] text-[#333] hover:text-[#666] transition-colors no-underline">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h4 className="text-[11px] text-[#999] uppercase tracking-wider mb-4">Company</h4>
                            <ul className="space-y-3">
                                {companyLinks.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="text-[13px] text-[#333] hover:text-[#666] transition-colors no-underline">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Social with decorative stars */}
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-[#e53935] text-lg">✱</span>
                                <span className="text-[#e53935] text-lg opacity-60">✱</span>
                            </div>
                            <h4 className="text-[11px] text-[#999] uppercase tracking-wider mb-4">Social</h4>
                            <ul className="space-y-3">
                                {socialLinks.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-[13px] text-[#333] hover:text-[#666] transition-colors no-underline">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Watermark Text */}
                <div className="relative mb-8">
                    <div className="text-[80px] lg:text-[100px] font-light text-[#f0f0f0] tracking-tight leading-none select-none whitespace-nowrap overflow-hidden">
                        Always at Play<span className="text-[#f5e6e6]">**</span>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex justify-center items-center text-[11px] text-[#999] pt-4 border-t border-[#eee]">
                    <span>© 2026 ABHAYA Private Limited. All Rights Reserved.</span>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden">
                {/* Header with Logo and Stars */}
                <div className="flex justify-between items-start mb-6">
                    <div className="text-lg font-normal text-[#1a1a1a] tracking-[2px] uppercase">
                        ABHAYA
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="text-[#e53935] text-lg">✱</span>
                        <span className="text-[#e53935] text-lg opacity-60">✱</span>
                    </div>
                </div>

                {/* Description */}
                <p className="text-[13px] text-[#666] leading-relaxed mb-8">
                    India needed an Indian brand for Indian customers.
                    <br />We stepped in.
                    <br />It's that simple.
                    <br />And honestly, we're having a blast doing it.
                </p>

                {/* Email Input */}
                <form onSubmit={handleSubmit} className="relative mb-10">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email address"
                        className="w-full py-3 px-4 pr-12 border border-[#ddd] rounded-full bg-white text-sm text-[#333] placeholder-[#999] outline-none focus:border-[#999] transition-colors"
                    />
                    <button
                        type="submit"
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-[#ddd] bg-white flex items-center justify-center hover:border-[#999] transition-colors cursor-pointer"
                    >
                        <svg className="w-4 h-4 text-[#666]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                </form>

                {/* Navigation Links - Two Column Grid */}
                <div className="grid grid-cols-2 gap-x-8 gap-y-8 mb-10">
                    {/* Support */}
                    <div>
                        <h4 className="text-[11px] text-[#999] uppercase tracking-wider mb-4">Support</h4>
                        <ul className="space-y-3">
                            {supportLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-[13px] text-[#333] hover:text-[#666] transition-colors no-underline">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Explore */}
                    <div>
                        <h4 className="text-[11px] text-[#999] uppercase tracking-wider mb-4">Explore</h4>
                        <ul className="space-y-3">
                            {exploreLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-[13px] text-[#333] hover:text-[#666] transition-colors no-underline">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-[11px] text-[#999] uppercase tracking-wider mb-4">Company</h4>
                        <ul className="space-y-3">
                            {companyLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-[13px] text-[#333] hover:text-[#666] transition-colors no-underline">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-[11px] text-[#999] uppercase tracking-wider mb-4">Social</h4>
                        <ul className="space-y-3">
                            {socialLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-[13px] text-[#333] hover:text-[#666] transition-colors no-underline">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Watermark Text */}
                <div className="relative mb-8 overflow-hidden">
                    <div className="text-[45px] sm:text-[60px] font-light text-[#f0f0f0] tracking-tight leading-none select-none whitespace-nowrap">
                        Always Modest<span className="text-[#f5e6e6]">**</span>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex justify-center items-center text-[11px] text-[#999] pt-4 border-t border-[#eee]">
                    <span>© 2026 ABHAYA Private Limited. All Rights Reserved.</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
