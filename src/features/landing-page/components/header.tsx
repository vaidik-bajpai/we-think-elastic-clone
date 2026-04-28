import WebsiteLogo from "./website.logo"

const Header = () => {
    return (
        <div id="header" className="bg-brandBlack w-full flex justify-between items-center p-4 pr-12">
            <div>
                <WebsiteLogo />
            </div>
            <div className="flex text-xl gap-16 text-beige">
                <div>Projects</div>
                <div>Expertises</div>
                <div>L'équipe</div>
                <div>Contact</div>
            </div>
        </div>
    )
}

export default Header