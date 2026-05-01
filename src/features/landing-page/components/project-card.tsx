import type { MouseEvent } from "react"

export const ProjectCard = ({
    type,
    src,
    onMouseEnter,
    onMouseLeave,
    styles
}: {
    type: string,
    src: string,
    onMouseEnter: (e: MouseEvent<HTMLDivElement>) => void,
    onMouseLeave: (e: MouseEvent<HTMLDivElement>) => void,
    styles: string
}) => {
    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`project-card overflow-hidden ${styles}`}
        >
            <div className={`project-asset-wrap relative`} >
                {type === "img"
                    ? <img
                        src={src}
                        alt=""
                        className="project-asset"
                    />
                    : <video
                        src={src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="project-asset"
                    />
                }
            </div>
        </div>
    )
}