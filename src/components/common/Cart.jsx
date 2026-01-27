import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';

const Cart = () => {
    const { isCartOpen, toggleCart, cartItems, removeFromCart, updateQuantity, cartTotal, formatPrice } = useCart();
    const [giftWrapping, setGiftWrapping] = useState(false);

    // Using a placeholder that looks more like a gift box
    const giftWrappingImage = "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1000&auto=format&fit=crop";

    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/20 z-[2000] transition-all duration-300 ${isCartOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                onClick={toggleCart}
            />

            {/* Cart Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-full sm:w-[440px] bg-white z-[2001] transition-all duration-500 transform ${isCartOpen ? 'translate-x-0' : 'translate-x-full'
                    } flex flex-col shadow-[-10px_0_30px_rgba(0,0,0,0.05)]`}
            >
                {/* Header */}
                <div className="flex justify-between items-center px-8 py-6 border-b border-gray-100">
                    <h2 className="text-[15px] font-normal tracking-[2px] text-[#1a1a1a] uppercase">CART</h2>
                    <button
                        onClick={toggleCart}
                        className="p-1 hover:rotate-90 transition-all duration-300"
                        aria-label="Close cart"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto px-8 py-6 space-y-10 custom-scrollbar">
                    {cartItems.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full space-y-4">
                            <p className="text-[14px] text-gray-400 font-light tracking-widest uppercase">Your bag is empty</p>
                            <button 
                                onClick={toggleCart}
                                className="text-[12px] underline tracking-[2px] uppercase hover:text-black transition-colors"
                            >
                                Shop All
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-10">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex gap-6">
                                    {/* Product Image */}
                                    <div className="w-[100px] h-[130px] bg-[#f9f9f9] flex-shrink-0 overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Product Details */}
                                    <div className="flex-1 flex flex-col justify-between py-0.5">
                                        <div className="space-y-1">
                                            <h3 className="text-[12px] font-medium tracking-wider text-[#1a1a1a] uppercase leading-tight">
                                                {item.name}
                                            </h3>
                                            <p className="text-[12px] text-[#1a1a1a] font-normal tracking-wide">
                                                RS. {item.priceValue?.toLocaleString('en-IN')}.00
                                            </p>
                                            <p className="text-[11px] text-[#888] tracking-widest uppercase mt-2">
                                                {item.sizes?.[0] || 'S'}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-6 mt-4">
                                            <div className="flex items-center border border-gray-200 h-9">
                                                <button
                                                    onClick={() => updateQuantity(item.id, -1)}
                                                    className="w-8 h-full flex items-center justify-center text-sm font-light hover:bg-gray-50 transition-colors"
                                                >
                                                    −
                                                </button>
                                                <span className="w-6 text-center text-[12px] font-normal">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, 1)}
                                                    className="w-8 h-full flex items-center justify-center text-sm font-light hover:bg-gray-50 transition-colors"
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-[11px] uppercase tracking-[2px] underline decoration-gray-300 underline-offset-[6px] hover:decoration-black transition-all"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Gift Wrapping Section */}
                            <div className="pt-10 border-t border-gray-100">
                                <h4 className="text-[11px] font-medium tracking-[2px] uppercase text-[#1a1a1a] mb-6">
                                    MAKE IT MORE SPECIAL WITH
                                </h4>
                                <div className="flex gap-6 items-center">
                                    <div className="w-[80px] h-[80px] bg-[#2d4a61] flex-shrink-0 overflow-hidden flex items-center justify-center">
                                        {/* Symbolic gift box if image fails */}
                                        <div className="w-10 h-10 border border-white/30 flex items-center justify-center">
                                            <div className="w-full h-[1px] bg-white/30 absolute"></div>
                                            <div className="h-full w-[1px] bg-white/30 absolute"></div>
                                        </div>
                                        <img
                                            src={giftWrappingImage}
                                            alt="Gift Wrapping"
                                            className="w-full h-full object-cover opacity-60"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h5 className="text-[11px] font-medium tracking-wider uppercase">GIFT WRAPPING</h5>
                                        <p className="text-[11px] text-[#1a1a1a] mt-1 tracking-wide">RS. 300.00</p>
                                        <button 
                                            onClick={() => setGiftWrapping(!giftWrapping)}
                                            className="text-[11px] uppercase tracking-[2px] underline decoration-gray-300 underline-offset-[6px] hover:decoration-black transition-all mt-3 block"
                                        >
                                            {giftWrapping ? 'Added' : 'Add to cart'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                {cartItems.length > 0 && (
                    <div className="px-8 py-8 border-t border-gray-100 bg-white">
                        <div className="space-y-4 mb-8">
                            <button className="text-[13px] font-normal text-[#1a1a1a] tracking-wide hover:opacity-60 transition-opacity">
                                Add order note
                            </button>
                            <p className="text-[12px] text-[#888] font-light tracking-wide">
                                Taxes and shipping calculated at checkout
                            </p>
                        </div>
                        <button className="w-full bg-[#1a1a1a] text-white h-14 px-8 flex justify-between items-center group hover:bg-[#333] transition-all duration-300">
                            <span className="text-[11px] tracking-[3px] font-medium uppercase">CHECKOUT</span>
                            <div className="flex items-center gap-3">
                                <div className="w-[3px] h-[3px] bg-white rounded-full"></div>
                                <span className="text-[12px] tracking-[1px] font-normal">
                                    RS. {(cartTotal + (giftWrapping ? 300 : 0)).toLocaleString('en-IN')}.00
                                </span>
                            </div>
                        </button>
                    </div>
                )}
            </div>

            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 0px;
                }
                .custom-scrollbar {
                    scrollbar-width: none;
                }
            `}</style>
        </>
    );
};

export default Cart;
