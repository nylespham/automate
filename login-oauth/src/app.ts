import express from "express";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";
import { json } from "body-parser";

const port = 3100;
const app = express();

app.use(json());
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});