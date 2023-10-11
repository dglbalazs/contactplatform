"use client";

import styles from './Contacts.module.scss'
import ContactsContent from './content/ContactsContent';
import ContactsHeader from './header/ContactsHeader';
import { useState } from 'react';

const Contacts = () => {

    const [theme, setTheme] = useState('dark');
    return (
        <div className={`${styles.wrapper} ${theme}`}>
            <ContactsHeader theme={theme} setTheme={setTheme}></ContactsHeader>
            <ContactsContent></ContactsContent>
        </div>
    )
}

export default Contacts;