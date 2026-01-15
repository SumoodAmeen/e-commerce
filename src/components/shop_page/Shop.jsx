import React from 'react';
import wishlistIcon from '../../assets/season/wishlist.png';

const Shop = () => {
    // Product data for the shop
    const products = [
        {
            id: 1,
            name: 'Coffee Indigo Denim Long-Sleeved Shirt',
            price: '₹2,43,000.00',
            image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop',
            colors: [],
        },
        {
            id: 2,
            name: 'Coffee Indigo Denim Bootcut Pants',
            price: '₹1,65,000.00',
            image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop',
            colors: [],
        },
        {
            id: 3,
            name: 'Nil GM x The Darjeeling Limited',
            price: '₹4,25,000.00',
            image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop',
            colors: [],
        },
        {
            id: 4,
            name: 'LV Tilted Sneaker',
            price: '₹1,14,000.00',
            image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
            colors: ['#3d3529', '#1a1a1a'],
        },
        {
            id: 5,
            name: 'Premium Leather Jacket',
            price: '₹3,85,000.00',
            image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop',
            colors: [],
        },
        {
            id: 6,
            name: 'Classic Oxford Shoes',
            price: '₹1,95,000.00',
            image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=400&h=400&fit=crop',
            colors: ['#5c4033', '#1a1a1a'],
        },
        {
            id: 7,
            name: 'Designer Silk Scarf',
            price: '₹89,000.00',
            image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop',
            colors: [],
        },
        {
            id: 8,
            name: 'Vintage Leather Belt',
            price: '₹45,000.00',
            image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
            colors: ['#8b4513', '#2c1810'],
        },
    ];

    return (
        <section className="w-full py-8 md:py-16">
            {/* Products Grid */}
            <div className="px-4 md:px-12 lg:px-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="group cursor-pointer">
                            {/* Product Card */}
                            <div className="relative bg-[#e8e4df] aspect-square overflow-hidden">
                                {/* Product Image */}
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                />

                                {/* Wishlist Icon */}
                                <button
                                    className="absolute top-3 right-3 md:top-4 md:right-4 w-6 h-6 md:w-7 md:h-7 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
                                    aria-label="Add to wishlist"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="#5a5449"
                                        className="w-5 h-5 md:w-6 md:h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                        />
                                    </svg>
                                </button>
                            </div>

                            {/* Product Info */}
                            <div className="mt-3 md:mt-4">
                                <h3 className="text-[13px] md:text-[14px] font-normal text-[#5a5449] leading-tight line-clamp-2 min-h-[32px] md:min-h-[40px]">
                                    {product.name}
                                </h3>
                                <p className="text-[12px] md:text-[13px] text-[#5a5449] mt-1 font-normal">
                                    {product.price}
                                </p>

                                {/* Color Options */}
                                {product.colors.length > 0 && (
                                    <div className="flex gap-2 mt-2">
                                        {product.colors.map((color, index) => (
                                            <button
                                                key={index}
                                                className="w-4 h-4 md:w-5 md:h-5 rounded-full border border-[#d0d0d0] hover:ring-2 hover:ring-offset-1 hover:ring-[#5a5449] transition-all"
                                                style={{ backgroundColor: color }}
                                                aria-label={`Select color ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Shop;
