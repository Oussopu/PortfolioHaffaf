import Text from "./Text.tsx";

const  WebsiteNav =() => (
    <div className="website-nav">
        <ul>
            <li>
                <Text
                    name="ABOUT ME"
                    fontSize="20px"
                    fontWeight="100"
                />
            </li>
            <li>
                <Text
                    name="WORKS"
                    fontSize="20px"
                    fontWeight="100"
                />
            </li>
            <li>
                <Text
                    name="SERVICE"
                    fontSize="20px"
                    fontWeight="100"
                />
            </li>
        </ul>
    </div>
)

export default WebsiteNav;
