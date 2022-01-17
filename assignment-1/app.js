// required modules used in assignment
const request = require('request');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// creating options variable as object to pass url to request function
const options = {
  url: 'https://api.github.com/search/repositories?q=is:public%20language:Python%20forks:%3E=200',
  //specification of user agent required for accessing github api
  headers: {
    'User-Agent': 'request'
  },
  // get responce in json formate
  json: true
};

// create object to store value in csv file (creating csv writer)
const csvWriter = createCsvWriter({
  path: './dataInfo.csv',
  header: [
      {id: 'name', title: 'NAME'},
      {id: 'lang', title: 'LANGUAGE'},
      {id: 'html_url', title: 'Html Url'},
      {id: 'watchers_count', title: 'Watchers Count'},
      {id: 'stargazers_count', title: 'Stargazers Count'},
      {id: 'forks_count', title: 'Forks Count'}
    ]
});
 

// creating callback for request function
function callback(error, response) {
  // check if api got response or not
  if (!error && response.statusCode == 200) {
    // defining data variable to store each value in array
    let data = [];
    response.body.items.forEach(item => {
      // check if filter applyed 
      if (item.language === 'Python' && item.forks_count >= 200 ) {
        // printing data for viewing
        console.log('----------------------------------');
        console.log('Name: ' + item.name);
        console.log('Description: ' + item.description);
        console.log('Html Url: ' + item.html_url);
        console.log('Watchers Count: ' + item.watchers_count);
        console.log('Stargazers Count: ' + item.stargazers_count);
        console.log('Forks Count: ' + item.forks_count);

        if (item.stargazers_count > 2000) {
          //applying filter and storing data in array
          data2dArray = {name: item.name,lang: item.language, description: item.description, html_url: item.html_url, watchers_count: item.watchers_count, stargazers_count: item.stargazers_count, forks_count: item.forks_count}
          data.push(data2dArray)
          
        }
      }
      
    });

    // to view data stored in csv form console uncomment below line
    // console.log(data)
    if (data.length > 0) {
      // writing in csv file
      csvWriter.writeRecords(data)       // returns a promise
    .then(() => {
        console.log('...Done');
    });

    }else{
      console.log('No data to store.')
    }
  }else{
    console.log('API call fail due to: ' + error);
  }
}
// request for api call
request(options, callback);