Overview

This tutorial is designed for junior developers who want to learn how to build a JavaScript web scraper. To get the most out of this guide, we recommend that you have:
JavaScript Experience: Familiarity with JavaScript is essential for this tutorial. If you're new to JavaScript, check out the w3bschool JavaScript tutorial or freeCodeCamp's JavaScript course.
Basic Knowledge of Web Page Structure: Understanding how web pages are structured is crucial for web scraping.
DevTools Skills: Knowing how to use DevTools to extract selectors of elements is helpful, but we'll cover it in the tutorial.

What You'll Learn

How to Build a JavaScript Web Scraper for Static and Dynamic Pages: We'll cover the basics of web scraping, including fetching HTML source code and parsing data.
Using Axios, puppeteer and Cheerio: Learn how to use Axios to fetch HTML and Cheerio to parse and extract data.
Scraping Dynamic Pages with Puppeteer: Discover how to use Puppeteer to control a headless Chromium browser and scrape dynamic content.

Step-by-Step Guide
Step 1: Install Node.js
Download Node.js from https://nodejs.org/en/download/ and follow the prompts.
Verify that Node.js and npm are installed by running node -v and npm -v in your terminal.

Step 2: Get Your Workspace Ready
Create a new folder called Web Scraper nodejs
Initialize a package.json file using npm init -y.
Install dependencies using npm and install Axis Cheerio Puppeer.

Step 3: Fetch the HTML Code Using Axios
Create a new file called scraperapi.js.

Step 4: Select the Elements You Want to Collect
Open the product page in your browser and use the DevTools to identify the elements you want to extract.
For this example, we'll extract the sale price.

Step 5: Parse the HTML Using Cheerio
Extract the sale price using const salePrice = $('.sale-price').text().

Step 6: Run the Scraper
Run the scraper using node scraperapi.js in your terminal.
The sale price will be printed to the console.

Conclusion
This projecy covers the basics of web scraping using JavaScript, Axios, and Cheerio. With these tools, you can build a web scraper to collect data from static web pages. For dynamic pages, you can use Puppeteer to control a headless chromium-browser and scrape the content.
