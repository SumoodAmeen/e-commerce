import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { WishlistProvider } from './context/WishlistContext'
import Cart from './components/common/Cart'
import FloatingWhatsApp from './components/common/FloatingWhatsApp'
import HomePage from './components/pages/HomePage'
import ShopPage from './components/pages/ShopPage'
import ProductDetailPage from './components/pages/ProductDetailPage'
import CollectionPage from './components/pages/CollectionPage'
import GiftPage from './components/pages/GiftPage'
import LoginPage from './components/pages/LoginPage'
import WhishlistPage from './components/pages/WhishlistPage'

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <Cart />
          <FloatingWhatsApp />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:productId" element={<ProductDetailPage />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route path="/gifts" element={<GiftPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/wishlist" element={<WhishlistPage />} />
          </Routes>
        </Router>
      </WishlistProvider>
    </CartProvider>
  )
}

export default App

