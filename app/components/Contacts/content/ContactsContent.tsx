"use client";
import Contact from "./contact/contact";
import styles from "./ContactsContent.module.scss"
import { useState } from "react";


interface ContactsProps {
    formOpen: string | null,
    setFormOpen: React.Dispatch<React.SetStateAction<"Add" | "Edit" | null>>,
}


const ContactsContent: React.FC<Readonly<ContactsProps>> = ({  formOpen, setFormOpen }) => {


    const [activeContact, setActiveContact] = useState<number | null>(null);

    const handleToggleContact = (index: number | null) => {
        setActiveContact(index === activeContact ? null : index);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.contactlist}>
            
            <Contact
                    isOpen={activeContact === 0}
                    onToggle={() => handleToggleContact(0)}
                    formOpen={formOpen}
                    setFormOpen = {setFormOpen}
                />

  
            </div>
        </div>
    )
}

export default ContactsContent;