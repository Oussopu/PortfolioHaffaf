import Text from "./Text.tsx";
import WaveEffect from "./animations/WaveEffect.tsx";

const MainFooterContact =() => (
    <div className="main-footer">
        <WaveEffect triggerOnLoad={true} delay={0}>
            <Text
                name="HAFFAF OUSSAMA"
                color="#f2f2f2"
            />
        </WaveEffect>
        <WaveEffect triggerOnLoad={true} delay={0}>
            <Text
                name="© All right reserved. 2025 Haffafoussama"
                color="#f2f2f2"
                fontSize="12px"
                fontWeight="100"
            />
        </WaveEffect>
    </div>
)

export default MainFooterContact;
