import { PrismaClient } from '@prisma/client';
import type { Author } from '../models/Author';

const prisma = new PrismaClient();

export function getAllAuthors(): Promise<Author[]> {
    return prisma.author.findMany();
}