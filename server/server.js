const express = require('express');
const app = express();
const cheerio = require('cheerio');
const fs = require('fs');
const _ = require('lodash');

const clientPath = `${__dirname}/../pokrovitelji`;
const razgledniceJson = require('../pokrovitelji/src/assets/razglednice.json')
const vueConfig = require('../pokrovitelji/vue.config');

// Load index.html
const indexHtml = fs.readFileSync(`${clientPath}/dist/index.html`, 'utf8');
const baseUrl = vueConfig.publicPath;
const razglednice = razgledniceJson.razglednice;

razglednice.forEach((rzg) => {
  app.get(`${baseUrl}${rzg.link}`, async (req, res) => {
    try {
      const $ = cheerio.load(indexHtml);
      $('.removeme').remove();

      $('title').text(`Ustavimo botre sovraštva`);
      $('head').append(`
        <title>${rzg.title}</title>
        <meta property="og:url" content="https://botri-sovrastva.danesjenovdan.si${baseUrl}${rzg.link}">
        <meta property="og:title" content="${rzg.title}">
        <meta name="twitter:title" content="${rzg.title}">

        <meta property="og:image" content="https://botri-sovrastva.danesjenovdan.si${baseUrl}razglednice/${rzg.imgSrc}?cachemeoutside=1">
        <meta name="twitter:image" content="https://botri-sovrastva.danesjenovdan.si${baseUrl}razglednice/${rzg.imgSrc}?cachemeoutside=1">

        <meta property="og:description" content="${rzg.description}">
        <meta name="twitter:description" content="${rzg.description}">
      `);

      res.send($.html());
    } catch (err) {
      console.log(err);
      res.status(400).send('Something went wrong');
    }
  });
});

app.use(`${baseUrl}`, express.static(`${clientPath}/dist`));

app.listen(7001, () => {
  console.log('Server listening on port 7001');
});
