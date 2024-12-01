import React from "react"

const descriptionText = `
I'm a Frontend Developer with experience in the financial technology industry in Mexico.
I develop user interfaces for cash management applications to help businesses manage their finances.
`

const interestsText = `
#mountain-biking #nature #traveling
#beer #live-music #gaming
#edtech #fintech #robotics
`

// Factory function to create components
function createAboutParagraph(tag, text) {
    return function AboutParagraph() {
        return (
            <div className={`${tag}-container`}>
                <h3 className={`${tag}-title`}>{tag.charAt(0).toUpperCase() + tag.slice(1)}</h3>
                <p className={`${tag}-text`}>{text}</p>
            </div>
        )
    }
}

// Create components using the factory function
const MyDescription = createAboutParagraph("description", descriptionText)
const MyInterests = createAboutParagraph("interests", interestsText)

export default function About() {
    return (
        <>
            <MyDescription />
            <MyInterests />
        </>
    )
}