import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { shopProducts } from '../../data/productData';
import wishlistIcon from '../../assets/shop/wishlist.png';

const Shop = () => {
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="w-full py-8 md:py-16">
            {/* Products Grid */}
            <div className="px-4 md:px-12 lg:px-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {shopProducts.map((product) => (
                        <div key={product.id} className="group">
                            {/* Product Card */}
                            <Link to={`/product/${product.id}`} className="block">
                                <div className="relative bg-[#e8e4df] aspect-square overflow-hidden cursor-pointer">
                                    {/* Product Image */}
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                                    />

                                    {/* Wishlist Icon */}
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                        }}
                                        className="absolute top-3 right-3 md:top-4 md:right-4 w-6 h-6 md:w-7 md:h-7 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
                                        aria-label="Add to wishlist"
                                    >
                                        <img
                                            src={wishlistIcon}
                                            alt="Wishlist"
                                            className="w-5 h-5 md:w-6 md:h-6"
                                        />
                                    </button>
                                </div>
                            </Link>

                            {/* Product Info */}
                            <Link to={`/product/${product.id}`} className="block">
                                <div className="mt-3 md:mt-4">
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
                                                        e.preventDefault();
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
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Shop;

