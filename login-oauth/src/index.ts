import express, {Request, Response} from "express";

const app = express();

app.post("/signin", (req: Request, res: Response) => {
    res.status(200).send("Sign in");
})

app.post("/signup", (req: Request, res: Response) => {})
app.post("/signout", (req: Request, res: Response) => {})

