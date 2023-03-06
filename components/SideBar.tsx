"use client";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

function Sidebar() {
    return (
        <aside className="sidebar" data-sidebar>
            <div className="sidebar-info" data-sidebar-info>
                <figure className="avatar-box">
                    <img src="./assets/images/avatar-mid-low-rez.png" alt="Cosmin Borsan" width="80" />
                </figure>

                <div className="info-content">
                    <h1 className="name" title="Cosmin Borsan">
                        Cosmin Borsan
                    </h1>

                    <p className="title">Software Engineer</p>
                </div>

                <button className="info_more-btn" data-sidebar-btn>
                    <span>Show Contacts</span>

                    <ExpandMoreIcon />
                </button>
            </div>

            <div className="sidebar-info_more">
                <div className="separator"></div>

                <ul className="contacts-list">
                    <li className="contact-item">
                        <div className="icon-box">
                            <MailOutlineIcon />
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">Email</p>

                            <a href="mailto:cosmin.borsan@icloud.com" className="contact-link">
                                cosmin.borsan@icloud.com
                            </a>
                        </div>
                    </li>

                    <li className="contact-item">
                        <div className="icon-box">
                            <SmartphoneIcon />
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">Phone</p>

                            <a href="tel:+12133522795" className="contact-link">
                                +40 754 797 699
                            </a>
                        </div>
                    </li>

                    <li className="contact-item">
                        <div className="icon-box">
                            <CalendarMonthOutlinedIcon />
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">Birthday</p>

                            <time dateTime="1982-06-23">July 9, 1998</time>
                        </div>
                    </li>

                    <li className="contact-item">
                        <div className="icon-box">
                            <LocationOnOutlinedIcon />
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">Location</p>

                            <address>Bucharest, Romania, RO</address>
                        </div>
                    </li>
                </ul>

                <div className="separator"></div>

                <ul className="social-list">
                    <li className="social-item">
                        <a href="https://www.linkedin.com/in/cosmin-borsan/" className="social-link">
                            <span title="Linkedin" style={{ fontSize: "x-large" }}>
                                <LinkedInIcon />
                            </span>
                        </a>
                    </li>

                    <li className="social-item">
                        <a href="https://github.com/cosmin-borsan" className="social-link">
                            <span title="Github" style={{ fontSize: "x-large" }}>
                                <GitHubIcon />
                            </span>
                        </a>
                    </li>

                    <li className="social-item">
                        <a href="https://twitter.com/CosminBorsan" className="social-link">
                            <span title="Twitter" style={{ fontSize: "x-large" }}>
                                <TwitterIcon />
                            </span>
                        </a>
                    </li>

                    <li className="social-item">
                        <a href="https://www.goodreads.com/user/show/149073596-cosmin-borsan" className="social-link">
                            <span title="Goodreads" style={{ fontSize: "x-large" }}>
                                g
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;
