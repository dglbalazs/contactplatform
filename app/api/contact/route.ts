import prisma from "../../lib/prisma";
import { NextResponse, NextRequest } from "next/server";

import { generateUploadURL } from "@/app/lib/s3";

export const GET = async (req: Request, res: Response) => {
    try {
       const contacts = await prisma?.contact.findMany();
       return NextResponse.json(contacts)
    } catch (error) {
        console.error (error);
        return NextResponse.json(res)
    }      
}


export const POST = async (req: Request) => {
    const formData = await req.json();
    try {
        const createdContact = await prisma?.contact.create({
            data: {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                photo: formData.photo,
                fav: formData.fav,
                muted: formData.muted,
            }
        });

        if (createdContact) {
            const contactId = createdContact.id;
            const generatedUrl = await generateUploadURL(contactId);

            const newContact = {
                data: {
                    name: createdContact.name,
                    email: createdContact.email,
                    phone: createdContact.phone,
                    photo: createdContact.photo,
                    fav: createdContact.fav,
                    muted: createdContact.muted,
                    generatedUrl
                }
            }

            return NextResponse.json({ newContact, putUrl: generatedUrl });
        } else {
            // Handle the case where the contact creation failed.
            return NextResponse.json({ error: 'Contact creation failed' });
        }

    } catch (error) {
        console.error('Error creating contact:', error);
        return NextResponse.json(formData)
    }
}


export const PUT = async (req: Request) => {
    const formData = await req.json();
    const contactId = formData.id; // Assuming you have an 'id' field in formData to identify the contact to update
    
    try {
        const existingContact = await prisma?.contact.findUnique({
            where: {
                id: contactId,
            },
        });

        if (!existingContact) {
            // Handle the case where the contact to update doesn't exist.
            return NextResponse.json({ error: 'Contact not found' });
        }

        const updatedContact = await prisma?.contact.update({
            where: {
                id: contactId,
            },
            data: {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                photo: formData.photo,
                fav: formData.fav,
                muted: formData.muted,
            },
        });

        if (updatedContact) {
            // Handle a successful update.
            return NextResponse.json({ updatedContact });
        } else {
            // Handle the case where the update failed.
            return NextResponse.json({ error: 'Contact update failed' });
        }

    } catch (error) {
        console.error('Error updating contact:', error);
        return NextResponse.json({ error: 'An error occurred' });
    }
}