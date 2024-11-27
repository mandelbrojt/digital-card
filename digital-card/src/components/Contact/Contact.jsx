import React from "react"
import MailIcon from "../../assets/mail-icon.png"
import LinkedinIcon from "../../assets/linkedin-icon.png"

export default function Contact() {
    return (
        <div className="contact-section">
            <button className="email-button contact-button">
                <img className="email-icon" src={MailIcon} alt="Email icon" />
                <p className="mail-text">Email</p>
            </button>
            <button className="linkedin-button contact-button">
                <img src={LinkedinIcon} alt="LinkedIn icon" />
                <p className="linkedin-text">LinkedIn</p>
            </button>
        </div>
    )
}