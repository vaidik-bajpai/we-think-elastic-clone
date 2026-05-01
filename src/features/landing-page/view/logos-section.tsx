const LogosSection = () => {
    return (
        <div
            id="logo-container"
            className="grid grid-cols-4 items-center gap-y-[min(13.8vw,160px)] gap-x-[13.8vw] py-[min(25vw,180px)] px-[10vw]"
        >
            {Array.from({ length: 24 }, (_, index) => (
                <img
                    key={index}
                    src={`/logo-${index + 1}.svg`}
                    alt=""
                    className="w-full block object-cover"
                />
            ))}
        </div>
    )
}

export default LogosSection