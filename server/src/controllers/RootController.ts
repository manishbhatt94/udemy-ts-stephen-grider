import { Request, Response, NextFunction } from "express";
import { get, controller, use } from "./decorators";

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.isLoggedIn) {
    return next();
  }
  res.status(403).send("Not permitted");
}

@controller("")
export class RootController {
  @get("/")
  getRoot(req: Request, res: Response): void {
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
  }

  @get("/protected")
  @use(requireAuth)
  getProtected(req: Request, res: Response): void {
    res.send("Welcome to protected route, logged in user!");
  }
}
