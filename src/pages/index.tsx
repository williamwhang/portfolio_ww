import Head from 'next/head';
import { useEffect } from 'react';
import Aos from 'aos';
import { HomeContainer } from '../styles/HomeStyles';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import About from '../components/About';
import Project from '../components/Project';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <HomeContainer>
      <Head>
        <title>HOME | WILL</title>
        <meta
          name="description"
          content="I am a Full Stack developer and here I present some projects developed by me!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="I am a Full Stack developer and here I present some projects developed by me!"
        />
      </Head>
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
  );
}
