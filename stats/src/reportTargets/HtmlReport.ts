import { writeFileSync } from "node:fs";
import { OutputTarget } from "../Summary";

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `
      <!doctype html>
      <html>
        <head>
          <title>Football Season Report</title>
        </head>
        <body>
          <h1>Analysis Output</h1>
          <article>${report}</article>
        </body>
      </html>
    `;
    writeFileSync("report.html", html, { encoding: "utf-8" });
  }
}
