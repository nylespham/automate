import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { validateRequest } from "../middlewares/validate-request";

const router = express.Router();

router.post("/users/signin", [
    body("username").isEmail().withMessage("Username must be an email"),
    body("password").trim().notEmpty().withMessage("Password cannot be empty")
], 
validateRequest,
(req: Request, res: Response) => {
    const result = validationResult(req);
    const { username, password } = req.body
    console.log(username, password);
})

export { router as signinRouter };