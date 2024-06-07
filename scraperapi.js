const axios = require('axios');
const cheerio = require('cheerio')
const url = 'https://github.com/Sighmore';
    axios(url)
        .then(response => {
            const html = response.data;
            const $ = cheerio.load(html)
            const repositories = $('.pinned-item-desc').text()
            console.log(repositories);
        })
        .catch(console.error);