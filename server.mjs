import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, resolve } from "node:path";

const root = resolve(".");
const port = Number(process.env.PORT || 8000);
const host = "127.0.0.1";
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".md": "text/plain; charset=utf-8"
};

createServer(async (request, response) => {
  const url = new URL(request.url || "/", `http://${host}:${port}`);
  const target = resolve(join(root, url.pathname === "/" ? "index.html" : url.pathname));

  if (!target.startsWith(root)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  try {
    const file = await readFile(target);
    response.writeHead(200, {
      "content-type": types[extname(target)] || "application/octet-stream"
    });
    response.end(file);
  } catch {
    response.writeHead(404);
    response.end("Not found");
  }
}).listen(port, host, () => {
  console.log(`CineMatch running at http://${host}:${port}`);
});
