import Image from "next/image";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Service />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}
