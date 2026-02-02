import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Cart from './components/common/Cart'
import HomePage from './components/pages/HomePage'
import ShopPage from './components/pages/ShopPage'
import ProductDetailPage from './components/pages/ProductDetailPage'
import CollectionPage from './components/pages/CollectionPage'
import GiftPage from './components/pages/GiftPage'
import LoginPage from './components/pages/LoginPage'

function App() {
  return (
    <CartProvider>
      <Router>
        <Cart />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/gifts" element={<GiftPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App

