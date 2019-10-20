var Sitemapper = require('sitemapper');
 
var sitemap = new Sitemapper();
 
sitemap.fetch('https://ciphertrick.com/sitemap.xml').then(function(sites) {
  console.log(sites);
});