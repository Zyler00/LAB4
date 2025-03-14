import express, { Request, Response } from "express";
import { getAllMembers, getMemberByName, getMemberById } from "../services/MemberService";
import type { Member } from "../models/Member";
import exp from "constants";
const router = express.Router();

router.get("/", async(req, res) => {
    if (req.query.name) {
        const name= req.query.name;
        const filteredBooks = await getMemberByName(name as string);
        res.json(filteredBooks);
    } else {
        res.json(await getAllMembers());
    }
});

router.get("/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const member = await getMemberById(id);
    if (member) {
        res.json(member);
    } else {
        res.status(404).send("member not found");
    }
});

export default router;