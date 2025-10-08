import Text from "./Text.tsx";

const TitleLocationHome = () => (
    <div className="title-location">
        <div className="visible-title-location">
            <Text
                name="BASED"
                fontSize="20px"
            />
            <Text
                name="IN"
                fontSize="20px"
            />
            <Text
                name="FRANCE"
                fontSize="20px"
            />
        </div>
        <div className="invisible-title-location">
            <Text
                name="FRONT-END"
                fontSize="20px"
                color="#f2f2f2"
                fontWeight="100"
            />
        </div>
    </div>
)

export default TitleLocationHome;
