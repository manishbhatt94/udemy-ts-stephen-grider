import { Router, Request, Response } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

router.get("/login", (req: Request, res: Response) => {
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
});

router.post("/login", (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email && password && email === "hi@abc.com" && password === "manish") {
    req.session = { isLoggedIn: true };
    res.redirect("/");
  } else {
    res.send("Invalid credentials");
  }
});

router.get("/logout", (req: Request, res: Response) => {
  req.session = null;
  res.redirect("/");
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
            <a href="/logout">Logout</a>
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
            <a href="/login">Login</a>
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
