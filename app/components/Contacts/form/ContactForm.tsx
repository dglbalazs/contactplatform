"use client";
import styles from './ContactForm.module.scss'
import Text from '../../Utility/Text';
import Profilepic from '../../Utility/Profilepic';
import Button from '../../Utility/Button';


interface ContactFormProps {
    formType: "Add" | "Edit",
    setFormOpen: React.Dispatch<React.SetStateAction<"Add" | "Edit" | null>>,
}


const ContactForm: React.FC<Readonly<ContactFormProps>> = ({ formType, setFormOpen }) => {
    
    const toggleClose = () => {
        setFormOpen(null)
      };

    return (
        <div className={styles.wrapper}>
            <div className={styles.form}>
                <div className={styles.info}>
                {formType === "Add" && (
                        <Text text="Add contact" texttype={2} clr={1}></Text>
                    )}
                {formType === "Edit" && (
                        <Text text="Edit contact" texttype={2} clr={1}></Text>
                    )}
                    <div className={styles.imagesection}>
                        <Profilepic size="big" profileName='NoImg'></Profilepic>
                        <Button 
                            buttonType='both'
                            colorType='normal'
                            icon='Change'
                            text='Change picture'
                        />
                        <Button
                            buttonType="onlyicon"
                            colorType="normal"
                            icon="Delete"
                            text=""
                         />
                    </div>
                    <div className={styles.formsection}>
                        <div className={styles.inputField}>
                        <label htmlFor="name" className={styles.inputLabel}>
                        <Text text="Name" texttype={5} clr={2}></Text>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            placeholder='Jamie Wright'
                            className={styles.input}
                            autoComplete="off"
                        />
                        </div>
                        <div className={styles.inputField}>
                            <label htmlFor="phone" className={styles.inputLabel}>
                                <Text text="Name" texttype={5} clr={2}></Text>
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                placeholder='+01 234 5678'
                                className={styles.input}
                                autoComplete="off"
                            />
                        </div>
                        <div className={styles.inputField}>
                            <label htmlFor="email" className={styles.inputLabel}>
                            <Text text="Email" texttype={5} clr={2}></Text>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder='jamie.wright@mail.com'
                                required
                                className={styles.input}
                                autoComplete="off"
                            />
                        </div>
                            
                    </div>
                </div>
                <div className={styles.navigation}>
                <Button
                            buttonType="onlytext"
                            colorType="deep"
                            icon="Delete"
                            text="Cancel"
                            onClick={toggleClose}
                         />
                                                 <Button
                            buttonType="onlytext"
                            colorType="normal"
                            icon="Delete"
                            text="Done"
                         />
                </div>
            </div>
        </div>
    )
}

export default ContactForm;