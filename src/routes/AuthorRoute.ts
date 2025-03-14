import express, { Request, Response } from "express";
import { getAllAuthors} from "../services/AuthorService";
import type { Author} from "../models/Author";
import exp from "constants";
const router = express.Router();

router.get("/", async(req, res) => {
    res.json(await getAllAuthors());
});

export default router;