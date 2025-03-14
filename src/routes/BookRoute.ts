import express, { Request, Response } from "express";
import { getAllBooks, getBookByTitle } from "../services/BookService";
import type { Book } from "../models/Book";
import exp from "constants";
const router = express.Router();

router.get("/", async(req, res) => {
    if (req.query.title) {
        const title= req.query.title;
        const filteredBooks = await getBookByTitle(title as string);
        res.json(filteredBooks);
    } else {
        res.json(await getAllBooks());
    }
});

export default router;