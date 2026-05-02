import { useEffect } from "react"
import gsap from "gsap"

export const FooterSection = () => {
    useEffect(() => {
    }, [])

    const onMouseEnter = () => {
        gsap.fromTo("#project-text-underline", {
            scaleX: 0,
            transformOrigin: "left center",
            
        }, {
            scaleX: 1,
            duration: 1,
            ease: "circ.inOut"
        })
    }

    const onMouseLeave = () => {
        gsap.killTweensOf("#project-text-underline")

        gsap.set("#project-text-underline", {
            scaleX: 1,
        })
    }

    return (    
        <div className="uppercase pl-6 pt-26 pb-10 flex flex-col gap-10" >
            <div className="text-beige text-[6.5rem] tracking-tighter">
                <span className="opacity-[30%]">Suivant / </span> 
                <span id="project-text" className="relative leading-none inline-block" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    Projets
                    <span id="project-text-underline" className="absolute left-0 bottom-0 w-[102%] h-1 inline-block bg-beige"></span>
                </span>
            </div>
            <div className="uppercase text-white text-xs font-semibold flex justify-between ">
                <div className="grow-1">© 2024 wethinkelastic</div>
                <div className="grow-1">Nos actus</div>
                <div className="grow-1">uncafe@wethinkelastic.com</div>
                <div className="grow-1">Cookies</div>
                <div className="grow-1">Mentions légales</div>
            </div>
        </div>
    )
}

