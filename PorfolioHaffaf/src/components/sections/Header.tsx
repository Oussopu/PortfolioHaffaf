import '../../assets/style/header.scss'
import WebsiteLogo from "../WebsiteLogo.tsx";
import WebsiteNav from "../WebsiteNav.tsx";
import WebsiteContact from "../WebsiteContact.tsx";

type Tone = 'light' | 'dark';

const Header = ({ tone = 'light' }: { tone?: Tone }) => {
    return (
        <nav className="main-nav" data-tone={tone}>
            <WebsiteLogo />
            <WebsiteNav />
            <WebsiteContact />
        </nav>
    );
};

export default Header;
