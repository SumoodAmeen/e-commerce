import whatsappIcon from '../../assets/icons/whatsapp.png';

const FloatingWhatsApp = () => {
    const phoneNumber = ''; // Add your WhatsApp number here (with country code, no + or spaces)
    const message = 'Hello! I would like to inquire about your products.';

    const handleClick = () => {
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-6 right-6 z-[999] w-14 h-14 md:w-16 md:h-16 bg-black rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
            aria-label="Contact us on WhatsApp"
        >
            <img
                src={whatsappIcon}
                alt="WhatsApp"
                className="w-8 h-8 md:w-10 md:h-10 filter brightness-0 invert"
            />
            {/* Pulse animation ring */}
            <span className="absolute inset-0 rounded-full bg-black animate-ping opacity-20"></span>
        </button>
    );
};

export default FloatingWhatsApp;
