import { Author } from "./Author";

export interface Book {
    id?: number;
    title?: string;
    isbn?: string | null;
    type?: string;
    authorId?: number | null;
    author?: Author | null;
} 