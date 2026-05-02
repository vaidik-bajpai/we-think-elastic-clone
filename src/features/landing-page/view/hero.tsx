import { useEffect } from "react"
import Header from "../components/header"
import gsap from "gsap"

const Hero = () => {
    useEffect(() => {
        gsap.from(".letter", { 
            yPercent: 100,
            duration: 0.5,
            stagger: 0.2,
            delay: 1.65,
            ease: "power.inOut",
        })

        gsap.from("#hero-desc", {
            opacity: 0,
            yPercent: 100,
            delay: 1.85,
            duration: 1.5,
        })
    }, [])
    return (
        <div className="text-brandYellow">
            <Header />
            <div className=" font-[1000] overflow-hidden text-[50vw] font-degular leading-none ml-12 -mt-32">
                <span className="letter inline-block">h</span>
                <span className="letter inline-block">e</span>
                <span className="letter inline-block">l</span>
                <span className="letter inline-block">l</span>
                <span className="letter inline-block">o</span>
            </div>
            <div id="hero-desc" className="mb-12 w-full text-center text-4xl uppercase font-helvetica">
                <div>Nous sommes l'équipe</div>
                <div>we think elastic</div>
            </div>
        </div>
    )
}

export default Hero