import express, { Request, Response } from "express";

/**
 * This is a TypeScript file, it contains types
 * and cannot be natively run by Node.
 * It can, however, be compiled into a JS file
 * by, for example, the "prestart" npm script.
 * 
 */

const app = express();
const port: number = 8000;
const echo: string = "I'm a TypeScript app running in Node!"

app.get("/", (req: Request, res: Response) => {
    res.send(echo);
});

app.listen(port, () => {
    console.log(`Compiled successfully, the app is listening on port ${port}`);
});
