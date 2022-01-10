const request = require('request');
const csv = require('csv');
var obj = csv()
 
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
    let data = [];
    response.body.items.forEach(item => {

      if (item.language === 'JavaScript' && item.forks_count >= 100 ) {
        console.log('----------------------------------');
        console.log('Name: ' + item.name);
        console.log('Description: ' + item.description);
        console.log('Html Url: ' + item.html_url);
        console.log('Watchers Count: ' + item.watchers_count);
        console.log('Stargazers Count: ' + item.stargazers_count);
        console.log('Forks Count: ' + item.forks_count);

        if (item.stargazers_count > 500) {
          data.push('|')
          data.push(item.name)
          data.push(item.description)
          data.push(item.html_url)
          data.push(item.watchers_count)
          data.push(item.stargazers_count)
          data.push(item.forks_count)
        }else{
          console.log('')
        }
      }else{
        console.log('No such item with language python and forks count above 200 is found.')
      }
      
    });
    console.log(data)
    if (data.length > 0) {
      obj.from.array(data).to.path('./dataInfo.csv');
    }else{
      console.log('not stored.')
    }
    // console.log(response.body.items[0]);
    // console.log(info.forks_count + " Forks");
  }else{
    console.log(error);
  }
}
 
request(options, callback);