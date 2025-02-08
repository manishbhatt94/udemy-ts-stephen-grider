import { Request, Response } from "express";
import { get, controller } from "./decorators";

@controller("/auth")
export class LoginController {
  @get("/login")
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
            <form method="POST" action="/login">
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
}
