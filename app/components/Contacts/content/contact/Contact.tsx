"use client";
import Button from "@/app/components/Utility/Button";
import Profilepic from "@/app/components/Utility/Profilepic";
import Text from "@/app/components/Utility/Text";
import styles from "./Contact.module.scss"
import More from "./More";
import { useState } from "react";
import ContactForm from "../../form/ContactForm";

interface ContactProps {
    isOpen: boolean,
    onToggle: () => void,
    formOpen: string | null,
    setFormOpen: React.Dispatch<React.SetStateAction<"Add" | "Edit" | null>>
  }

const Contact: React.FC<Readonly<ContactProps>> = ({ isOpen, onToggle, formOpen, setFormOpen }) => {

    const handleEditOpen = (value: "Edit") => {
        setFormOpen(value);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.information}>
                <Profilepic size="small" profileName="NoImg"></Profilepic>   
                <div className={styles.details}>
                <Text text="Timotthy Lewis" texttype={4} clr={1}></Text>
                <Text text="+36 20 255 5555" texttype={5} clr={2}></Text>
                </div>
            </div>
            <div className={`${styles.menuoptions} ${isOpen ? styles.opened : ''}`}>
                <Button
                    buttonType="onlyicon"
                    colorType="deep"
                    icon="Mute"
                    text=""
                    hideMobile
                />
                <Button
                    buttonType="onlyicon"
                    colorType="deep"
                    icon="Call"
                    text=""
                    hideMobile
                />
                <Button
                    buttonType="onlyicon"
                    colorType="deep"
                    icon="More"
                    text=""
                    onClick={onToggle}
                />
            </div>
            {isOpen && (
                <More onEditToggle={() => handleEditOpen("Edit")}></More>
            )}
        </div>
    )
}

export default Contact;