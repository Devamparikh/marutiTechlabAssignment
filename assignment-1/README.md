
# Fetch data from API

This is a node.js application to fetch data from api such as https://api.github.com/search/repositories?q=is:public
Using modules whcich are request and csv-writer that provides the main functions you'd expect to fetch data and store in csv file by applying filter.

## Features

- Fetch data
- Filter data
- Convert to csv from array
- Store in csv file


## Setup and Run Locally

Clone this repo to your desktop and run below command in assignment-1 to install all the dependencies.

```bash
  npm install
```
Run this from terminal after cloning repo and to run app apply below command if you are in marutiTechlabAssignment folder
```bash
  node assignment-1/app.js
```
## Usage
Here we have a github api url and from that url we want to fetch data from that api.
Without authantication git provides 30 set of data.

```javascript
const request = require('request');

const options = {
  url: url,
  headers: {
    'User-Agent': 'request'
  },
  json: true
};

function callback(error, response) {
    console.log(error)
    console.log(response)
    
}
request(options, callback);
```


## Outcome
Request will help to fetch api data and show json data as responce. csv will be use to store that data to csv file such as dataInfo.csv
```csv
NAME,LANGUAGE,Html Url,Watchers Count,Stargazers Count,Forks Count
value, value, value...
```