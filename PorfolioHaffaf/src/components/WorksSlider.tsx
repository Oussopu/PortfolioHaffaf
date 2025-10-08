import Text from "./Text.tsx";

const WorksSlider =() => (
    <div className="works-slider">
        <div className="first-work">
            <div className="number-work">
                <Text
                    name="01"
                    color="#f2f2f2"
                    fontSize="20"
                    fontWeight="700"
                />
            </div>
            <div className="name-work">
                <Text
                    name="LIZZY'SWORLD"
                    color="#f2f2f2"
                    fontSize="20"
                    fontWeight="700"
                />
            </div>
        </div>
        <div className="second-work">
            <div className="number-work">
                <Text
                    name="02"
                    fontSize="20"
                    fontWeight="700"
                />
            </div>
            <div className="name-work">
                <Text
                    name="TEST"
                    fontSize="20"
                    fontWeight="700"
                />
            </div>
        </div>
        <div className="third-work">
            <div className="number-work">
                <Text
                    name="03"
                    color="#f2f2f2"
                    fontSize="20"
                    fontWeight="700"
                />
            </div>
            <div className="name-work">
                <Text
                    name="TEST2"
                    color="#f2f2f2"
                    fontSize="20"
                    fontWeight="700"
                />
            </div>
        </div>
    </div>
)

export default WorksSlider;
