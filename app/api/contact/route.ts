import prisma from "../../lib/prisma";
import { NextResponse, NextRequest } from "next/server";

import { uploadImageToBucket } from "@/app/lib/s3";

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

            uploadImageToBucket(formData.photoFile, contactId);

            return NextResponse.json(createdContact);
        } else {
            // Handle the case where the contact creation failed.
            return NextResponse.json({ error: 'Contact creation failed' });
        }

    } catch (error) {
        console.error('Error creating contact:', error);
        return NextResponse.json(formData)
    }
}