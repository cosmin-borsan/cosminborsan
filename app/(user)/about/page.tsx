"use client";
import CloseIcon from "@mui/icons-material/Close";

function About() {
    return (
        <article className="about active" data-page="about">
            <header>
                <h2 className="h2 article-title">About me</h2>
            </header>

            <section className="about-text">
                <p>
                    Hi there! My name is Cosmin and I am a middle software engineer with 4 years of experience in the
                    industry. I have a strong background in Typescript, React, Next.js, Node.js and have a passion for
                    building high-quality, scalable software solutions.
                </p>

                <p>
                    When I'm not working, I enjoy staying active and participating in a variety of sports and outdoor
                    activities. Some of my favorites include cycling, swimming, and playing basketball. I also love to
                    travel and experience new cultures.
                </p>

                <p>
                    I am excited to continue growing my career as a software engineer and am always looking for new
                    challenges and opportunities to learn and grow.
                </p>
            </section>
            <section className="service">
                <h3 className="h3 service-title">What i'm doing</h3>

                <ul className="service-list">
                    <li className="service-item">
                        <div className="service-icon-box">
                            <img
                                src="./assets/images/icon-design.svg
                "
                                alt="design icon"
                                width="40"
                            />
                        </div>

                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Web design</h4>

                            <p className="service-item-text">
                                The most modern and high-quality design made at a professional level.
                            </p>
                        </div>
                    </li>

                    <li className="service-item">
                        <div className="service-icon-box">
                            <img src="./assets/images/icon-dev.svg" alt="Web development icon" width="40" />
                        </div>

                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Web development</h4>

                            <p className="service-item-text">
                                High-quality development of sites at the professional level.
                            </p>
                        </div>
                    </li>

                    <li className="service-item">
                        <div className="service-icon-box">
                            <img src="./assets/images/icon-app.svg" alt="mobile app icon" width="40" />
                        </div>

                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Mobile apps</h4>

                            <p className="service-item-text">
                                Professional development of applications for iOS and Android.
                            </p>
                        </div>
                    </li>

                    <li className="service-item">
                        <div className="service-icon-box">
                            <img src="./assets/images/icon-photo.svg" alt="camera icon" width="40" />
                        </div>

                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Photography</h4>

                            <p className="service-item-text">
                                I make high-quality photos of any category at a professional level.
                            </p>
                        </div>
                    </li>
                </ul>
            </section>

            <section className="testimonials">
                <h3 className="h3 testimonials-title">Testimonials</h3>

                <ul className="testimonials-list has-scrollbar no-select" data-testimonials-scrollbar>
                    <li className="testimonials-item">
                        <div className="content-card" data-testimonials-item>
                            <figure className="testimonials-avatar-box">
                                <img
                                    src="./assets/images/avatar-1.png"
                                    alt="Daniel lewis"
                                    width="60"
                                    data-testimonials-avatar
                                />
                            </figure>

                            <h4 className="h4 testimonials-item-title" data-testimonials-title>
                                Daniel lewis
                            </h4>

                            <div className="testimonials-text" data-testimonials-text>
                                <p>
                                    Cosmin was hired to create a corporate identity. We were very pleased with the work
                                    done. She has a lot of experience and is very concerned about the needs of client.
                                    Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et
                                    eiusmod tempor incididunt ut laborels dolore magnarels alia.
                                </p>
                            </div>
                        </div>
                    </li>

                    <li className="testimonials-item">
                        <div className="content-card" data-testimonials-item>
                            <figure className="testimonials-avatar-box">
                                <img
                                    src="./assets/images/avatar-2.png"
                                    alt="Jessica miller"
                                    width="60"
                                    data-testimonials-avatar
                                />
                            </figure>

                            <h4 className="h4 testimonials-item-title" data-testimonials-title>
                                Jessica miller
                            </h4>

                            <div className="testimonials-text" data-testimonials-text>
                                <p>
                                    Cosmin was hired to create a corporate identity. We were very pleased with the work
                                    done. She has a lot of experience and is very concerned about the needs of client.
                                    Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et
                                    eiusmod tempor incididunt ut laborels dolore magnarels alia.
                                </p>
                            </div>
                        </div>
                    </li>

                    <li className="testimonials-item">
                        <div className="content-card" data-testimonials-item>
                            <figure className="testimonials-avatar-box">
                                <img
                                    src="./assets/images/avatar-3.png"
                                    alt="Emily evans"
                                    width="60"
                                    data-testimonials-avatar
                                />
                            </figure>

                            <h4 className="h4 testimonials-item-title" data-testimonials-title>
                                Emily evans
                            </h4>

                            <div className="testimonials-text" data-testimonials-text>
                                <p>
                                    Cosmin was hired to create a corporate identity. We were very pleased with the work
                                    done. She has a lot of experience and is very concerned about the needs of client.
                                    Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et
                                    eiusmod tempor incididunt ut laborels dolore magnarels alia.
                                </p>
                            </div>
                        </div>
                    </li>

                    <li className="testimonials-item">
                        <div className="content-card" data-testimonials-item>
                            <figure className="testimonials-avatar-box">
                                <img
                                    src="./assets/images/avatar-4.png"
                                    alt="Henry william"
                                    width="60"
                                    data-testimonials-avatar
                                />
                            </figure>

                            <h4 className="h4 testimonials-item-title" data-testimonials-title>
                                Henry william
                            </h4>

                            <div className="testimonials-text" data-testimonials-text>
                                <p>
                                    Cosmin was hired to create a corporate identity. We were very pleased with the work
                                    done. She has a lot of experience and is very concerned about the needs of client.
                                    Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et
                                    eiusmod tempor incididunt ut laborels dolore magnarels alia.
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>

            <div className="modal-container" data-modal-container>
                <div className="overlay" data-overlay></div>

                <section className="testimonials-modal">
                    <button className="modal-close-btn" data-modal-close-btn>
                        <CloseIcon />
                    </button>

                    <div className="modal-img-wrapper">
                        <figure className="modal-avatar-box">
                            <img src="./assets/images/avatar-1.png" alt="Daniel lewis" width="80" data-modal-img />
                        </figure>

                        <img src="./assets/images/icon-quote.svg" alt="quote icon" />
                    </div>

                    <div className="modal-content">
                        <h4 className="h3 modal-title" data-modal-title>
                            Daniel lewis
                        </h4>

                        <time dateTime="2021-06-14">14 June, 2021</time>

                        <div data-modal-text>
                            <p>
                                Cosmin was hired to create a corporate identity. We were very pleased with the work
                                done. She has a lot of experience and is very concerned about the needs of client. Lorem
                                ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod
                                tempor incididunt ut laborels dolore magnarels alia.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <section className="clients">
                <h3 className="h3 clients-title">Clients</h3>

                <ul className="clients-list has-scrollbar">
                    <li className="clients-item">
                        <a href="#">
                            <img src="./assets/images/logo-1-color.png" alt="client logo" />
                        </a>
                    </li>

                    <li className="clients-item">
                        <a href="#">
                            <img src="./assets/images/logo-2-color.png" alt="client logo" />
                        </a>
                    </li>

                    <li className="clients-item">
                        <a href="#">
                            <img src="./assets/images/logo-3-color.png" alt="client logo" />
                        </a>
                    </li>

                    <li className="clients-item">
                        <a href="#">
                            <img src="./assets/images/logo-4-color.png" alt="client logo" />
                        </a>
                    </li>

                    <li className="clients-item">
                        <a href="#">
                            <img src="./assets/images/logo-5-color.png" alt="client logo" />
                        </a>
                    </li>

                    <li className="clients-item">
                        <a href="#">
                            <img src="./assets/images/logo-6-color.png" alt="client logo" />
                        </a>
                    </li>
                </ul>
            </section>
        </article>
    );
}

export default About;
