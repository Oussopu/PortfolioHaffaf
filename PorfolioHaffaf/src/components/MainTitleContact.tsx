import Text from "./Text.tsx";
import GlitchEffect from "./animations/GlitchEffect.tsx";

const MainTitleContact = () => (
    <div className="main-title-contact">
        <GlitchEffect triggerOnLoad={true} delay={0}>
            <Text
                name="WEB DEVELOPER FRONT-END"
                color="#f2f2f2"
                fontSize="50px"
                fontWeight="300"
            />
        </GlitchEffect>
    </div>
)

export default MainTitleContact;
