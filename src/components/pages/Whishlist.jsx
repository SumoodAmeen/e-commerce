import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';

const Whishlist = () => {
    const { wishlistItems, removeFromWishlist } = useWishlist();
    const { addToCart } = useCart();
    const navigate = useNavigate();

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`, { state: { fromWishlist: true } });
    };

    if (wishlistItems.length === 0) {
        return (
            <section className="w-full min-h-[60vh] flex flex-col items-center justify-center py-16 px-4">
                <div className="text-center">
                    <h1 className="text-[28px] md:text-[36px] font-light text-[#1a1a1a] mb-4">
                        My Wishlist
                    </h1>
                    <p className="text-[16px] text-[#666] mb-8">
                        Your wishlist is empty
                    </p>
                    <Link
                        to="/shop"
                        className="inline-block px-8 py-3 bg-[#1a1a1a] text-white text-[13px] tracking-[2px] uppercase hover:bg-[#333] transition-colors"
                    >
                        Continue Shopping
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="w-full py-8 md:py-16">
            {/* Page Title */}
            <div className="text-center mb-8 md:mb-12 px-4">
                <h1 className="text-[28px] md:text-[36px] font-light text-[#1a1a1a] tracking-[0.5px]">
                    My Wishlist
                </h1>
                <p className="text-[14px] text-[#666] mt-2">
                    {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'}
                </p>
            </div>

            {/* Products Grid */}
            <div className="px-4 md:px-12 lg:px-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {wishlistItems.map((product) => (
                        <div key={product.id} className="group">
                            {/* Product Card */}
                            <div className="relative">
                                <div
                                    onClick={() => handleProductClick(product.id)}
                                    className="relative bg-[#e8e4df] aspect-square overflow-hidden cursor-pointer"
                                >
                                    {/* Product Image */}
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                                    />

                                    {/* Add to Cart Overlay */}
                                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                addToCart(product);
                                            }}
                                            className="bg-white/90 backdrop-blur-sm text-[#1a1a1a] px-4 py-2 text-[10px] tracking-[2px] uppercase hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>

                                    {/* Remove Button */}
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            removeFromWishlist(product.id);
                                        }}
                                        className="absolute top-3 right-3 md:top-4 md:right-4 w-7 h-7 md:w-8 md:h-8 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full hover:bg-red-500 hover:text-white transition-all group/remove"
                                        aria-label="Remove from wishlist"
                                    >
                                        <svg
                                            className="w-4 h-4 md:w-5 md:h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>

                                {/* Product Info */}
                                <div
                                    onClick={() => handleProductClick(product.id)}
                                    className="mt-3 md:mt-4 cursor-pointer"
                                >
                                    <h3 className="text-[13px] md:text-[14px] font-normal text-[#5a5449] leading-tight line-clamp-2 min-h-[32px] md:min-h-[40px]">
                                        {product.name}
                                    </h3>
                                    <p className="text-[12px] md:text-[13px] text-[#5a5449] mt-1 font-normal">
                                        {product.price}
                                    </p>

                                    {/* Color Options */}
                                    {product.colors && product.colors.length > 0 && (
                                        <div className="flex gap-2 mt-2">
                                            {product.colors.map((color, index) => (
                                                <button
                                                    key={index}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                    }}
                                                    className="w-4 h-4 md:w-5 md:h-5 rounded-full border border-[#d0d0d0] hover:ring-2 hover:ring-offset-1 hover:ring-[#5a5449] transition-all"
                                                    style={{ backgroundColor: color }}
                                                    aria-label={`Select color ${index + 1}`}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Continue Shopping Button */}
            <div className="flex justify-center mt-8 md:mt-12 px-4">
                <Link
                    to="/shop"
                    className="px-8 py-3 md:py-3.5 border border-[#1a1a1a] rounded-full text-[13px] md:text-[14px] font-normal text-[#1a1a1a] bg-transparent hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
                >
                    Continue Shopping
                </Link>
            </div>
        </section>
    );
};

export default Whishlist;
