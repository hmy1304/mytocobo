import "./styles/main.scss"
import Hero from "./sections/Hero"
import Products from "./sections/Products"
import Category from "./sections/Category"
import Trend from "./sections/Trend"
import Instargram from "./sections/Instargram"
import TopBanner from "./components/TopBanner"
import Header from "./components/Header"
import Footer from "./components/Footer"
import FixedTopBtn from "./components/FixedTopBtn"
import { useState, useEffect } from "react"

function App() {
  const [topBanner, setTopBanner] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)


  const upTopBanner= () => {
    setTopBanner("up")
  }

  useEffect(()=> {
    const handleScroll = () => {
      const scrollTop=window.scrollY
      setIsScrolled(scrollTop>0)
    }

    window.addEventListener('scroll', handleScroll)
  },[])

  return (
    <div className={`app-container ${topBanner} ${isScrolled? 'scrolled' : ''}`}>
      <TopBanner onClick={upTopBanner}/>
      <FixedTopBtn />
      <Header />
      <main>
        <section id="hero" className="section">
          <Hero />
        </section>
        <section id="products" className="section">
          <Products />
        </section>
        <section id="category" className="section">
          <Category />
        </section>
        <section id="trend" className="section">
          <Trend />
        </section>
        <section id="instargram" className="section">
          <Instargram />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
