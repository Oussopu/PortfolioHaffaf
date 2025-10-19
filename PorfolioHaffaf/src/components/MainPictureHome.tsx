import me from "../assets/img/me.jpeg";
import Text from "./Text.tsx";
import FadeEffect from "./animations/FadeEffect";

const MainPictureHome = () => (
    <div className="main-picture">
        <div className="grey-background"></div>
        <img src={me} alt="picture of me" />

        <div className="skills">
            <FadeEffect triggerOnLoad={true} delay={0.5}>
                <Text
                    name="/ REACT"
                    fontSize="20px"
                />
            </FadeEffect>

            <FadeEffect triggerOnLoad={true} delay={0.7}>
                <Text
                    name="/ TYPESCRIPT"
                    fontSize="20px"
                />
            </FadeEffect>

            <FadeEffect triggerOnLoad={true} delay={0.9}>
                <Text
                    name="/ TAILWIND"
                    fontSize="20px"
                />
            </FadeEffect>

            <FadeEffect triggerOnLoad={true} delay={1.1}>
                <Text
                    name="/ SASS"
                    fontSize="20px"
                />
            </FadeEffect>
        </div>
    </div>
)

export default MainPictureHome;
