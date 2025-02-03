import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send(`
    <!doctype html>
    <html lang="en">
      <head>
        <title>Express with TS</title>
      </head>
      <body>
        <h1>Analysis Output</h1>
        <article></article>
      </body>
    </html>
  `);
});

export { router };
