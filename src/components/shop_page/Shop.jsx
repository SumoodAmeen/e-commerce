import React, { useEffect } from 'react';
import product1 from '../../assets/shop/product1.jpeg';
import product2 from '../../assets/shop/product2.jpeg';
import product3 from '../../assets/shop/product3.jpeg';
import product4 from '../../assets/shop/product4.jpeg';
import product5 from '../../assets/shop/product5.jpeg';
import product6 from '../../assets/shop/product6.jpeg';
import wishlistIcon from '../../assets/shop/wishlist.png';

const Shop = () => {
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Product data for the shop
    const products = [
        {
            id: 1,
            name: 'Coffee Indigo Denim Long-Sleeved Shirt',
            price: '₹2,43,000.00',
            image: product1,
            colors: [],
        },
        {
            id: 2,
            name: 'Coffee Indigo Denim Bootcut Pants',
            price: '₹1,65,000.00',
            image: product2,
            colors: [],
        },
        {
            id: 3,
            name: 'Nil GM x The Darjeeling Limited',
            price: '₹4,25,000.00',
            image: product3,
            colors: [],
        },
        {
            id: 4,
            name: 'LV Tilted Sneaker',
            price: '₹1,14,000.00',
            image: product4,
            colors: ['#3d3529', '#1a1a1a'],
        },
        {
            id: 5,
            name: 'Premium Leather Jacket',
            price: '₹3,85,000.00',
            image: product5,
            colors: [],
        },
        {
            id: 6,
            name: 'Classic Oxford Shoes',
            price: '₹1,95,000.00',
            image: product6,
            colors: ['#5c4033', '#1a1a1a'],
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
                                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                                />

                                {/* Wishlist Icon */}
                                <button
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
