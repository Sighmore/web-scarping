const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
let scraped_headlines = [];

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try {
        await page.goto('https://www.investing.com/currencies/eur-usd-chart', {timeout: 180000});
        let bodyHTML = await page.evaluate(() => {
            const div = document.createElement('div');
            div.className = 'text-5xl/9 font-bold text-[#232526] md:text-[42px] md:leading-[60px]';
            div.setAttribute('data-test', 'instrument-price-last');
            div.textContent = '';
            document.body.appendChild(div);
            return document.body.innerHTML;
        });
        let $ = cheerio.load(bodyHTML);
        let article_headlines = $('a[href*="/r/webscraping/comments"] > div');
        article_headlines.each((index, element) => {
            title = $(element).find('h3').text();
            scraped_headlines.push({
                'title': title
            });
        });
    }
    catch(err) {
        console.log(err);
    }
    await browser.close();
    console.log(scraped_headlines);
})();