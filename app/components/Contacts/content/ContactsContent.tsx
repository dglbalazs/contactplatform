"use client";
import Contact from "./contact/Contact";
import styles from "./ContactsContent.module.scss"
import { useState, useEffect } from "react";


interface ContactsProps {
    formOpen: string | null,
    setFormOpen: React.Dispatch<React.SetStateAction<"Add" | "Edit" | null>>,
    setEditData: React.Dispatch<React.SetStateAction<ContactType[]>>,
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

const ContactsContent: React.FC<Readonly<ContactsProps>> = ({  formOpen, setFormOpen, setEditData }) => {

    const [dataFetching, setDataFetching] = useState(false)
    const [data, setData] = useState<ContactType[]>([]);
    const [endpoint, setEndpoint] = useState('/api/contact');

    const requestUpdate = () => {
        setDataFetching(true)
        // Fetch data from the current endpoint and update the 'data' state
        fetch(endpoint)
          .then((response) => response.json())
          .then((fetchedData) => setData(fetchedData))
          .catch((error) => console.error('Error fetching data:', error));
      };

      useEffect(() => {
        requestUpdate(); // Initial data fetch
    
      }, [endpoint]);

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
                    <p>{dataFetching ? 'Loading...' : 'No data available'}</p>
                )}

  
            </div>
        </div>
    )
}

export default ContactsContent;