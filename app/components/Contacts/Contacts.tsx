"use client";

import styles from './Contacts.module.scss'
import ContactsContent from './content/ContactsContent';
import ContactsHeader from './header/ContactsHeader';
import { useState } from 'react';
import ContactForm from './form/ContactForm';

type ContactType = {
    id: number;
    name: string;
    email: string;
    phone: string;
    photo: boolean;
    fav: boolean;
    muted: boolean;
}

const Contacts = () => {

    const [theme, setTheme] = useState('dark');
    const [formOpen,setFormOpen] = useState<"Add" | "Edit" | null>(null);
    const [editData,setEditData] = useState<ContactType[]>([]);

    return (
        <div className={`${styles.wrapper} ${theme}`}>
            <ContactsHeader 
                theme={theme} 
                setTheme={setTheme} 
                formOpen={formOpen} 
                setFormOpen={setFormOpen}
            ></ContactsHeader>
            <ContactsContent 
                formOpen={formOpen} 
                setFormOpen={setFormOpen}
                setEditData={setEditData}
            ></ContactsContent>
            {formOpen !== null && (
                <ContactForm
                    editData={formOpen == 'Edit' ? editData : null}
                    setFormOpen={setFormOpen}
                    formType={formOpen}
                ></ContactForm>
            )}
        </div>
    )
}

export default Contacts;