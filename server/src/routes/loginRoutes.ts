import { Router, Request, Response, NextFunction } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.isLoggedIn) {
    return next();
  }
  res.status(403).send("Not permitted");
}

const router = Router();

router.get("/logout", (req: Request, res: Response) => {
  req.session = null;
  res.redirect("/");
});

router.get("/protected", requireAuth, (req: Request, res: Response) => {
  res.send("Welcome to protected route, logged in user!");
});

router.get("/", (req: Request, res: Response) => {
  if (req.session && req.session.isLoggedIn) {
    res.send(`
      <!doctype html>
      <html lang="en">
        <head>
          <title>User Home - Express with TS</title>
        </head>
        <body>
          <nav>
            <a href="/auth/logout">Logout</a>
          </nav>
          <h1>User Homepage</h1>
          <article>
            <h2>Welcome to home page</h2>
            <p>You are logged in</p>
          </article>
        </body>
      </html>
    `);
  } else {
    res.send(`
      <!doctype html>
      <html lang="en">
        <head>
          <title>Guest Home - Express with TS</title>
        </head>
        <body>
          <nav>
            <a href="/auth/login">Login</a>
          </nav>
          <h1>Guest Homepage</h1>
          <article>
            <h2>Welcome guest!</h2>
            <p>Please login</p>
          </article>
        </body>
      </html>
    `);
  }
});

export { router };
