const fs = require("fs");
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const html = fs.readFileSync("./notesbook.html", "utf8");

  await page.setContent(html, { waitUntil: "networkidle0" });

  await page.pdf({
    path: "./nootebook.pdf",
    format: "A4",
    printBackground: true,
    width: '210mm',
    height: '297mm'
  });

  await browser.close();
  console.log("PDF created successfully!");
})();
