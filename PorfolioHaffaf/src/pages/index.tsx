import '../assets/style/home.scss'
import '../assets/style/about.scss'
import '../assets/style/works.scss'
import '../assets/style/service.scss'
import Home from "../components/sections/Home.tsx";
import About from "../components/sections/About.tsx";
import Works from "../components/sections/Works.tsx";
import Service from "../components/sections/Service.tsx";

const Index = () => {
    return (
        <>
            <Home/>
            <About/>
            <Works/>
            <Service/>
        </>
    );
};

export default Index;
