"use client";
import Contact from "./contact/contact";
import styles from "./ContactsContent.module.scss"
import { useState } from "react";

const ContactsContent = () => {


    const [activeContact, setActiveContact] = useState<number | null>(null);

    const handleToggleContact = (index: number | null) => {
        setActiveContact(index === activeContact ? null : index);
    };

    return (
        <div className={styles.wrapper}>
            <Contact
                isOpen={activeContact === 0}
                onToggle={() => handleToggleContact(0)}
            />
            <Contact
                isOpen={activeContact === 1}
                onToggle={() => handleToggleContact(1)}
            />
            <Contact
                isOpen={activeContact === 2}
                onToggle={() => handleToggleContact(2)}
            />
        </div>
    )
}

export default ContactsContent;