import { HomeContainer } from '../styles/HomeStyles';

import Header from "../components/Header";
import HomeHero from '../components/HomeHero';

import Exp from '../components/Exp';
import Project from '../components/Project';

export default function Home() {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
        <Exp />
        <Project />
      </main>
    </HomeContainer>
  )
}
