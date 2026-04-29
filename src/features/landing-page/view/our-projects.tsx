import { useEffect } from "react"
import gsap from "gsap"

const OurProjects = () => {
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            gsap.to("#cursor-arrow", {
                x: e.clientX,
                y: e.clientY,
                duration: 0.2,
                ease: "power3.out",
            })
        })
    }, [])

    const onMouseEnter = () => {
        gsap.to("#cursor-arrow", {
            scale: 1,
            duration: 0.2,
        })
    }

    const onMouseLeave = () => {
        gsap.to("#cursor-arrow", {
            scale: 0,
            duration: 0.2,
        })
    }
    return (
        <div className="min-h-screen bg-brandBlack mt-[15vw]">
            <div
                id="cursor-arrow"
                className="fixed top-0 left-0 pointer-events-none z-50 bg-transparent scale-0"
            >
                <div className="w-20 h-20 font-[200] rounded-full bg-brandBlack text-5xl text-white flex items-center justify-center">
                    →
                </div>
            </div>
            <div className="grid grid-cols-6 gap-y-[10vw] px-[clamp(2rem,4vw,4.4rem)]">
                <div
                    onMouseEnter={onMouseEnter} 
                    onMouseLeave={onMouseLeave}
                    className="col-span-3 group transition-transform duration-500 ease-out hover:scale-95 overflow-hidden"
                >
                    <video
                        src="/thumnail-IEC.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                </div>
                <div
                    onMouseEnter={onMouseEnter} 
                    onMouseLeave={onMouseLeave} 
                    className="col-start-5 col-end-7 place-content-end mt-[20vw] group transition-transform duration-500 ease-out hover:scale-95 overflow-hidden"
                >
                    <img 
                        src="/thumbnail-white-coffee-b1aada7092b251dc.webp" 
                        alt=""
                        className="transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                </div>
                <div
                    onMouseEnter={onMouseEnter} 
                    onMouseLeave={onMouseLeave} 
                    className="col-span-2 group transition-transform duration-500 ease-out hover:scale-95 overflow-hidden" 
                >
                    <video 
                        src="/thumnail-beev.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                </div>
                <div
                    onMouseEnter={onMouseEnter} 
                    onMouseLeave={onMouseLeave} 
                    className="col-start-4 col-end-7 place-content-end mt-[10vw] group transition-transform duration-500 ease-out hover:scale-95 overflow-hidden"
                >
                    <img 
                        src="/thumbnail-peugeot-ac01e927d1befcd7.webp" 
                        alt=""
                        className="transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                </div>
                <div 
                    onMouseEnter={onMouseEnter} 
                    onMouseLeave={onMouseLeave}
                    className="col-start-2 col-end-6 group transition-transform duration-500 ease-out hover:scale-95 overflow-hidden"
                >
                    <img 
                        src="/thumbnail-kreme-47f2f7370631b92f.webp" 
                        alt=""
                        className="transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                </div>
            </div>
        </div>
    )
}

export default OurProjects