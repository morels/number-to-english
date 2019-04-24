# number-to-english
This repo consists of a [M]ERN application that converts digit numbers to their own language-spoken version.  
The goal of this project is described in file "Test_Frontend_-_R.pdf"

The project is divided in two parts:
1. the React frontend placed under `client/` folder
2. the NodeJS backend placed under `server/` folder

## Installation
```
// install client 
cd client && npm i
cd ..
// install server
cd server && npm i
cd ..
// install the whole project
npm i
```

## Running
```
// from the home folder
cd server && npm run build
cd ..
npm start
```

## Testing
Tests are unit tests made for the JS model ONLY.  
Tests on React frontend and NodeJS server are missing. 

```
cd server && npm run build
cd ..
npm test
```