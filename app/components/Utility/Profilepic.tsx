"use client";

import styles from "./Profilepic.module.scss"

interface ProfilePicProps {
    size: "big" | "small",
    img?: string
  }

const Profilepic: React.FC<ProfilePicProps> = ({ size, img }) => {

    const classNames = [
        styles.profilepic,
        styles[size],
      ].join(' ');

    const imgsrc = img != '' ? img : "/icons/NoImg.png"

    return (
        <img src={imgsrc} className={classNames}/>
    )
}

export default Profilepic;