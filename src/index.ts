import express, { Request, Response} from 'express'
import dotenv from 'dotenv';
import bookRoute from './routes/BookRoute';
import authorRoute from './routes/AuthorRoute';
import memberRoute from './routes/MemberRoute';

dotenv.config();

const app = express()
app.use(express.json()) 
app.use('/books',bookRoute);
app.use('/authors',authorRoute);
app.use('/members',memberRoute);
const port = 3000

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})