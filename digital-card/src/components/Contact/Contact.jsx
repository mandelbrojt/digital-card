import React from "react"

import { HiOutlineEnvelope } from "react-icons/hi2";
import { CiLinkedin } from "react-icons/ci";

export default function Contact() {
    return (
        <div className="contact-section">
            <button className="mail-button contact-button">
                <HiOutlineEnvelope className="mail-icon contact-icon" />
                <p className="mail-text">Email</p>
            </button>
            <button className="linkedin-button contact-button">
                <CiLinkedin className="linkedin-icon contact-icon" />
                <p className="linkedin-text">LinkedIn</p>
            </button>
        </div>
    )
}