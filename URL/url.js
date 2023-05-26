const url = require('url')

const myUrl = new URL("http://localhost:3000")

myUrl.pathname = "a/b/c"
myUrl.search = '?a=c'
myUrl.hash = '#hash'

console.log("URL :", myUrl);
console.log("Href URL : ", myUrl.href);