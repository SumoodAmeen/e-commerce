import './App.css'
import Navbar from './components/home_page/Navbar'
import Hero from './components/home_page/Hero'
import Collection from './components/home_page/Collection'
import SeasonVideo from './components/home_page/Video'
import Season from './components/home_page/Season'
import Footer from './components/home_page/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Collection />
      <SeasonVideo />
      <Season />
      <Footer />
    </>
  )
}

export default App
