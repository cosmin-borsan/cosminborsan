"use client";
import SendIcon from "@mui/icons-material/Send";

function Contact() {
    return (
        <article className="contact active" data-page="contact">
            <header>
                <h2 className="h2 article-title">Contact</h2>
            </header>

            <section className="mapbox" data-mapbox>
                <figure>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d45581.66972647846!2d26.102274730624252!3d44.43614965980734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sro!4v1673285188828!5m2!1sen!2sro"
                        width="400"
                        height="300"
                        loading="lazy"
                    ></iframe>
                </figure>
            </section>

            <section className="contact-form">
                <h3 className="h3 form-title">Contact Form</h3>

                <form action="#" className="form" data-form>
                    <div className="input-wrapper">
                        <input
                            type="text"
                            name="fullname"
                            className="form-input"
                            placeholder="Full name"
                            required
                            data-form-input
                        />

                        <input
                            type="email"
                            name="email"
                            className="form-input"
                            placeholder="Email address"
                            required
                            data-form-input
                        />
                    </div>

                    <textarea
                        name="message"
                        className="form-input"
                        placeholder="Your Message"
                        required
                        data-form-input
                    ></textarea>

                    <button className="form-btn" type="submit" disabled data-form-btn>
                        <SendIcon />
                        <span>Send Message</span>
                    </button>
                </form>
            </section>
        </article>
    );
}

export default Contact;
