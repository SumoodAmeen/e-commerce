import Navbar from '../home_page/Navbar';
import ProductDetail from '../product_detail/ProductDetail';

const ProductDetailPage = () => {
    return (
        <>
            <Navbar />
            <main className="pt-[60px] md:pt-[100px]">
                <ProductDetail />
            </main>
        </>
    );
};

export default ProductDetailPage;
