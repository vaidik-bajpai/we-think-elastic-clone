import './App.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from './features/landing-page/view/hero';
import AnimatedLoader from './features/landing-page/components/animated-loader';
import { useEffect } from 'react';
import GrowVid from './features/landing-page/view/grow-vid';
import HeroStatement from './features/landing-page/view/hero-statement';
import OurProjects from './features/landing-page/view/our-projects';
import BorderAnimation from './features/landing-page/components/border-animation';

function App() {
  gsap.registerPlugin(ScrollTrigger);
  
  useEffect(() => {
    gsap.to('#loader-container', {
      delay: 1.65,
      yPercent: -100,
      duration: 1,
      ease: "power.inOut",
    })
  }, [])
  return (
    <div className='bg-brandBlack min-h-screen w-full'>
      <div id="loader-container" className="fixed inset-0 grid place-content-center bg-brandYellow z-50">
        <AnimatedLoader />
      </div>
      <Hero />
      <GrowVid />
      <HeroStatement />
      <OurProjects />
      <div id="discover-projects" className='grid place-content-center py-24'>
        <BorderAnimation />
      </div>
    </div>
  )
}

export default App
