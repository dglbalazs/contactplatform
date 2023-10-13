"use client";

import styles from './Contacts.module.scss'
import ContactsContent from './content/ContactsContent';
import ContactsHeader from './header/ContactsHeader';
import { useState, useEffect } from 'react';
import ContactForm from './form/ContactForm';
import { ContactType } from '../interfaces'


const Contacts = () => {

    const [theme, setTheme] = useState('dark');
    const [formOpen,setFormOpen] = useState<"Add" | "Edit" | null>(null);
    const [editData,setEditData] = useState<ContactType[]>([]);

    // Data Fetch
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
                data={data}
                requestUpdate={requestUpdate}
                dataFetching={dataFetching}
            ></ContactsContent>
            {formOpen !== null && (
                <ContactForm
                    editData={formOpen == 'Edit' ? editData : null}
                    setFormOpen={setFormOpen}
                    formType={formOpen}
                    requestUpdate={requestUpdate}
                ></ContactForm>
            )}
        </div>
    )
}

export default Contacts;