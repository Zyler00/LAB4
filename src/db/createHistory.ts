import { PrismaClient } from '@prisma/client';
import { History } from '../models/History';

const prisma = new PrismaClient();

export async function createHistory() {
    const historyRecords: History[] = [
        {
            borrowDate: new Date('2025-01-01').toISOString(),
            returnDate: new Date('2025-01-15').toISOString(),
        },
        {
            borrowDate: new Date('2025-02-01').toISOString(),
            returnDate: new Date('2025-02-15').toISOString(),
        },
        {
            borrowDate: new Date('2025-03-01').toISOString(),
            returnDate: new Date('2025-03-15').toISOString(),
        },
        {
            borrowDate: new Date('2025-04-01').toISOString(),
            returnDate: new Date('2025-04-15').toISOString(),
        },
        {
            borrowDate: new Date('2025-05-01').toISOString(),
            returnDate: new Date('2025-05-15').toISOString(),
        },
        {
            borrowDate: new Date('2025-06-01').toISOString(),
            returnDate: new Date('2025-06-15').toISOString(),
        }
    ];

    for (const record of historyRecords) {
        await prisma.history.create({
            data: {
                memberId: record.memberId,
                bookId: record.bookId,
                borrowDate: record.borrowDate ?? new Date().toISOString(),
                returnDate: record.returnDate,
            }
        });
    }

    const resposneBooks = await prisma.book.findMany();

    const responseMember = await prisma.member.findMany();
    const responseHistory = await prisma.history.findMany();

    addMemberAndBook(resposneBooks[0].id, responseMember[0].id, responseHistory[0].id);
    addMemberAndBook(resposneBooks[1].id, responseMember[1].id, responseHistory[1].id);
    addMemberAndBook(resposneBooks[2].id, responseMember[2].id, responseHistory[2].id);
    addMemberAndBook(resposneBooks[3].id, responseMember[3].id, responseHistory[3].id);
    addMemberAndBook(resposneBooks[4].id, responseMember[4].id, responseHistory[4].id);
    addMemberAndBook(resposneBooks[5].id, responseMember[5].id, responseHistory[5].id);

    console.log("Database has been initialized with history records.");
}

async function addMemberAndBook(bookId: number, memberId: number, historyId: number) {
    await prisma.history.update({
      where: { id: historyId },
      data: {
        book: {
          connect: {
            id: bookId
          }
        },
        member: {
            connect: {
              id: memberId
            }
        },
      }
    })
  }