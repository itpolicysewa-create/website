import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.policysewa.in";
const outDir = path.resolve(process.cwd(), "out");

const routes = [
  "/",
  "/about-us",
  "/insurance-partners",
  "/insurance-products",
  "/why-choose-us",
  "/claims-assistance",
  "/contact-us",
  "/get-a-quote",
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${siteUrl}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === "/" ? "1.0" : "0.8"}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

const llmsTxt = `# POLICY SEWA

> Trusted insurance broker with 10+ years of experience and 20+ insurer partnerships.

## Website
- ${siteUrl}

## Key Pages
- ${siteUrl}/
- ${siteUrl}/about-us
- ${siteUrl}/insurance-partners
- ${siteUrl}/insurance-products
- ${siteUrl}/why-choose-us
- ${siteUrl}/claims-assistance
- ${siteUrl}/contact-us
- ${siteUrl}/get-a-quote

## Services
- Insurance consultation and policy comparison
- Personalized policy recommendations
- Claims assistance support

## Partners
- Star Health
- Care Health
- 20+ insurance company partnerships
`;

await mkdir(outDir, { recursive: true });
await writeFile(path.join(outDir, "sitemap.xml"), sitemapXml, "utf8");
await writeFile(path.join(outDir, "robots.txt"), robotsTxt, "utf8");
await writeFile(path.join(outDir, "llms.txt"), llmsTxt, "utf8");

console.log("Generated sitemap.xml, robots.txt, and llms.txt in /out");
