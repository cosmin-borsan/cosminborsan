import Link from "next/link";
import React from "react";

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link className="navbar-link" href="/about">
                        About
                    </Link>
                </li>

                <li className="navbar-item">
                    <Link className="navbar-link" href="/resume">
                        Resume
                    </Link>
                </li>

                <li className="navbar-item">
                    <Link className="navbar-link" href="/portfolio">
                        Portfolio
                    </Link>
                </li>

                <li className="navbar-item">
                    <Link className="navbar-link" href="/blog">
                        Blog
                    </Link>
                </li>

                <li className="navbar-item">
                    <Link className="navbar-link" href="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
