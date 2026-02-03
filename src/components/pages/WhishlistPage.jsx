import Navbar from '../home_page/Navbar';
import Whishlist from './Whishlist';
import Footer from '../home_page/Footer';

const WhishlistPage = () => {
    return (
        <>
            <Navbar />
            <main className="pt-[60px] md:pt-[100px]">
                <Whishlist />
            </main>
            <Footer />
        </>
    );
};

export default WhishlistPage;
