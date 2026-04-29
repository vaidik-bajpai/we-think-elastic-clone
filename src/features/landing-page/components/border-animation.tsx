const BorderAnimation = () => {
    
    return (
        <div className="group relative w-fit text-beige px-[5rem] py-[4rem] text-center text-[1.3rem] uppercase ">
            <div className="leading-tight">
                <div>Découvrez tous</div>
                <div>nos projets</div>
            </div>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border rounded-[300%] border-beige w-90 h-32 transition-transform duration-500 group-hover:rotate-[-15deg] group-hover:scale-x-120 group-hover:scale-y-140"></span>
        </div>
    )
}

export default BorderAnimation