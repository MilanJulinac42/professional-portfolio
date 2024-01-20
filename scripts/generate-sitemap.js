const fs = require("fs");
const { create } = require("xmlbuilder2");

const pages = [
    {
        url: "https://wedevelop.rs/",
        lastmod: "2024-01-20",
        changefreq: "weekly",
        priority: 1.0,
    },
    {
        url: "https://wedevelop.rs/about",
        lastmod: "2024-01-20",
        changefreq: "monthly",
        priority: 0.8,
    },
    {
        url: "https://wedevelop.rs/services",
        lastmod: "2024-01-20",
        changefreq: "monthly",
        priority: 0.8,
    },
    {
        url: "https://wedevelop.rs/contact",
        lastmod: "2024-01-20",
        changefreq: "monthly",
        priority: 0.8,
    },
];

const sitemap = create({
    version: "1.0",
    encoding: "UTF-8",
}).ele("urlset", { xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9" });

pages.forEach((page) => {
    sitemap
        .ele("url")
        .ele("loc")
        .txt(page.url)
        .up()
        .ele("lastmod")
        .txt(page.lastmod)
        .up()
        .ele("changefreq")
        .txt(page.changefreq)
        .up()
        .ele("priority")
        .txt(page.priority)
        .up()
        .up();
});

const xmlString = sitemap.end({ prettyPrint: true });

fs.writeFileSync("sitemap.xml", xmlString, "utf-8");
console.log("Sitemap generated successfully.");
