import styles from "./ContactsHeader.module.scss"

const ContactsHeader = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.backbtn}>Back</div>
            <div className={styles.mainhead}>Header</div>
            <div className={styles.lightdark}>Light dark mode</div>
        </div>
    )
}

export default ContactsHeader;