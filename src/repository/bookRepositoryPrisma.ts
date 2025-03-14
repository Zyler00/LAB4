import { PrismaClient } from '@prisma/client';
import type { Book } from '../models/Book';

const prisma = new PrismaClient();

export function getBookByTitle(title: string): Promise<Book[]> {
    return prisma.book.findMany({
        where: { title },
    });
}

export function getAllBooks(): Promise<Book[]> {
    return prisma.book.findMany();
}

export function getAllBooksWithAuthor(): Promise<Book[]> {
    return prisma.book.findMany({
        select: {
            id: true,
            title: true,
            authorId: false,
            author: {
                select: {
                    name: true,
                },
            },
        },
    });
}