const ourServices = [
    {
        title: "Stratégie & Idées",
        services: ["Positionnement", "Plateforme de marque", "Stratégie digitale", "Stratégie sociale", "Content Marketing"],
    }, 
    {
        title: "Identité de marque",
        services: ["Logo", "Identité graphique", "Charte graphique", "Charte éditoriale", "Création de contenu", "Guidelines social media"]
    }, 
    {
        title: "Expérience digitale",
        services: ["UI design", "Audit et UX design", "Site vitrine", "Site e-commerce", "Application Web", "Application Mobile"]
    }
]

const ServicesSection = () => {
    return (
        <div className="text-dark bg-brandBlue flex justify-between px-42 pt-24 pb-48">
            {ourServices.map((service) => {
                return <ServiceColumn 
                    title={service.title}
                    services={service.services}
                />
            })}
        </div>
    )
}

const ServiceColumn = ({title, services}: {
    title: string,
    services: string[]}
) => {
    return (
        <div className="flex flex-col gap-3 tracking-tighter">
            <h2 className="uppercase text-3xl font-medium">{title}</h2>
            <div>
                {services.map((service) => {
                    return (
                        <div key={service} className="text-2xl font-[350] opacity-[80%]">
                            {service}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ServicesSection