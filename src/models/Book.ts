import { Author } from "./Author";

export interface Book {
    id?: number;
    title?: string | null;
    isbn?: string | null;
    type?: string | null;
    authorId?: number | null;
    author?: Author | null;
} 