import me from "../assets/img/me.jpeg";
import Text from "./Text.tsx";

const MainPictureHome = () => (
    <div className="main-picture">
        <div className="grey-background"></div>
        <img src={me} alt="picture of me" />
        <div className="skills">
            <Text
                name="/ REACT"
                fontSize="20px"
            />
            <Text
                name="/ TYPESCRIPT"
                fontSize="20px"
            />
            <Text
                name="/ TAILWIND"
                fontSize="20px"
            />
            <Text
                name="/ SASS"
                fontSize="20px"
            />
        </div>
    </div>
)

export default MainPictureHome
