import { Book } from "./Book";
import { Member } from "./Member";

export interface History {
    id?: number;
    bookId?: number | null;
    book?: Book | null;
    memberId?: number | null;
    member?: Member | null;
    borrowDate?: Date;
    returnDate?: Date | null;
    status?: string;
}