import { createBooks } from './db/createBooks';
import { PrismaClient } from '@prisma/client';
import { createAuthors } from './db/createAuthor';
import { createMembers } from './db/createMembers';
import { createHistory } from './db/createHistory';

const prisma = new PrismaClient();
async function main() {
     await createAuthors();
     await createMembers ();
     await createBooks();     
     await createHistory();
}
    
main()