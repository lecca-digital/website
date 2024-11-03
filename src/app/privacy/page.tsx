import { promises as fs } from "fs";
import path from "path";

// This function is used to read the HTML file on the server side
async function getHtmlContent(): Promise<string> {
  const filePath = path.join(process.cwd(), "public", "files", "privacy.html");
  const htmlContent = await fs.readFile(filePath, "utf8");
  return htmlContent;
}

export default async function Privacy() {
  const htmlContent = await getHtmlContent();
  return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlContent }}
      className="p-4 max-w-6xl mx-auto pb-20"
    />
  );
}
