import Text from "./Text.tsx";
import WaveEffect from "./animations/WaveEffect.tsx";
import TypewriterEffect from "./animations/TypewriterEffect.tsx";

const TitleService =() =>(
    <div className="title-service">
        <WaveEffect delay={0}>
                <Text
                    name="A GREAT WORK"
                />
        </WaveEffect>
        <TypewriterEffect delay={0}>
                <Text
                    name="START WITH A GREAT"
                    fontSize="20"
                    fontWeight="100"
                />
        </TypewriterEffect>
            <WaveEffect delay={0}>
                    <Text
                        name="COLLABORATION"
                    />
            </WaveEffect>
    </div>
)

export default TitleService;
