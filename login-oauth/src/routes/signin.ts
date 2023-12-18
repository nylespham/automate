import express, { Request, Response } from "express";
import { body } from "express-validator";
import { validateRequest } from "../middlewares/validate-request";

const router = express.Router();

router.post("/users/signin", [
    body("username").isEmail().withMessage("Username must be an email"),
    body("password").trim().notEmpty().withMessage("Password cannot be empty")
], 
validateRequest,
(req: Request, res: Response) => {
    const { username, password } = req.body;
    console.log(username, password);
    res.status(201).send({})
})

export { router as signinRouter };