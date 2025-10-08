import '../../assets/style/header.scss'
import WebsiteLogo from "../WebsiteLogo.tsx";
import WebsiteNav from "../WebsiteNav.tsx";
import WebsiteContact from "../WebsiteContact.tsx";

const Header = () => {
    return (
        <nav className="main-nav">
            <WebsiteLogo />
            <WebsiteNav />
            <WebsiteContact />
        </nav>
    );
};

export default Header;
