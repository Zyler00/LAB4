import { PrismaClient } from '@prisma/client';
import type { Member } from '../models/Member';

const prisma = new PrismaClient();

export function getAllMembers(): Promise<Member[]> {
    return prisma.member.findMany();
}

export function getMemberByName(name: string): Promise<Member[]> {
    return prisma.member.findMany({
        where: { name },
    });
}

export function getMemberById(id: number): Promise<Member | null> {
    return prisma.member.findUnique({
        where: { id },
    });
}