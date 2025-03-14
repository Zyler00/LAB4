import type { Book } from "../models/Book";
import * as repo from "../repository/bookRepositoryPrisma";

export function getBookByTitle(title: string): Promise<Book[]> {
    return repo.getBookByTitle(title);
}
export function getAllBooks(): Promise<Book[]> {
    return repo.getAllBooksWithAuthor();
}