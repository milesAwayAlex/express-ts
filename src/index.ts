import express from 'express';

/**
 * This is a TypeScript file, it contains types
 * and cannot be natively run by Node.
 * It can, however, be compiled into a JS file
 * by, for example, the "prestart" npm script.
 *
 */

// type annotations on variables are optional
const app: express.Application = express();
const port: number = 8000;
const echo: string = "I'm a TypeScript app running in Node!";

// here type 'string' is inferred
const reportMessage = 'Compiled successfully, the app is listening on port';

// function parameters and return value can be annotated
const report = (message: string, port: number): void => {
  console.log(message, port);
};

// parameter type annotations can be added to callbacks
app.get('/', (req: express.Request, res: express.Response) => {
  res.send(echo);
});

// alternatively, callback parameter types can be inferred
app.listen(port, () => {
  report(reportMessage, port);
});
