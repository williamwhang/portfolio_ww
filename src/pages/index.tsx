import { HomeContainer } from '../styles/HomeStyles';

import Header from "../components/Header";
import HomeHero from '../components/HomeHero';
import About from '../components/About';
import Project from '../components/Project';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  },[])

  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
        <About />
        <Footer />

        <Project />
        <Footer />

        <Contact />
      </main>

      <Footer />
    </HomeContainer>
  )
}
