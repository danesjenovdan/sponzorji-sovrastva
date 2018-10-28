const express = require('express');
const app = express();
const cheerio = require('cheerio');
const fs = require('fs');
const request = require('request-promise-native');
const ejs = require('ejs');
const webshot = require('webshot');

let ogCount = 0;

// Load index.html
const indexFile = fs.readFileSync(`${__dirname}/../pokrovitelji/dist/index.html`, 'utf8', (err, file) => err ? reject(err) : resolve(file));
const indexHtml = indexFile.toString();

// DO THIS FOR EVERY SPECIFIC SPONSOR
app.get('/pokrovitelji/triglav', async (req, res) => {

  try {
    const $ = cheerio.load(indexHtml);

    $('title').text('TRIGLAV OG TEXT');
    $('.removeme').remove();
    $('head').append(`
      <meta property="og:url" content="https://danesjenovdan.si/pokrovitelji/triglav" />
      <meta property="og:title" content="TRIGLAV TITLE" />
      <meta name="twitter:title" content="TRIGLAV TITLE">

      <meta property="og:image" content="TRIGLAV IMAGE" />
      <meta name="twitter:image" content="TRIGLAV IMAGE">

      <meta property="og:description" content="TRIGLAV DESCRIPTION" />
      <meta name="twitter:description" content="TRIGLAV DESCRIPTION">
    `);

    res.send($.html());

  } catch (err) {
    console.log(err);
    res.status(400).send('Something went wrong');
  }

});

app.use('/pokrovitelji', express.static(`${__dirname}/../pokrovitelji/dist`));

app.listen(7001, () => {
  console.log('Server listening on port 7001');
});