var path = require('path');
var userName = process.env['USERPROFILE'];
var loginId = path.join("domainName",userName);
console.log(loginId);