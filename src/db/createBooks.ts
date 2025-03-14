import { PrismaClient } from '@prisma/client';
import { Book } from '../models/Book';

const prisma = new PrismaClient();

export async function createBooks() {
    const books: Book[] = [
        {
            title: "Concert",
            type: "Music",
            authorId: 1,
        },
        {
            title: "Festival",
            type: "Music",
            authorId: 2,
        },
        {
            title: "Football Match",
            type: "Sports",
            authorId: 3,
        },
        {
            title: "Jazz Night",
            type: "Music",
            authorId: 4,
        },
        { 
            title: "Shakespeare in the Park",
            type: "Theatre",
            authorId: 5,
        },
        {
            title: "Food Truck Festival",
            type: "Food",
            authorId: 6,
        }
    ];

    for (const book of books) {
        await prisma.book.create({
            data: {
                title: book.title,
                type: book.type,
                authorId: book.authorId,
            }
        });
    }

    console.log("Database has been initialized with books.");
}