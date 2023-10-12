"use client";
import Contact from "./contact/Contact";
import styles from "./ContactsContent.module.scss"
import { useState, useEffect } from "react";


interface ContactsProps {
    formOpen: string | null,
    setFormOpen: React.Dispatch<React.SetStateAction<"Add" | "Edit" | null>>,
}

type ContactType = {
    id: number;
    name: string;
    email: string;
    phone: string;
    photo: boolean;
    fav: boolean;
    muted: boolean;
}

const ContactsContent: React.FC<Readonly<ContactsProps>> = ({  formOpen, setFormOpen }) => {

    const [dataFetching, setDataFetching] = useState(false)
    const [data, setData] = useState<ContactType[]>([]);

    useEffect(() => {
        setDataFetching(true)
        async function fetchData() {
        try {
            const response = await fetch('/api/contact');
            if (response.ok) {
            const jsonData = await response.json();
            setData(jsonData);
            } else {
            console.error('Error fetching data');
            }
        } catch (error) {
            console.error(error);
        }
        }

        fetchData();
    }, []);

    const [activeContact, setActiveContact] = useState<number | null>(null);

    const handleToggleContact = (index: number | null) => {
        setActiveContact(index === activeContact ? null : index);
    };

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
                            setFormOpen = {setFormOpen}
                        />
                ))) : (
                    <p>{dataFetching ? 'Loading...' : 'No data available'}</p>
                )}

  
            </div>
        </div>
    )
}

export default ContactsContent;