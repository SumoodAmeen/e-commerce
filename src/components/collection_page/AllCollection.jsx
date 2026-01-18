import { Link } from 'react-router-dom';
import collection1 from '../../assets/collection/collection1.jpeg';
import collection2 from '../../assets/collection/collection2.jpeg';
import collection3 from '../../assets/collection/collection3.jpeg';
import collection4 from '../../assets/collection/collection4.jpeg';
import product1 from '../../assets/collection/product1.jpeg';
import product2 from '../../assets/collection/product2.jpeg';
import product3 from '../../assets/collection/product3.jpeg';
import product4 from '../../assets/collection/product4.jpeg';
import product5 from '../../assets/collection/product5.jpeg';
import product6 from '../../assets/collection/product6.jpeg';

const AllCollection = () => {
    const collectionData = [
        {
            id: 1,
            image: collection1,
            title: "Plain Abaya",
            description: "Elegant simplicity for everyday grace"
        },
        {
            id: 2,
            image: collection2,
            title: "Women's Hijab",
            description: "Premium hijabs for every occasion"
        },
        {
            id: 3,
            image: collection3,
            title: "Modern Abaya",
            description: "Contemporary designs for the modern woman"
        },
        {
            id: 4,
            image: collection4,
            title: "Modest Abaya",
            description: "Timeless modesty with refined elegance"
        }
    ];

    const productData = [
        {
            id: 1,
            image: product1,
            title: "Classic Black Abaya",
            price: "₹2,499"
        },
        {
            id: 2,
            image: product2,
            title: "Embroidered Abaya",
            price: "₹3,299"
        },
        {
            id: 3,
            image: product3,
            title: "Silk Hijab",
            price: "₹899"
        },
        {
            id: 4,
            image: product4,
            title: "Premium Cotton Hijab",
            price: "₹699"
        },
        {
            id: 5,
            image: product5,
            title: "Designer Abaya",
            price: "₹4,599"
        },
        {
            id: 6,
            image: product6,
            title: "Casual Abaya",
            price: "₹2,199"
        }
    ];

    return (
        <section className="w-full pt-24 md:pt-32 pb-12 md:pb-20">
            {/* Page Header */}
            <div className="text-center mb-10 md:mb-16 px-4">
                <h1 className="text-[28px] md:text-[42px] font-light text-[#1a1a1a] tracking-[1px] mb-3">
                    Our Collections
                </h1>
                <p className="text-[14px] md:text-[16px] text-[#666] font-light max-w-xl mx-auto">
                    Discover our curated collection of modest fashion, designed for elegance and comfort
                </p>
            </div>

            {/* Featured Collections */}
            <div className="px-4 md:px-12 lg:px-20 mb-12 md:mb-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {collectionData.map((item) => (
                        <Link to="/shop" key={item.id} className="group cursor-pointer block">
                            {/* Collection Card */}
                            <div className="relative aspect-square overflow-hidden">
                                {/* Collection Image */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Collection Info */}
                            <div className="mt-4 md:mt-5">
                                <h3 className="text-[14px] md:text-[16px] font-medium text-[#1a1a1a] text-center">
                                    {item.title}
                                </h3>
                                <p className="text-[12px] md:text-[13px] text-[#666] text-center mt-1 font-light">
                                    {item.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-[#e5e5e5] mb-12 md:mb-20" />

            {/* All Products */}
            <div className="px-4 md:px-12 lg:px-20">
                <h2 className="text-[18px] md:text-[24px] text-center font-light text-[#1a1a1a] tracking-[0.5px] mb-6 md:mb-8">
                    Shop All Products
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {productData.map((item) => (
                        <Link to={`/product/${item.id}`} key={item.id} className="group cursor-pointer block">
                            {/* Product Card */}
                            <div className="relative aspect-square overflow-hidden bg-[#e8e4df]">
                                {/* Product Image */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Product Info */}
                            <div className="mt-3 md:mt-4">
                                <h3 className="text-[13px] md:text-[14px] font-normal text-[#1a1a1a] text-center">
                                    {item.title}
                                </h3>
                                <p className="text-[13px] md:text-[14px] text-[#1a1a1a] text-center mt-1 font-medium">
                                    {item.price}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* View More Button */}
            <div className="flex justify-center mt-10 md:mt-16 px-4">
                <Link
                    to="/shop"
                    className="px-10 py-3.5 border border-[#1a1a1a] rounded-full text-[13px] md:text-[14px] font-normal text-[#1a1a1a] bg-transparent hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
                >
                    View All Products
                </Link>
            </div>
        </section>
    );
};

export default AllCollection;
