import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import ShopPage from './components/pages/ShopPage'
import ProductDetailPage from './components/pages/ProductDetailPage'
import CollectionPage from './components/pages/CollectionPage'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/collection" element={<CollectionPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

