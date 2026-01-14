import collection1 from '../assets/collection/collection1.jpeg';
import collection2 from '../assets/collection/collection2.jpeg';
import collection3 from '../assets/collection/collection3.jpeg';
import collection4 from '../assets/collection/collection4.jpeg';

const Collection = () => {
    const collectionData = [
        {
            id: 1,
            image: collection1,
            title: "Plain Abaya"
        },
        {
            id: 2,
            image: collection2,
            title: "Women's Hijab"
        },
        {
            id: 3,
            image: collection3,
            title: "Modern Abaya"
        },
        {
            id: 4,
            image: collection4,
            title: "Modest Abaya"
        }
    ];

    return (
        <section className="w-full py-8 md:py-16">
            {/* Section Header */}
            <div className="text-center mb-6 md:mb-10">
                <h2 className="text-[22px] md:text-[32px] font-light text-[#1a1a1a] tracking-[0.5px]">
                    Explore a Selection of the Maison's<br />Creations
                </h2>
            </div>

            {/* Collection Grid */}
            <div className="px-4 md:px-12 lg:px-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {collectionData.map((item) => (
                        <div key={item.id} className="group cursor-pointer">
                            {/* Collection Card */}
                            <div className="relative aspect-square overflow-hidden">
                                {/* Collection Image */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            {/* Collection Title */}
                            <div className="mt-3 md:mt-4">
                                <p className="text-[13px] md:text-[14px] font-normal text-[#1a1a1a] text-center leading-tight">
                                    {item.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center mt-8 md:mt-12 px-4">
                <button className="px-8 py-3 md:py-3.5 border border-[#1a1a1a] rounded-full text-[13px] md:text-[14px] font-normal text-[#1a1a1a] bg-transparent hover:bg-[#1a1a1a] hover:text-white transition-all duration-300">
                    Explore Collection
                </button>
            </div>
        </section>
    );
};

export default Collection;
