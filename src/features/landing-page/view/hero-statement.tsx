import { useEffect } from "react"
import gsap from "gsap"

const HeroStatement = () => {
    useEffect(() => {
        gsap.from(".heroWord", {
            yPercent: 100,
            scrollTrigger: {
                trigger: "#hero-statement-container",
                start: "center bottom",
                markers: true
            },
            duration: 0.5,
            stagger: 0.05,
            ease: "power3.out",
        })
    }, [])
    return (
        <div className="min-h-screen w-full grid place-content-center font-helvetica">
            <div id="hero-statement-container" className="relative text-beige text-left leading-tight">

                <div className="text-[10vw] font-medium leading-none overflow-hidden">
                    <span className="italic heroWord inline-block font-[50] font-ivy">nous</span> <span className=" uppercase heroWord inline-block">aidons</span>
                </div>

                <div className="text-[10vw] font-medium uppercase leading-none overflow-hidden">
                    <span className="heroWord inline-block">les</span> <span className="heroWord inline-block">marques</span>
                </div>

                <div className="text-right leading-none text-[10vw] font-medium overflow-hidden">
                    <span className="text-[9vw] italic heroWord inline-block font-ivy">à </span> <span className="uppercase heroWord inline-block">grandir</span>
                </div>

                <div className="text-[10vw] font-medium uppercase leading-none overflow-hidden">
                    <span className="heroWord inline-block">plus</span> <span className="heroWord inline-block">vite</span>
                </div>

                <div className="absolute bottom-5 -right-12 text-lg font-medium uppercase leading-none heroWord space-y-1">

                    <div>grâce à un storytelling</div>

                    <div className="flex items-center gap-2">
                        <span>impactant</span>
                        <svg className="w-4 h-4 text-beige shrink-0">
                        <use href="/sprite.svg#sprite-bolt" />
                        </svg>
                        <span>une identité</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span>visuelle forte</span>
                        <svg className="w-4 h-4 text-beige shrink-0">
                        <use href="/sprite.svg#sprite-circleline" />
                        </svg>
                        <span>des interfaces</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span>digitales ultra fluides</span>
                        <svg className="w-4 h-4 text-beige shrink-0">
                        <use href="/sprite.svg#sprite-halfmoon" />
                        </svg>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default HeroStatement