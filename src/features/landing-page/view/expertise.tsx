import gsap from "gsap"
import { useEffect, useRef } from "react"

const Expertise = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const trackRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const container = containerRef.current
        const track = trackRef.current

        if (!container || !track) return

        const distance = track.scrollWidth - window.innerWidth

        const animate = () => {
            gsap.to(track, {
                x: -distance,
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    pin: true,
                    scrub: 2,
                    start: "top top",
                    end: `+=${distance}`,
                },
            })

            gsap.utils.toArray(".expertise-images").map((image) => {
                gsap.to(image, {
                    xPercent: -30,
                    ease: "none",
                    scrollTrigger: {
                        trigger: container,
                        scrub: 2,
                        start: "top top",
                        end: `+=${distance}`,
                    },
                })
            })
        }

        animate()
    }, [])

    return (
        <div
            ref={containerRef}
            id="expertise-container"
            className="relative h-screen bg-brandBlue overflow-hidden text-dark"
        >
            <div
                ref={trackRef}
                id="expertise-track"
                className="relative h-screen w-max flex items-center"
            >
                <h1 className="uppercase text-[80vh] px-16 font-semibold tracking-tighter leading-none">
                    Expertises
                </h1>

                <div className="expertise-images absolute left-[45vw] bottom-[11vh] rotate-[7deg]">
                    <img
                        src="/556ce542d7fdbd78d032e.svg"
                        alt=""
                        className="w-80 h-auto"
                    />
                </div>

                <div className="expertise-images absolute left-[108vw] top-[5vh] -rotate-[5deg]">
                    <img
                        src="/6a714ad31db5d83bc967b.svg"
                        alt=""
                        className="w-72 h-auto"
                    />
                </div>

                <div className="expertise-images absolute left-[175vw] bottom-[3vh] rotate-[4deg]">
                    <img
                        src="/8a2db0cd90582eb4b877d.svg"
                        alt=""
                        className="w-80 h-auto"
                    />
                </div>
            </div>
        </div>
    )
}

export default Expertise