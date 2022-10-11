// React Components
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Styling
import "./SimpleNavbar.css";

export default function SimpleNavbar() {
    return (
        <>
            <div className="simplenavbar__container">
                <nav className="simplenavbar">
                    <Link
                        to="/hyeon-website"
                        className="simplenavbar__name__link"
                    >
                        HYEON
                    </Link>
                </nav>
            </div>
        </>
    );
}
