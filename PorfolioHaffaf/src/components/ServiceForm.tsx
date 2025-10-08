import TitleArrow from "./TitleArrow.tsx";

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
            <TitleArrow title="SEND ME A MESSAGE" />
        </button>
    </form>
)

export default ServiceForm;
