"use client";

import styles from "./ContactsHeader.module.scss"
import { useState } from 'react';
import Text from "../../Utility/Text";
import Button from "../../Utility/Button";

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
            <div className={styles.backbtn}>
                <Button
                        buttonType="onlyicon"
                        colorType="deep"
                        icon="Back"
                        text=""
                    />
            </div>
            <div className={styles.mainhead}>
                <Text text="Contacts" texttype={1} clr={1}></Text>
                <div className={styles.submenu}>
                    <Button
                        buttonType="onlyicon"
                        colorType="deep"
                        icon="Settings"
                        text=""
                    />
                    <img src="/icons/Photo.svg"></img>
                    <Button
                        buttonType="both"
                        colorType="grad"
                        icon="Add"
                        text="Add Item"
                    />
                </div>
            </div>
            <div className={styles.lightdark} onClick={toggleTheme}>
            <Button
                        buttonType="onlyicon"
                        colorType="deep"
                        icon="Light"
                        text=""
                    />
            </div>
        </div>
    )
}

export default ContactsHeader;