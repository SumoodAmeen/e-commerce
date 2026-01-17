// Shared product data for Shop, Season, and Product Detail pages
import product1 from '../assets/shop/product1.jpeg';
import product2 from '../assets/shop/product2.jpeg';
import product3 from '../assets/shop/product3.jpeg';
import product4 from '../assets/shop/product4.jpeg';
import product5 from '../assets/shop/product5.jpeg';
import product6 from '../assets/shop/product6.jpeg';

import seasonProduct1 from '../assets/season/product1.jpeg';
import seasonProduct2 from '../assets/season/product2.jpeg';
import seasonProduct3 from '../assets/season/product3.jpeg';
import seasonProduct4 from '../assets/season/product4.jpeg';

// Shop products
export const shopProducts = [
    {
        id: 'shop-1',
        name: 'Coffee Indigo Denim Long-Sleeved Shirt',
        sku: 'Z/PAN/L60/HH9/6/S',
        price: '₹2,43,000.00',
        priceValue: 243000,
        image: product1,
        images: [product1],
        colors: [],
        sizes: ['S', 'M', 'L', 'XL'],
        description: `A go-to men's shirt, handcrafted in 100% pure 60s-count linen using Belgian-grown flax, this piece is tailored for comfortable everyday wear. Soft, breathable, and lightweight, it's a statement shirt with a classic collar and full sleeves.

Amplified with intricate hand-embroidered detailing and our signature threadwork, the garment is handmade by our skilled artisans in ecru shade. From formal daywear to a casual brunch, this timeless, durable shirt can be worn for extended hours in comfort and ease.

Belgian-grown Flax is known for producing high-quality linen, offering a crisp look to garments.

Ecru is the colour of unbleached pure cotton.
- 28 inches / 71.12 cms is the length of the garment.`,
        artisanInfo: 'Meticulously Crafted By 7 Artisans In 16.75 Hours',
    },
    {
        id: 'shop-2',
        name: 'Coffee Indigo Denim Bootcut Pants',
        sku: 'Z/PAN/L60/HH9/6/M',
        price: '₹1,65,000.00',
        priceValue: 165000,
        image: product2,
        images: [product2],
        colors: [],
        sizes: ['S', 'M', 'L', 'XL'],
        description: `Handcrafted bootcut pants made from premium denim fabric. Features a comfortable fit with classic styling perfect for any occasion.

Made with attention to detail by skilled artisans using traditional techniques passed down through generations.`,
        artisanInfo: 'Meticulously Crafted By 5 Artisans In 12 Hours',
    },
    {
        id: 'shop-3',
        name: 'Nil GM x The Darjeeling Limited',
        sku: 'Z/PAN/L60/HH9/6/L',
        price: '₹4,25,000.00',
        priceValue: 425000,
        image: product3,
        images: [product3],
        colors: [],
        sizes: ['S', 'M', 'L', 'XL'],
        description: `A limited edition collaboration piece featuring exclusive design elements. Premium quality materials combined with exceptional craftsmanship.

This unique piece represents the perfect blend of traditional artistry and contemporary fashion.`,
        artisanInfo: 'Meticulously Crafted By 10 Artisans In 24 Hours',
    },
    {
        id: 'shop-4',
        name: 'LV Tilted Sneaker',
        sku: 'Z/SNK/L60/HH9/6/S',
        price: '₹1,14,000.00',
        priceValue: 114000,
        image: product4,
        images: [product4],
        colors: ['#3d3529', '#1a1a1a'],
        sizes: ['38', '39', '40', '41', '42', '43', '44'],
        description: `Premium sneakers crafted with high-quality leather and attention to detail. Comfortable for all-day wear with distinctive styling.

Features cushioned insole and durable outsole for lasting comfort.`,
        artisanInfo: 'Meticulously Crafted By 4 Artisans In 8 Hours',
    },
    {
        id: 'shop-5',
        name: 'Premium Leather Jacket',
        sku: 'Z/JKT/L60/HH9/6/M',
        price: '₹3,85,000.00',
        priceValue: 385000,
        image: product5,
        images: [product5],
        colors: [],
        sizes: ['S', 'M', 'L', 'XL'],
        description: `A timeless leather jacket crafted from the finest full-grain leather. Features classic styling with modern comfort.

Hand-stitched by master craftsmen with decades of experience.`,
        artisanInfo: 'Meticulously Crafted By 8 Artisans In 20 Hours',
    },
    {
        id: 'shop-6',
        name: 'Classic Oxford Shoes',
        sku: 'Z/SHO/L60/HH9/6/S',
        price: '₹1,95,000.00',
        priceValue: 195000,
        image: product6,
        images: [product6],
        colors: ['#5c4033', '#1a1a1a'],
        sizes: ['38', '39', '40', '41', '42', '43', '44'],
        description: `Elegant Oxford shoes made from premium leather. Perfect for formal occasions with exceptional comfort.

Features Goodyear welt construction for durability and resoling capability.`,
        artisanInfo: 'Meticulously Crafted By 6 Artisans In 14 Hours',
    },
];

// Season collection products
export const seasonProducts = [
    {
        id: 'season-1',
        name: 'Brown Abaya',
        sku: 'Z/ABY/L60/HH9/6/S',
        price: '₹1,32,000.00',
        priceValue: 132000,
        image: seasonProduct1,
        images: [seasonProduct1],
        sizes: ['S', 'M', 'L', 'XL'],
        description: `Elegant brown abaya crafted with premium fabric. Features flowing silhouette with intricate detailing.

Perfect for both everyday wear and special occasions.`,
        artisanInfo: 'Meticulously Crafted By 5 Artisans In 10 Hours',
    },
    {
        id: 'season-2',
        name: 'Full Length Abaya',
        sku: 'Z/ABY/L60/HH9/6/M',
        price: '₹2,20,000.00',
        priceValue: 220000,
        image: seasonProduct2,
        images: [seasonProduct2],
        sizes: ['S', 'M', 'L', 'XL'],
        description: `Stunning full-length abaya with elegant design. Made from luxurious fabric with beautiful embroidery.

A statement piece for any wardrobe.`,
        artisanInfo: 'Meticulously Crafted By 7 Artisans In 15 Hours',
    },
    {
        id: 'season-3',
        name: 'Beige Abaya',
        sku: 'Z/ABY/L60/HH9/6/L',
        price: '₹1,14,000.00',
        priceValue: 114000,
        image: seasonProduct3,
        images: [seasonProduct3],
        sizes: ['S', 'M', 'L', 'XL'],
        description: `Classic beige abaya with timeless elegance. Soft, flowing fabric with subtle detailing.

Versatile piece suitable for various occasions.`,
        artisanInfo: 'Meticulously Crafted By 4 Artisans In 8 Hours',
    },
    {
        id: 'season-4',
        name: 'Cream Abaya',
        sku: 'Z/ABY/L60/HH9/6/XL',
        price: '₹64,000.00',
        priceValue: 64000,
        image: seasonProduct4,
        images: [seasonProduct4],
        sizes: ['S', 'M', 'L', 'XL'],
        description: `Beautiful cream abaya with delicate design. Lightweight and comfortable for all-day wear.

Perfect addition to any collection.`,
        artisanInfo: 'Meticulously Crafted By 3 Artisans In 6 Hours',
    },
];

// Combined products for easy lookup
export const allProducts = [...shopProducts, ...seasonProducts];

// Helper function to get product by ID
export const getProductById = (id) => {
    return allProducts.find(product => product.id === id);
};
