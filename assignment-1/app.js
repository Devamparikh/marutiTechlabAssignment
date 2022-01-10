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

    response.body.items.forEach(item => {

      if (item.language === 'Python' && item.forks_count >= 200 ) {
        console.log('----------------------------------');
        console.log('Name: ' + item.name);
        console.log('Description: ' + item.description);
        console.log('Html Url: ' + item.html_url);
        console.log('Watchers Count: ' + item.watchers_count);
        console.log('Stargazers Count: ' + item.stargazers_count);
        console.log('Forks Count: ' + item.forks_count);
      }else{
        console.log('No such item with language python and forks count above 200 is found.')
      }
      
    });

    // console.log(response.body.items[0]);
    // console.log(info.forks_count + " Forks");
  }else{
    console.log(error);
  }
}
 
request(options, callback);