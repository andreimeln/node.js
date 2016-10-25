var HTMLParser = require('fast-html-parser');
 
var root = HTMLParser.parse('<ul id="list"><li>Hello World</li></ul>');
 
var colors = require('colors');

console.log(root.firstChild.structure.green);
console.log(root.querySelector('#list'));
