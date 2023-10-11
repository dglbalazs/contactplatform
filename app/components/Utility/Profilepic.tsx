"use client";

import styles from "./Profilepic.module.scss"

interface ProfilePicProps {
    size: "big" | "small",
    profileName: string
  }

const Profilepic: React.FC<ProfilePicProps> = ({ size, profileName }) => {

    const classNames = [
        styles.profilepic,
        styles[size],
      ].join(' ');

    const imgsrc = "/icons/" + profileName + ".png" // for some reason profileName here is undefined

    return (
        <img src={imgsrc} className={classNames}/>
    )
}

export default Profilepic;