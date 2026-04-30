import gsap from "gsap"
import { useEffect } from "react"

const Expertise = () => {
    useEffect(() => {
        gsap.to("#expertise", {
            x: "-135vw",
            scrollTrigger: {
                trigger: "#expertise-container",
                scroller: "body",
                scrub: 2,
                pin: true,
                start: "bottom bottom",
                end: "bottom+=3000 top"
            }
        })

        gsap.to(".floating-image", {
            x: "-140vw", 
            scrollTrigger: {
                trigger: "#expertise-container",
                scrub: 2,
                start: "bottom bottom",
                end: "bottom+=3000 top"
            }
        })
    }, [])
    return (
        <div id="expertise-container" className="relative min-h-screen bg-brandBlue leading-none overflow-hidden text-dark">
            <div id="expertise" className="uppercase text-[80vh] pl-16 pt-18 font-semibold tracking-tighter">
                Expertises
            </div>
            <div className="floating-image absolute left-[45%] bottom-[11%] translate-y-1/2 inline-block rotate-[7deg]">
                <img src="/556ce542d7fdbd78d032e.svg" alt="" className="w-80 h-auto" />
            </div>
            {/* <div className="floating-image-2 inline-block rotate-[7deg]">
                <img src="/6a714ad31db5d83bc967b.svg" alt="" className="w-80 h-auto" />
            </div> */}
        </div>
    )
}

export default Expertise