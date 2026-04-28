import { useEffect } from "react";
import gsap from "gsap";

const AnimatedLoader = () => {
    const logos = [
        {id: 'logo-1', src: '/1.svg'},
        {id: 'logo-2', src: '/2.svg'},
        {id: 'logo-3', src: '/3.svg'},
        {id: 'logo-4', src: '/4.svg'},
        {id: 'logo-5', src: '/5.svg'},
        {id: 'logo-6', src: '/6.svg'},
        {id: 'logo-7', src: '/7.svg'},
        {id: 'logo-8', src: '/8.svg'},
        {id: 'logo-9', src: '/9.svg'},
        {id: 'logo-10', src: '/10.svg'},
        {id: 'logo-11', src: '/11.svg'},
        {id: 'logo-12', src: '/1.svg'},
        {id: 'logo-13', src: '/2.svg'},
        {id: 'logo-14', src: '/3.svg'},
    ]

    useEffect(() => {
        const tl = gsap.timeline()
        logos.forEach(item => {
            tl.set(`#${item.id}`, { autoAlpha: 1 })
                .to({}, { duration: 0.15 })            
                .set(`#${item.id}`, { autoAlpha: 0 })
            })
    }, [])

    return (
        <div className="relative w-64 h-64">
            {logos.map(item => {
                return <img key={item.id} id={item.id} src={item.src} alt="" className="absolute w-full h-full object-contain opacity-0" />    
            })}
        </div>
    )
}

export default AnimatedLoader