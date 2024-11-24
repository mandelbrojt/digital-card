import React from "react"

import avatarImage from "../../assets/avatar-icon.png"

export default function Avatar() {
    return <img className="avatar-img" src={avatarImage} alt="User avatar image" />
}