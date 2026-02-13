import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';

const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
    'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
    'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu',
    'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry',
];

const Checkout = () => {
    const { cartItems, removeFromCart, cartTotal, formatPrice } = useCart();

    const [showExtraAddress, setShowExtraAddress] = useState(false);
    const [billingForm, setBillingForm] = useState({
        address: '',
        streetAddress: '',
        building: '',
        townCity: '',
        pincode: '',
        state: '',
    });
    const [deliveryForm, setDeliveryForm] = useState({
        country: 'India',
        firstName: '',
        lastName: '',
        company: '',
        address: '',
        apartment: '',
        city: '',
        state: '',
        pinCode: '',
        phone: '',
    });

    const deliveryFee = 149;
    const discount = 300;
    const orderValue = cartTotal;
    const total = orderValue - discount + deliveryFee;

    const handleBillingChange = (e) => {
        setBillingForm({ ...billingForm, [e.target.name]: e.target.value });
    };

    const handleDeliveryChange = (e) => {
        setDeliveryForm({ ...deliveryForm, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen bg-white pt-24 md:pt-32 pb-16">
            <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                {/* Page Title */}
                <h1 className="text-[28px] md:text-[36px] font-bold tracking-tight text-[#1a1a1a] mb-8 md:mb-12">
                    CHECKOUT
                </h1>

                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                    {/* ==================== LEFT COLUMN ==================== */}
                    <div className="flex-1 min-w-0">
                        {/* My Information */}
                        <section className="mb-10">
                            <h2 className="text-[13px] font-bold uppercase tracking-[1.5px] text-[#1a1a1a] mb-2">
                                MY INFORMATION
                            </h2>
                            <p className="text-[13px] text-[#444] leading-relaxed">
                                Guest Customer
                            </p>
                            <button className="text-[12px] text-[#1a1a1a] underline underline-offset-4 uppercase tracking-[1px] mt-1 hover:text-[#555] transition-colors bg-transparent border-none cursor-pointer">
                                EDIT
                            </button>
                        </section>

                        {/* Billing Address */}
                        <section className="mb-12">
                            <h2 className="text-[13px] font-bold uppercase tracking-[1.5px] text-[#1a1a1a] mb-6">
                                BILLING ADDRESS
                            </h2>

                            <div className="space-y-5">
                                {/* Address */}
                                <div>
                                    <label className="block text-[12px] text-[#555] mb-1.5 tracking-wide">
                                        Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={billingForm.address}
                                        onChange={handleBillingChange}
                                        className="w-full h-12 px-4 text-[13px] border border-[#ddd] bg-white focus:border-[#1a1a1a] focus:outline-none transition-colors"
                                    />
                                    <p className="text-[11px] text-[#999] mt-1 tracking-wide">Street address</p>
                                </div>

                                {/* Add Building / Floor / Apt */}
                                <button
                                    onClick={() => setShowExtraAddress(!showExtraAddress)}
                                    className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[1.5px] text-[#1a1a1a] bg-transparent border-none cursor-pointer hover:text-[#555] transition-colors"
                                >
                                    ADD BUILDING, FLOOR, APT, COMPANY, C/O, SUITE
                                    <svg className={`w-4 h-4 transition-transform duration-200 ${showExtraAddress ? 'rotate-45' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <line x1="12" y1="5" x2="12" y2="19" />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                    </svg>
                                </button>

                                {showExtraAddress && (
                                    <div className="animate-fadeIn">
                                        <input
                                            type="text"
                                            name="building"
                                            value={billingForm.building}
                                            onChange={handleBillingChange}
                                            placeholder="Building, floor, apt, company, c/o, suite"
                                            className="w-full h-12 px-4 text-[13px] border border-[#ddd] bg-white focus:border-[#1a1a1a] focus:outline-none transition-colors placeholder-[#aaa]"
                                        />
                                    </div>
                                )}

                                {/* Town / City */}
                                <div>
                                    <label className="block text-[12px] text-[#555] mb-1.5 tracking-wide">
                                        Town/City <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="townCity"
                                        value={billingForm.townCity}
                                        onChange={handleBillingChange}
                                        className="w-full h-12 px-4 text-[13px] border border-[#ddd] bg-white focus:border-[#1a1a1a] focus:outline-none transition-colors"
                                    />
                                </div>

                                {/* Pincode */}
                                <div>
                                    <label className="block text-[12px] text-[#555] mb-1.5 tracking-wide">
                                        Pincode <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="pincode"
                                        value={billingForm.pincode}
                                        onChange={handleBillingChange}
                                        className="w-full h-12 px-4 text-[13px] border border-[#ddd] bg-white focus:border-[#1a1a1a] focus:outline-none transition-colors"
                                    />
                                    <p className="text-[11px] text-[#0077b6] mt-1 tracking-wide">Enter your postcode. E.g. 400070</p>
                                </div>

                                {/* State */}
                                <div>
                                    <label className="block text-[12px] text-[#555] mb-1.5 tracking-wide">
                                        State <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <select
                                            name="state"
                                            value={billingForm.state}
                                            onChange={handleBillingChange}
                                            className="w-full h-12 px-4 text-[13px] border border-[#ddd] bg-white focus:border-[#1a1a1a] focus:outline-none transition-colors appearance-none cursor-pointer"
                                        >
                                            <option value="">Select State</option>
                                            {indianStates.map((state) => (
                                                <option key={state} value={state}>{state}</option>
                                            ))}
                                        </select>
                                        <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999] pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M6 9l6 6 6-6" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Save Button */}
                                <button className="w-full h-12 bg-[#1a1a1a] text-white text-[12px] font-medium uppercase tracking-[2px] hover:bg-[#333] transition-colors duration-300 cursor-pointer mt-2">
                                    SAVE
                                </button>
                            </div>
                        </section>

                        {/* Delivery Section */}
                        <section className="mb-12">
                            <h2 className="text-[18px] font-semibold text-[#1a1a1a] mb-6">
                                Delivery
                            </h2>

                            <div className="space-y-5">
                                {/* Country / Region */}
                                <div>
                                    <label className="block text-[11px] text-[#888] mb-1 tracking-wide">
                                        Country/Region
                                    </label>
                                    <div className="relative">
                                        <select
                                            name="country"
                                            value={deliveryForm.country}
                                            onChange={handleDeliveryChange}
                                            className="w-full h-14 px-4 pt-2 text-[14px] font-medium text-[#1a1a1a] border border-[#e0e0e0] rounded-lg bg-white focus:border-[#1a1a1a] focus:outline-none transition-colors appearance-none cursor-pointer"
                                        >
                                            <option value="India">India</option>
                                        </select>
                                        <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999] pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M6 9l6 6 6-6" />
                                        </svg>
                                    </div>
                                </div>

                                {/* First + Last Name */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={deliveryForm.firstName}
                                        onChange={handleDeliveryChange}
                                        placeholder="First name"
                                        className="w-full h-14 px-4 text-[14px] border border-[#e0e0e0] rounded-lg bg-white focus:border-[#1a1a1a] focus:outline-none transition-colors placeholder-[#999]"
                                    />
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={deliveryForm.lastName}
                                        onChange={handleDeliveryChange}
                                        placeholder="Last name"
                                        className="w-full h-14 px-4 text-[14px] border border-[#e0e0e0] rounded-lg bg-white focus:border-[#1a1a1a] focus:outline-none transition-colors placeholder-[#999]"
                                    />
                                </div>

                                {/* Company */}
                                <input
                                    type="text"
                                    name="company"
                                    value={deliveryForm.company}
                                    onChange={handleDeliveryChange}
                                    placeholder="Company (optional)"
                                    className="w-full h-14 px-4 text-[14px] border border-[#e0e0e0] rounded-lg bg-white focus:border-[#1a1a1a] focus:outline-none transition-colors placeholder-[#999]"
                                />

                                {/* Address */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="address"
                                        value={deliveryForm.address}
                                        onChange={handleDeliveryChange}
                                        placeholder="Address"
                                        className="w-full h-14 px-4 pr-12 text-[14px] border border-[#e0e0e0] rounded-lg bg-white focus:border-[#1a1a1a] focus:outline-none transition-colors placeholder-[#999]"
                                    />
                                    <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#999]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <circle cx="11" cy="11" r="8" />
                                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                    </svg>
                                </div>

                                {/* Apartment */}
                                <input
                                    type="text"
                                    name="apartment"
                                    value={deliveryForm.apartment}
                                    onChange={handleDeliveryChange}
                                    placeholder="Apartment, suite, etc. (optional)"
                                    className="w-full h-14 px-4 text-[14px] border border-[#e0e0e0] rounded-lg bg-white focus:border-[#1a1a1a] focus:outline-none transition-colors placeholder-[#999]"
                                />

                                {/* City */}
                                <input
                                    type="text"
                                    name="city"
                                    value={deliveryForm.city}
                                    onChange={handleDeliveryChange}
                                    placeholder="City"
                                    className="w-full h-14 px-4 text-[14px] border border-[#e0e0e0] rounded-lg bg-white focus:border-[#1a1a1a] focus:outline-none transition-colors placeholder-[#999]"
                                />

                                {/* State + PIN code */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="relative">
                                        <select
                                            name="state"
                                            value={deliveryForm.state}
                                            onChange={handleDeliveryChange}
                                            className="w-full h-14 px-4 text-[14px] border border-[#e0e0e0] rounded-lg bg-white focus:border-[#1a1a1a] focus:outline-none transition-colors appearance-none cursor-pointer text-[#999]"
                                            style={deliveryForm.state ? { color: '#1a1a1a' } : {}}
                                        >
                                            <option value="">State</option>
                                            {indianStates.map((state) => (
                                                <option key={state} value={state}>{state}</option>
                                            ))}
                                        </select>
                                        <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999] pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M6 9l6 6 6-6" />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        name="pinCode"
                                        value={deliveryForm.pinCode}
                                        onChange={handleDeliveryChange}
                                        placeholder="PIN code"
                                        className="w-full h-14 px-4 text-[14px] border border-[#e0e0e0] rounded-lg bg-white focus:border-[#1a1a1a] focus:outline-none transition-colors placeholder-[#999]"
                                    />
                                </div>

                                {/* Phone */}
                                <div className="relative">
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={deliveryForm.phone}
                                        onChange={handleDeliveryChange}
                                        placeholder="Phone"
                                        className="w-full h-14 px-4 pr-12 text-[14px] border border-[#e0e0e0] rounded-lg bg-white focus:border-[#1a1a1a] focus:outline-none transition-colors placeholder-[#999]"
                                    />
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border border-[#ccc] flex items-center justify-center cursor-help" title="In case we need to contact you about your order">
                                        <span className="text-[11px] text-[#999] font-medium">?</span>
                                    </div>
                                </div>

                                {/* Use a saved address */}
                                <button className="text-[13px] text-[#0077b6] underline underline-offset-4 bg-transparent border-none cursor-pointer hover:text-[#005f8f] transition-colors">
                                    Use a saved address
                                </button>
                            </div>
                        </section>
                    </div>

                    {/* ==================== RIGHT COLUMN — ORDER SUMMARY ==================== */}
                    <div className="w-full lg:w-[400px] flex-shrink-0">
                        <div className="lg:sticky lg:top-32">
                            {/* Parcel Section */}
                            {cartItems.length > 0 && (
                                <section className="mb-8 pb-8 border-b border-[#e8e8e8]">
                                    <h3 className="text-[14px] font-bold uppercase tracking-[1px] text-[#1a1a1a] mb-1">
                                        PARCEL
                                    </h3>
                                    <p className="text-[12px] text-[#888] mb-5">
                                        Shipped by H&M
                                    </p>

                                    <div className="space-y-4">
                                        {cartItems.map((item) => (
                                            <div key={item.id} className="flex items-start gap-4">
                                                <div className="w-[70px] h-[90px] bg-[#f5f5f5] overflow-hidden flex-shrink-0">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-[12px] text-[#1a1a1a] font-medium mb-1">{item.name}</p>
                                                    <p className="text-[12px] text-[#888]">Qty: {item.quantity}</p>
                                                    <button
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="mt-2 bg-transparent border-none cursor-pointer p-0 hover:opacity-70 transition-opacity"
                                                        aria-label={`Remove ${item.name}`}
                                                    >
                                                        <svg className="w-4 h-4 text-[#888]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                            <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14z" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <p className="text-[12px] text-[#0077b6] font-semibold mt-4 underline underline-offset-4 cursor-pointer">
                                        {cartItems.reduce((sum, item) => sum + item.quantity, 0)} ITEM{cartItems.reduce((sum, item) => sum + item.quantity, 0) !== 1 ? 'S' : ''}
                                    </p>
                                </section>
                            )}

                            {/* Payment Section */}
                            <section className="mb-8">
                                <h3 className="text-[13px] font-normal uppercase tracking-[2px] text-[#888] mb-6">
                                    PAYMENT
                                </h3>

                                {/* Discounts Row */}
                                <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#eee]">
                                    <span className="text-[13px] font-bold text-[#1a1a1a] uppercase tracking-[1px]">DISCOUNTS</span>
                                    <button className="text-[12px] font-semibold text-[#1a1a1a] underline underline-offset-4 uppercase tracking-[1px] bg-transparent border-none cursor-pointer hover:text-[#555] transition-colors">
                                        ADD
                                    </button>
                                </div>

                                {/* Price Breakdown */}
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[13px] text-[#555]">Order value</span>
                                        <span className="text-[13px] font-semibold text-[#1a1a1a]">
                                            Rs. {orderValue.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-[13px] text-[#555]">Discount</span>
                                        <span className="text-[13px] font-semibold text-[#e53935]">
                                            -Rs. {discount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-[13px] text-[#555]">Delivery Fee</span>
                                        <span className="text-[13px] font-semibold text-[#1a1a1a]">
                                            Rs. {deliveryFee.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                                        </span>
                                    </div>
                                </div>

                                {/* Total */}
                                <div className="flex justify-between items-center pt-4 border-t border-[#eee] mb-8">
                                    <span className="text-[14px] font-bold text-[#1a1a1a] uppercase tracking-[1px]">TOTAL</span>
                                    <span className="text-[16px] font-bold text-[#1a1a1a]">
                                        Rs. {total.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                                    </span>
                                </div>

                                {/* Privacy Notice */}
                                <p className="text-[11px] text-[#777] leading-relaxed mb-2">
                                    We will process your personal data in accordance with the H&Ms{' '}
                                    <a href="#" className="text-[#1a1a1a] underline underline-offset-2">Privacy Notice</a>.
                                </p>
                                <p className="text-[11px] text-[#777] leading-relaxed mb-6">
                                    By continuing, you agree to{' '}
                                    <a href="#" className="text-[#1a1a1a] underline underline-offset-2">H&M's General Terms and Conditions</a>.
                                </p>

                                {/* Complete Purchase Button */}
                                <button className="w-full h-14 bg-[#e8e8e8] text-[#1a1a1a] text-[12px] font-medium uppercase tracking-[3px] hover:bg-[#ddd] transition-colors duration-300 cursor-pointer mb-6">
                                    COMPLETE PURCHASE
                                </button>

                                {/* Security & Help Info */}
                                <div className="flex items-center gap-2 mb-3">
                                    <svg className="w-4 h-4 text-[#888]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                        <path d="M7 11V7a5 5 0 0110 0v4" />
                                    </svg>
                                    <p className="text-[11px] text-[#888]">
                                        All data is kept secure. Payment data is encrypted.
                                    </p>
                                </div>
                                <p className="text-[11px] text-[#888] mb-3">
                                    Need help? Please contact{' '}
                                    <a href="#" className="text-[#1a1a1a] underline underline-offset-2">Customer Support</a>.
                                </p>
                                <a href="#" className="text-[12px] text-[#1a1a1a] underline underline-offset-4 uppercase tracking-[1px] font-semibold">
                                    DELIVERY AND RETURN OPTIONS
                                </a>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
