import { Link } from 'react-router-dom';
import { seasonProducts } from '../../data/productData';
import wishlistIcon from '../../assets/season/wishlist.png';

const Season = () => {
    return (
        <section className="w-full py-8 md:py-16">
            {/* Section Header */}
            <div className="text-center mb-6 md:mb-10">
                <span className="text-[11px] md:text-[12px] tracking-[2px] text-[#666] uppercase">
                    WOMEN
                </span>
                <h2 className="text-[22px] md:text-[32px] font-light text-[#1a1a1a] mt-2 tracking-[0.5px]">
                    WINTER COLLECTION
                </h2>
            </div>

            {/* Products Grid */}
            <div className="px-4 md:px-12 lg:px-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {seasonProducts.map((product) => (
                        <div key={product.id} className="group">
                            {/* Product Card */}
                            <Link to={`/product/${product.id}`} className="block">
                                <div className="relative bg-[#ebebeb] aspect-square overflow-hidden cursor-pointer">
                                    {/* Product Image */}
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
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
                                    <h3 className="text-[13px] md:text-[14px] font-normal text-[#1a1a1a] leading-tight line-clamp-2">
                                        {product.name}
                                    </h3>
                                    <p className="text-[12px] md:text-[13px] text-[#8b7355] mt-1 font-normal">
                                        {product.price}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center mt-8 md:mt-12 px-4">
                <Link
                    to="/shop"
                    className="px-8 py-3 md:py-3.5 border border-[#1a1a1a] rounded-full text-[13px] md:text-[14px] font-normal text-[#1a1a1a] bg-transparent hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
                >
                    Shop
                </Link>
            </div>
        </section>
    );
};

export default Season;

