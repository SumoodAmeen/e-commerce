import React from 'react'
import Navbar from '../home_page/Navbar'
import Hero from '../home_page/Hero'
import Collection from '../home_page/Collection'
import SeasonVideo from '../home_page/Video'
import Season from '../home_page/Season'
import Footer from '../home_page/Footer'

function HomePage() {
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

export default HomePage