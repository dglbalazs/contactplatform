

export interface FormData {
    id?: number;
    name: string;
    phone: string;
    email: string;
    photo: boolean;
    photoFile: File | null;
    fav: boolean;
    muted: boolean;
}

export type ContactType = {
    id: number;
    name: string;
    email: string;
    phone: string;
    photo: boolean;
    fav: boolean;
    muted: boolean;
}