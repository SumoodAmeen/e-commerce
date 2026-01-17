import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../../data/productData';

const ProductDetail = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState('');
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
        const foundProduct = getProductById(productId);
        if (foundProduct) {
            setProduct(foundProduct);
            setSelectedSize(foundProduct.sizes?.[0] || '');
        }
    }, [productId]);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-[#666]">Product not found</p>
            </div>
        );
    }

    const images = product.images || [product.image];

    return (
        <section className="w-full py-4 md:py-8">
            {/* Mobile Layout */}
            <div className="block md:hidden">
                {/* Image Carousel */}
                <div className="relative bg-[#f5f5f5] aspect-square overflow-hidden">
                    <img
                        src={images[activeImageIndex]}
                        alt={product.name}
                        className="w-full h-full object-cover object-center"
                    />
                </div>

                {/* Dot Indicators */}
                {images.length > 1 && (
                    <div className="flex justify-center gap-2 mt-4">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveImageIndex(index)}
                                className={`w-2 h-2 rounded-full transition-colors ${index === activeImageIndex ? 'bg-[#1a1a1a]' : 'bg-[#d0d0d0]'
                                    }`}
                                aria-label={`View image ${index + 1}`}
                            />
                        ))}
                    </div>
                )}

                {/* Product Info */}
                <div className="px-4 mt-6">
                    {/* Title */}
                    <h1 className="text-[18px] font-medium text-[#1a1a1a] tracking-wide uppercase text-center">
                        {product.name}
                    </h1>

                    {/* SKU */}
                    <p className="text-[12px] text-[#888] mt-2 text-center tracking-wide">
                        SKU: {product.sku}
                    </p>

                    {/* Price */}
                    <p className="text-[16px] text-[#1a1a1a] mt-3 text-center font-medium">
                        RS. {product.priceValue?.toLocaleString('en-IN')}.00
                    </p>

                    {/* Size Selector */}
                    <div className="mt-6">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-[13px] text-[#1a1a1a]">Size:</span>
                            <button className="text-[13px] text-[#1a1a1a] underline">
                                View Size Guide
                            </button>
                        </div>
                        <select
                            value={selectedSize}
                            onChange={(e) => setSelectedSize(e.target.value)}
                            className="w-full py-3 px-4 border border-[#d0d0d0] text-[14px] text-[#1a1a1a] bg-white appearance-none cursor-pointer"
                        >
                            {product.sizes?.map((size) => (
                                <option key={size} value={size}>
                                    {size}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Add to Cart Button */}
                    <button className="w-full py-4 bg-[#1a1a1a] text-white text-[13px] tracking-[2px] uppercase mt-6 hover:bg-[#333] transition-colors">
                        ADD TO CART
                    </button>

                    {/* Meet the Makers Button */}
                    <button className="w-full py-4 border border-[#1a1a1a] text-[#1a1a1a] text-[13px] tracking-[2px] uppercase mt-3 hover:bg-[#f5f5f5] transition-colors">
                        MEET THE MAKERS
                    </button>

                    {/* Artisan Info */}
                    <div className="text-center mt-8">
                        <p className="text-[16px] text-[#1a1a1a] font-light">
                            {product.artisanInfo}
                        </p>
                        <p className="text-[13px] text-[#888] mt-2">
                            Know More About Them On The Link Above
                        </p>
                    </div>

                    {/* Product Details */}
                    <div className="mt-8 border-t border-[#e0e0e0] pt-6">
                        <h3 className="text-[12px] font-medium text-[#1a1a1a] tracking-[1px] uppercase mb-4">
                            PRODUCT DETAILS
                        </h3>
                        <div className="text-[13px] text-[#444] leading-relaxed whitespace-pre-line">
                            {product.description}
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex px-8 lg:px-16 gap-6 lg:gap-10">
                {/* Left - Thumbnail Gallery */}
                <div className="flex flex-col gap-3 w-20">
                    {images.map((img, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveImageIndex(index)}
                            className={`aspect-square border-2 overflow-hidden transition-all ${index === activeImageIndex
                                    ? 'border-[#1a1a1a]'
                                    : 'border-transparent hover:border-[#d0d0d0]'
                                }`}
                        >
                            <img
                                src={img}
                                alt={`${product.name} view ${index + 1}`}
                                className="w-full h-full object-cover object-center"
                            />
                        </button>
                    ))}
                </div>

                {/* Center - Main Image */}
                <div className="flex-1 max-w-[500px] bg-[#f5f5f5]">
                    <img
                        src={images[activeImageIndex]}
                        alt={product.name}
                        className="w-full h-auto object-cover object-center"
                    />
                </div>

                {/* Right - Product Info */}
                <div className="flex-1 max-w-[400px]">
                    {/* Title */}
                    <h1 className="text-[18px] font-medium text-[#1a1a1a] tracking-wide uppercase">
                        {product.name}
                    </h1>

                    {/* SKU */}
                    <p className="text-[12px] text-[#888] mt-2 tracking-wide">
                        SKU: {product.sku}
                    </p>

                    {/* Price */}
                    <p className="text-[16px] text-[#1a1a1a] mt-3 font-medium">
                        RS. {product.priceValue?.toLocaleString('en-IN')}.00
                    </p>

                    {/* Size Selector */}
                    <div className="mt-6">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-[13px] text-[#1a1a1a]">Size:</span>
                            <button className="text-[13px] text-[#1a1a1a] underline">
                                View Size Guide
                            </button>
                        </div>
                        <select
                            value={selectedSize}
                            onChange={(e) => setSelectedSize(e.target.value)}
                            className="w-full py-3 px-4 border border-[#d0d0d0] text-[14px] text-[#1a1a1a] bg-white appearance-none cursor-pointer"
                        >
                            {product.sizes?.map((size) => (
                                <option key={size} value={size}>
                                    {size}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Add to Cart Button */}
                    <button className="w-full py-4 bg-[#1a1a1a] text-white text-[13px] tracking-[2px] uppercase mt-6 hover:bg-[#333] transition-colors">
                        ADD TO CART
                    </button>

                    {/* Meet the Makers Button */}
                    <button className="w-full py-4 border border-[#1a1a1a] text-[#1a1a1a] text-[13px] tracking-[2px] uppercase mt-3 hover:bg-[#f5f5f5] transition-colors">
                        MEET THE MAKERS
                    </button>

                    {/* Artisan Info */}
                    <div className="text-center mt-8">
                        <p className="text-[16px] text-[#1a1a1a] font-light">
                            {product.artisanInfo}
                        </p>
                        <p className="text-[13px] text-[#888] mt-2">
                            Know More About Them On The Link Above
                        </p>
                    </div>

                    {/* Product Details */}
                    <div className="mt-8 border-t border-[#e0e0e0] pt-6">
                        <h3 className="text-[12px] font-medium text-[#1a1a1a] tracking-[1px] uppercase mb-4">
                            PRODUCT DETAILS
                        </h3>
                        <div className="text-[13px] text-[#444] leading-relaxed whitespace-pre-line">
                            {product.description}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;
