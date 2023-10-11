"use client";

import styles from "./ContactsHeader.module.scss"
import { useState } from 'react';

interface HeaderProps {
    theme: string,
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const ContactsHeader: React.FC<Readonly<HeaderProps>> = ({ theme, setTheme}) => {

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
      };

    return (
        <div className={styles.wrapper}>
            <div className={styles.backbtn}>Back</div>
            <div className={styles.mainhead}>Header</div>
            <div className={styles.lightdark} onClick={toggleTheme}>Light dark mode</div>
        </div>
    )
}

export default ContactsHeader;