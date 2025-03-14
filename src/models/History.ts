import { Book } from "./Book";
import { Member } from "./Member";

export interface History {
    id?: number;
    bookId?: number | null;
    book?: Book | null;
    memberId?: number | null;
    member?: Member | null;
    borrowDate?: string | null;
    returnDate?: string | null;
    status?: string;
}