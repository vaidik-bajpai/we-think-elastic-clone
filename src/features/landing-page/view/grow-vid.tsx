import { useEffect } from "react"
import gsap from "gsap"

const GrowVid = () => {
    useEffect(() => {
        gsap.from("#grow-vid", {
            scale: 0.7,
            scrollTrigger: {
                trigger: "#grow-vid-container",
                scroller: "body",
                markers: true,
                scrub: 1,
                start: "top bottom",
                end: "bottom bottom",
            }
        })
    }, [])
    return (
        <div id="grow-vid-container" className="min-h-screen h-full w-full">
            <video
                id="grow-vid"
                src="/grow-vid.mp4"
                autoPlay
                muted
                loop
                playsInline
            />
        </div>
    )
}

export default GrowVid