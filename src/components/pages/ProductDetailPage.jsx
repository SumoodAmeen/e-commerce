import Navbar from '../home_page/Navbar';
import ProductDetail from '../product_detail/ProductDetail';
import Footer from '../home_page/Footer';

const ProductDetailPage = () => {
    return (
        <>
            <Navbar />
            <main className="pt-[60px] md:pt-[100px]">
                <ProductDetail />
            </main>
            <Footer />
        </>
    );
};

export default ProductDetailPage;
