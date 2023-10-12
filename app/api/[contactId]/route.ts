import prisma from "../../lib/prisma";
import { NextResponse, NextRequest } from "next/server";

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

        return NextResponse.json({ message: 'Contact deleted successfully' });
        
     } catch (error) {
         console.error (error);
         return NextResponse.json(res)
     }      
}