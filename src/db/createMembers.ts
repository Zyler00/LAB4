import { PrismaClient } from '@prisma/client';
import { Member } from '../models/Member';

const prisma = new PrismaClient();

export async function createMembers() {
    const members: Member[] = [
        {
            name: "Member One",
            phone: "123-456-7890",
        },
        {
            name: "Member Two",
            phone: "234-567-8901",
        },
        {
            name: "Member Three",
            phone: "345-678-9012",
        },
        {
            name: "Member Four",
            phone: "456-789-0123",
        },
        {
            name: "Member Five",
            phone: "567-890-1234",
        },
        {
            name: "Member Six",
            phone: "678-901-2345",
        }
    ];

    for (const member of members) {
        await prisma.member.create({
            data: {
                name: member.name,
                phone: member.phone,
            }
        });
    }

    console.log("Database has been initialized with members.");
}