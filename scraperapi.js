const axios = require('axios');
const cheerio = require('cheerio')
const url = 'https://github.com/Sighmore';//reades the repositorieson github
    axios(url)
        .then(response => {
            const html = response.data;
            const $ = cheerio.load(html)
            const repositories = $('.pinned-item-desc').text()//classname of the pinnnd github repos
            console.log(repositories);
        })
        .catch(console.error);
