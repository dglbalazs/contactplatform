"use client";
import Button from "@/app/components/Utility/Button";
import Profilepic from "@/app/components/Utility/Profilepic";
import Text from "@/app/components/Utility/Text";
import styles from "./Contact.module.scss"
import More from "./More";
import { useState } from "react";
import ContactForm from "../../form/ContactForm";
import { s3BaseUrl } from "@/app/lib/s3";


type ContactType = {
    id: number;
    name: string;
    email: string;
    phone: string;
    photo: boolean;
    fav: boolean;
    muted: boolean;
}

interface ContactProps {
    isOpen: boolean,
    onToggle: () => void,
    formOpen: string | null,
    data: ContactType,
    requestUpdate: () => void,
    onEditOpen: () => void,
  }

const Contact: React.FC<Readonly<ContactProps>> = ({ isOpen, onToggle, formOpen, data, requestUpdate,onEditOpen }) => {


    const handleDeleteClick = async () => {
        try {
          const { id }  = data;
          try {
            const response = await fetch(`/api/del?id=${id}`, {
              method: 'DELETE',
            });
          
            if (response.ok) {
              // Handle success
              requestUpdate()
              console.log(`Successfully deleted item with id ${id}`);
            } else {
              // Handle errors
              console.error(`Error deleting item with id ${id}`);
            }
          } catch (error) {
            // Handle network or other errors
            console.error('An error occurred:', error);
          }
        //   updateData();
        } catch (error) {
          console.error('Error:', error);
        }
    };
    
    const handleEditOpen = (value: "Edit") => {
        onEditOpen();
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.information}>
                <Profilepic size="small" img={data.photo ? s3BaseUrl + data.id : ''}></Profilepic>   
                <div className={styles.details}>
                <Text text={data.name} texttype={4} clr={1}></Text>
                <Text text={data.phone} texttype={5} clr={2}></Text>
                </div>
            </div>
            <div className={`${styles.menuoptions} ${isOpen ? styles.opened : ''}`}>
                <Button
                    buttonType="onlyicon"
                    colorType="deep"
                    icon="Mute"
                    text=""
                    hideMobile
                />
                <Button
                    buttonType="onlyicon"
                    colorType="deep"
                    icon="Call"
                    text=""
                    hideMobile
                />
                <Button
                    buttonType="onlyicon"
                    colorType="deep"
                    icon="More"
                    text=""
                    onClick={onToggle}
                />
            </div>
            {isOpen && (
                <More onToggle={onToggle} onDeleteClick={handleDeleteClick} onEditToggle={() => handleEditOpen("Edit")}></More>
            )}
        </div>
    )
}

export default Contact;