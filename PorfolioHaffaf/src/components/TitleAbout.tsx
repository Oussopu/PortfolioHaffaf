import Text from "./Text.tsx";
import GlitchEffect from "./animations/GlitchEffect.tsx";

const TitleAbout = () => (
    <div className="title-about">
        <GlitchEffect delay={0}>
            <Text
                name="ABOUT ME"
                fontSize="150px"
                fontWeight="700"
                color="#f2f2f2"
            />
        </GlitchEffect>
    </div>
)

export default TitleAbout;
