import { NextFunction, Request, Response } from "express";
import { get, controller, use, post, bodyValidator } from "./decorators";

function logger(req: Request, res: Response, next: NextFunction) {
  console.log("Request was made");
  next();
}

function secondLogger(req: Request, res: Response, next: NextFunction) {
  console.log("This is second logger");
  next();
}

@controller("/auth")
export class LoginController {
  @get("/login")
  @use(logger)
  @use(secondLogger)
  getLogin(req: Request, res: Response): void {
    res.send(`
      <!doctype html>
      <html lang="en">
        <head>
          <title>Login - Express with TS</title>
        </head>
        <body>
          <h1>Login</h1>
          <article>
            <form method="POST" action="/auth/login">
              <p>
                <label for="email">Email</label>
                <input type="email" name="email" id="email" />
              </p>
              <p>
                <label for="password">Password</label>
                <input type="password" name="password" id="password" />
              </p>
              <button type="submit">Login</button>
            </form>
          </article>
        </body>
      </html>
    `);
  }

  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response): void {
    const { email, password } = req.body;

    if (email && password && email === "hi@abc.com" && password === "manish") {
      req.session = { isLoggedIn: true };
      res.redirect("/");
    } else {
      res.send("Invalid credentials");
    }
  }

  @get("/logout")
  getLogout(req: Request, res: Response): void {
    req.session = null;
    res.redirect("/");
  }
}
