import { useEffect, useRef } from "react"
import type { MouseEvent } from "react"
import gsap from "gsap"
import { ProjectCard } from "../components/project-card"

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

        gsap.set(".project-asset-wrap", {
            scale: 1.2,
        })

        gsap.utils.toArray<HTMLElement>(".project-card").forEach((card) => {
            const asset = card.querySelector(".project-asset")

            gsap.to(asset, {
                y: -40,
                scrollTrigger: {
                    trigger: card,
                    scrub: 2,
                    start: "top bottom",
                    end: "bottom top",
                    markers: true,
                }
            })

            gsap.to(card, {
                y: +40,
                scrollTrigger: {
                    trigger: card,
                    scrub: 2,
                    start: "top bottom",
                    end: "bottom top",
                    markers: true,
                }
            })
        })
    }, [])

    const onMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
        gsap.to("#cursor-arrow", {
            scale: 1,
            duration: 0.2,
        })
        
        const asset = e.currentTarget.querySelector(".project-asset-wrap")
        gsap.to(asset, {
            scale: 1.3,
            duration: 0.3,
        })

        gsap.to(e.currentTarget, {
            scale: 0.95,
            duration: 0.3,
        })
    }

    const onMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
        gsap.to("#cursor-arrow", {
            scale: 0,
            duration: 0.2,
        })

        const asset = e.currentTarget.querySelector(".project-asset-wrap")
        gsap.to(asset, {
            scale: 1.2,
            duration: 0.3,
        })

        gsap.to(e.currentTarget, {
            scale: 1,
            duration: 0.3,
        })
    }
    return (
        <div id="our-projects-page" className="min-h-screen bg-brandBlack mt-[15vw]">
            <div
                id="cursor-arrow"
                className="fixed top-0 left-0 pointer-events-none z-50 bg-transparent scale-0"
            >
                <div className="w-20 h-20 font-[200] rounded-full bg-brandBlack text-5xl text-white flex items-center justify-center">
                    →
                </div>
            </div>
            <div className="grid grid-cols-6 gap-y-[10vw] px-[clamp(2rem,4vw,4.4rem)]">
                <ProjectCard 
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    src="/thumnail-IEC.mp4"
                    styles="col-span-3"
                    type="vid"
                />

                <ProjectCard 
                    onMouseEnter={onMouseEnter} 
                    onMouseLeave={onMouseLeave} 
                    src="/thumbnail-white-coffee-b1aada7092b251dc.webp"
                    styles="col-start-5 col-end-7 place-content-end mt-[20vw]"
                    type="img"
                />

                <ProjectCard 
                    onMouseEnter={onMouseEnter} 
                    onMouseLeave={onMouseLeave} 
                    src="/thumnail-beev.mp4"
                    styles="col-span-2"
                    type="vid"
                />
                
                <ProjectCard 
                    onMouseEnter={onMouseEnter} 
                    onMouseLeave={onMouseLeave}
                    src="/thumbnail-peugeot-ac01e927d1befcd7.webp"
                    styles="col-start-4 col-end-7 place-content-end mt-[10vw]"
                    type="img"
                />
                
                <ProjectCard 
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    src="/thumbnail-kreme-47f2f7370631b92f.webp"
                    styles="col-start-2 col-end-6"
                    type="img"
                />
            </div>
        </div>
    )
}


export default OurProjects