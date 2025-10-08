import MainTitleHome from "../MainTitleHome.tsx";
import MainPictureHome from "../MainPictureHome.tsx";
import MainDescriptionHome from "../MainDescriptionHome.tsx";

const Home = () => {
    return (
        <section className="home-main">
            <MainTitleHome />
            <MainPictureHome />
            <MainDescriptionHome />
        </section>
    );
};

export default Home;
