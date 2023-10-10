import styles from './Contacts.module.scss'
import ContactsContent from './content/ContactsContent';
import ContactsHeader from './header/ContactsHeader';

const Contacts = () => {

    return (
        <div className={styles.wrapper}>
            <ContactsHeader></ContactsHeader>
            <ContactsContent></ContactsContent>
        </div>
    )
}

export default Contacts;