import { PrismaClient } from '@prisma/client';
import { History } from '../models/History';

const prisma = new PrismaClient();

export async function createHistory() {
    const historyRecords: History[] = [
        {
            memberId: 1,
            bookId: 1,
            borrowDate: new Date('2025-01-01'),
            returnDate: new Date('2025-01-15'),
        },
        {
            memberId: 2,
            bookId: 2,
            borrowDate: new Date('2025-02-01'),
            returnDate: new Date('2025-02-15'),
        },
        {
            memberId: 3,
            bookId: 3,
            borrowDate: new Date('2025-03-01'),
            returnDate: new Date('2025-03-15'),
        },
        {
            memberId: 4,
            bookId: 4,
            borrowDate: new Date('2025-04-01'),
            returnDate: new Date('2025-04-15'),
        },
        {
            memberId: 5,
            bookId: 5,
            borrowDate: new Date('2025-05-01'),
            returnDate: new Date('2025-05-15'),
        },
        {
            memberId: 6,
            bookId: 6,
            borrowDate: new Date('2025-06-01'),
            returnDate: new Date('2025-06-15'),
        }
    ];

    for (const record of historyRecords) {
        await prisma.history.create({
            data: {
                memberId: record.memberId,
                bookId: record.bookId,
                borrowDate: record.borrowDate,
                returnDate: record.returnDate,
            }
        });
    }

    console.log("Database has been initialized with history records.");
}