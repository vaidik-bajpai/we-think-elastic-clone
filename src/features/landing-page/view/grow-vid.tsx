import { useEffect } from "react"
import gsap from "gsap"

const GrowVid = () => {
    useEffect(() => {
        gsap.from("#grow-vid-container", {
            scale: 0.7,
            scrollTrigger: {
                trigger: "#grid-vid-container",
                scroller: "body",
                markers: true,
                scrub: 1,
            }
        })
    }, [])
    return (
        <div id="grow-vid-container" className="h-screen">
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