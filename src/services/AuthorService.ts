import type { Author } from "../models/Author";
import * as repo from "../repository/authorRepositoryPrisma";

export function getAllAuthors(): Promise<Author[]> {
    return repo.getAllAuthors();
}