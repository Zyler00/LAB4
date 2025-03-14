import { PrismaClient } from '@prisma/client';
import { Book } from '../models/Book';

const prisma = new PrismaClient();

export async function createBooks() {
    const books: Book[] = [
        {
            title: "Concert",
            type: "Music",
        },
        {
            title: "Festival",
            type: "Music",
        },
        {
            title: "Football Match",
            type: "Sports",
        },
        {
            title: "Jazz Night",
            type: "Music",
        },
        { 
            title: "Shakespeare in the Park",
            type: "Theatre",
        },
        {
            title: "Food Truck Festival",
            type: "Food",
        }
    ];

    for (const book of books) {
        await prisma.book.create({
            data: {
                title: book.title || '',
                type: book.type || '',
            }
        });
    }

    const resposneBooks = await prisma.book.findMany();

    const responseAuthor = await prisma.author.findMany();

    addAuthor(resposneBooks[0].id, responseAuthor[0].id);
    addAuthor(resposneBooks[1].id, responseAuthor[1].id);
    addAuthor(resposneBooks[2].id, responseAuthor[2].id);
    addAuthor(resposneBooks[3].id, responseAuthor[3].id);
    addAuthor(resposneBooks[4].id, responseAuthor[4].id);
    addAuthor(resposneBooks[5].id, responseAuthor[5].id);

    console.log("Database has been initialized with books.");
}

async function addAuthor(bookId: number, authorId: number) {
    await prisma.book.update({
      where: { id: bookId },
      data: {
        author: {
          connect: {
            id: authorId
          }
        }
      }
    })
  }