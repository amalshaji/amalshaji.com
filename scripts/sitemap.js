import fs from 'fs'
import fg from 'fast-glob'

const url = "https://amalshaji.com"

async function generateSiteMap() {
    const pages = await fg("./build/**/*.html")
    for (let page in pages) {
        console.log(pages[page].replace("./build", "").replace("/index.html", ""))
    }
    const sitemapXml = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages.map(
        (page) => `<url><loc>${url}${page.replace("./build", "").replace("/index.html", "")}</loc></url>`
    ).join('')}
    </urlset >
        `
    fs.writeFileSync("./build/sitemap.xml", sitemapXml)
}

generateSiteMap()