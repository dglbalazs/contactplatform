import prisma from "../../lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import { deleteObject } from "@/app/lib/s3";

export const DELETE = async (req: NextRequest, res: NextResponse) => {
    try {
        const id = req.nextUrl.searchParams.get('id')
        if (!id) {
            
            return NextResponse.json({ error: 'Contact id is missing in the query parameters' });
        }

        await prisma?.contact.delete({
            where: {
                id: Number(id),
            },
        });

        deleteObject(Number(id))
        return NextResponse.json({ message: 'Contact deleted successfully' });

     } catch (error) {
         console.error (error);
         return NextResponse.json(res)
     }      
}