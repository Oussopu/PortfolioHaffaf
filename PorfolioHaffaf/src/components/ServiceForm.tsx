import Text from "./Text.tsx";
import arrow from "../assets/img/arrowDown.svg";

const ServiceForm =() =>(
    <form className="service-form">
        <div className="form-group">
            <label htmlFor="name"></label>
            <input
                type="text"
                id="name"
                name="name"
                placeholder="YOUR NAME *"
                required
            />
        </div>
        <div className="form-group">
            <label htmlFor="phone"></label>
            <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="YOUR PHONE *"
                required
            />
        </div>
        <div className="form-group">
            <label htmlFor="email"></label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="YOUR EMAIL *"
                required
            />
        </div>
        <div className="form-group">
            <label htmlFor="message"></label>
            <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="HOW CAN I HELP YOU *"
                required
            />
        </div>
        <button type="submit">
            <div className="text-arrow">
                <Text
                    name="SEND ME A MESSAGE"
                    fontSize="20px"
                    color="#a3a3a3"
                />
                <img src={arrow} alt="arrow icon" />
            </div>
        </button>
    </form>
)

export default ServiceForm;
