"use client";

import styles from './Contacts.module.scss'
import ContactsContent from './content/ContactsContent';
import ContactsHeader from './header/ContactsHeader';
import { useState } from 'react';
import ContactForm from './form/ContactForm';


const Contacts = () => {

    const [theme, setTheme] = useState('dark');
    const [formOpen,setFormOpen] = useState<"Add" | "Edit" | null>(null);

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
            ></ContactsContent>
            {formOpen !== null && (
                <ContactForm
                    setFormOpen={setFormOpen}
                    formType={formOpen}
                ></ContactForm>
            )}
        </div>
    )
}

export default Contacts;