import { Email, LocationOn, Smartphone } from "@mui/icons-material"
import "./contactme.modules.css"

export const ContactMe = () => {
    return (
        <section id="section-contact-container">
            <div className="contact-container">
                <div className="separates-form">
                    <div className="infos-box">
                        <div className="contact-me">
                            <h1 style={{ color: 'rgb(37, 37, 37)' }}>Contact me!</h1>
                            <span style={{ color: 'rgb(99, 99, 99)' }}>Message of the day: be happy no matter what happens.</span>
                        </div>  

                        <div className="all-aligned">
                            <LocationOn className="location" fontSize="large" />
                            <div className="inside-all-aligned">
                                <span className="address">Address:</span>
                                <p>Street Somewhere Brazil, 505:</p>
                            </div>
                        </div>

                        <div className="all-aligned">
                            <Smartphone className="smartphone" fontSize="large" />
                            <div className="inside-all-aligned">
                                <span className="phone-number">Phone:</span>
                                <p>+00 00 987456321</p>
                            </div>
                        </div>

                        <div className="all-aligned">
                            <Email className="email-icon" fontSize="large" />
                            <div className="inside-all-aligned">
                                <span className="email-span">Email:</span>
                                <p>gessinger@email.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="infos-box-form">
                        <div className="leave-comment">
                            <h1 style={{ color: 'rgb(37, 37, 37)' }}>Leave a Message!</h1>
                            <span style={{ color: 'rgb(99, 99, 99)' }}>Reach me so we can enter in contact :)</span>
                        </div>

                        <form id="form">
                            <input type="text" id="fname" name="fname" placeholder="Your first name" />
                            <input type="text" id="lname" name="lname" placeholder="Your last name" />
                            <input type="email" id="inEmail" name="email" placeholder="Your email" />
                            <input type="text" id="message" name="message" placeholder="Your Message" />
                        </form>

                        <button className="btn-Send-Msg">SEND MESSAGE</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactMe