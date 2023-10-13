"use client";
import Contact from "./contact/Contact";
import styles from "./ContactsContent.module.scss"
import { useState, useEffect } from "react";
import { ContactType } from "../../interfaces"
import Text from "../../Utility/Text";

interface ContactsProps {
    formOpen: string | null,
    setFormOpen: React.Dispatch<React.SetStateAction<"Add" | "Edit" | null>>,
    setEditData: React.Dispatch<React.SetStateAction<ContactType[]>>,
    data: ContactType[],
    requestUpdate: () => void,
    dataFetching: Boolean
}

const ContactsContent: React.FC<Readonly<ContactsProps>> = ({  formOpen, setFormOpen, setEditData, data, requestUpdate, dataFetching }) => {


    const [activeContact, setActiveContact] = useState<number | null>(null);

    const handleToggleContact = (index: number | null) => {
        setActiveContact(index === activeContact ? null : index);
    };

    const handleEditOpen = (index: number ) => {
        setEditData(data.filter((e) => e.id == index))
        setFormOpen("Edit")
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.contactlist}>
            {data.length > 0 ? (
                data?.map((contact) => (
                    <Contact 
                            key={contact.id} 
                            data={contact}
                            isOpen={activeContact === contact.id}
                            onToggle={() => handleToggleContact(contact.id)}
                            formOpen={formOpen}
                            onEditOpen = {() => handleEditOpen(contact.id)}
                            requestUpdate={requestUpdate}
                        />
                ))) : (
                    <Text text={dataFetching ? 'Loading...' : 'No data available'} texttype={2} clr={1}></Text>
                )}

  
            </div>
        </div>
    )
}

export default ContactsContent;