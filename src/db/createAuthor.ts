import { PrismaClient } from '@prisma/client';
import { Author } from '../models/Author';

const prisma = new PrismaClient();

export async function createAuthors() {
    const authors: Author[] = [
        {
            name: "Author One",
            agency: "Agency A",
        },
        {
            name: "Author Two",
            agency: "Agency B",
        },
        {
            name: "Author Three",
            agency: "Agency C",
        },
        {
            name: "Author Four",
            agency: "Agency D",
        },
        {
            name: "Author Five",
            agency: "Agency E",
        },
        {
            name: "Author Six",
            agency: "Agency F",
        }
    ];

    for (const author of authors) {
        await prisma.author.create({
            data: {
                name: author.name,
                agency: author.agency,
            }
        });
    }

    console.log("Database has been initialized with authors.");
}