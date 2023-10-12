"use client";
import styles from './ContactForm.module.scss'
import Text from '../../Utility/Text';
import Profilepic from '../../Utility/Profilepic';
import Button from '../../Utility/Button';
import { useRef, useState } from 'react';


interface ContactFormProps {
    formType: "Add" | "Edit",
    setFormOpen: React.Dispatch<React.SetStateAction<"Add" | "Edit" | null>>,
}

interface FormData {
    name: string;
    phone: string;
    email: string;
    photo: boolean;
    photoFile: string;
    fav: boolean;
    muted: boolean;
}


const ContactForm: React.FC<Readonly<ContactFormProps>> = ({ formType, setFormOpen }) => {
    
    const initFormData: FormData = {
        name: '',
        phone: '',
        email: '',
        photo: false,
        photoFile: '',
        fav: false,
        muted: false
    };

    const [formData, setFormData] = useState<FormData>(initFormData);
    const [image, setImage] = useState<string>('');
    const fileInputRef = useRef<HTMLInputElement>(null);


    // -------------------------------------------------------------------------------
    // Event that triggers hidden image type input in case upload button is clicked
    const handleImageUpload = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    // Event that runs if user tries to delete uploaded image
    const handleImageDelete = () => {
        emptyImage();
        setFormData((prevFormData) => ({
            ...prevFormData,
            ['photo']: false,
            ['photoFile']: ''
        }));
    }

    // Event that runs in case image file has been changed
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;
        const imageFile = event.target.files[0];
        if (!imageFile) return
        const imageObjectUrl = URL.createObjectURL(imageFile);
        setImage(imageObjectUrl);
        setFormData((prevFormData) => ({
            ...prevFormData,
            ['photo']: true,
            ['photoFile']: imageObjectUrl
        }));

      };

    // Event that runs every time when inputs are updated
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));

        console.log(formData)
    };

    // Empties image
    const emptyImage = () => {
        if (!image) return;
        URL.revokeObjectURL(image);
        setImage('');
        fileInputRef.current!.value = ''
    }

    // Closes Contact Form
    const toggleClose = () => {
        emptyImage()
        setFormOpen(null)
      };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                // Handle successful form submission
                console.log('Sikeres beküldés.');
                setFormData(initFormData);
                toggleClose()
                // setSuccess(true)
            } else {
                // Handle form submission error
                console.log('Hiba a beküldés során.');
                // setSuccess(false)
            }
        } catch (error) {
            console.error('Hiba a beküldés során: ', error);
            // setSuccess(false)
            // handleOpenDialog()
        }
    };

    // -------------------------------------------------------------------------------

    return (
        <div className={styles.wrapper}>
            <div className={styles.form}>
                <div className={styles.info}>

                    {/* -------------------------------------------------- */}
                    {/* Header Text */}
                    {/* -------------------------------------------------- */}
                    <Text text={formType === "Add" ? "Add contact" : "Edit contact"} texttype={2} clr={1}></Text>

                    {/* -------------------------------------------------- */}
                    {/* Image upload section */}
                    {/* -------------------------------------------------- */}
                    <div className={styles.imagesection}>
                        <Profilepic size="big" img={image ? image : ''}></Profilepic>
                        <Button 
                            buttonType='both'
                            colorType='normal'
                            icon={!image ? 'Add' : 'Change'}
                            text={!image ? 'Add picture' : 'Change picture'}
                            onClick={handleImageUpload}
                        />
                        <input
                                ref={fileInputRef}
                                accept="image/*"
                                type="file" 
                                hidden
                                onChange={handleImageChange}
                            />  
                        { image &&
                            <Button
                                buttonType="onlyicon"
                                colorType="normal"
                                icon="Delete"
                                text=""
                                onClick={handleImageDelete}
                            />
                        }
                    </div>

                    {/* -------------------------------------------------- */}
                    {/* Input data form section */}
                    {/* -------------------------------------------------- */}
                    <form className={styles.formsection} onSubmit={handleSubmit}>
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
                            onChange={handleChange}
                            value={formData.name}
                        />
                        </div>
                        <div className={styles.inputField}>
                            <label htmlFor="phone" className={styles.inputLabel}>
                                <Text text="Phone" texttype={5} clr={2}></Text>
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                placeholder='+01 234 5678'
                                className={styles.input}
                                autoComplete="off"
                                onChange={handleChange}
                                value={formData.phone}
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
                                onChange={handleChange}
                                value={formData.email}
                            />
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
                                icon="Add"
                                text="Done"
                                btnType='submit'
                            />
                        </div>  
                    </form>
                </div>
                
            </div>
        </div>
    )
}

export default ContactForm;