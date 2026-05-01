import gsap from "gsap"
import { useEffect } from "react"

const LetsTalk = () => {
    useEffect(() => {
        gsap.from(".text-line", {
            yPercent: 100,
            stagger: 0.1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: "#text-container",
                start: "45 bottom",
                end: "bottom bottom",
                scrub: 2,
                markers: true,
            }
        })

        gsap.from("#gif-container", {
            opacity: 0,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: "#gif-container",
                start: "top bottom",
                end: "bottom bottom",
                scrub: 2,
                markers: true,
            }
        })
    }, [])
    return (
        <div className="bg-beige w-full text-dark py-32 ">
            <div id="text-container" className="flex flex-col items-center gap-12">
                <div className="text-wrapper uppercase text-7xl text-center font-[400]">
                    <div className="overflow-hidden">
                        <div className="text-line">Vous avez un beau</div>
                    </div>
                    <div className="overflow-hidden">
                        <div className="text-line">projet ? parlons-en</div>
                    </div>
                    <div className="overflow-hidden">
                        <div className="text-line">autour d'un Bon café</div>
                    </div>
                </div>
                <div id="gif-container" className="w-fit aspect-square overflow-hidden">
                    <img src="/cafe.gif" alt="" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    )
}   

export default LetsTalk