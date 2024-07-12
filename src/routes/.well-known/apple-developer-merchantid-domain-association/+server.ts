import { readFileSync } from "fs";
import { resolve } from "path";

export function GET() {
  const filePath = resolve(
    "static/apple-developer-merchantid-domain-association"
  );
  const fileContent = readFileSync(filePath, "utf-8");

  return new Response(fileContent, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
