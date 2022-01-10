const request = require('request');
 
const options = {
  url: 'https://api.github.com/search/repositories?q=is:public',
  headers: {
    'User-Agent': 'request'
  },
  json: true
};
 
function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    // const info = JSON.parse(body);
    console.log(response.body.items[0]);
    // console.log(info.forks_count + " Forks");
  }else{
    console.log(error);
  }
}
 
request(options, callback);