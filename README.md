## eFlights App

Visit our current version here


## eFlights story

This final project for our SDSU software developers bootcamp, consists on a flights website, with authentication, shopping cart and others, leveraging RapidAPI's Skyscanner app.

## Details

This a Monorepo app, which consists in a back end server, Python Flask and Frontend server, React.
Our eFlight application, allows you to look for flight, without authentication, but once you are ready to purchase, you can register your username, and the flight can be saved in a cart, and purchase.

## Local Installation:

* npm install
* pip install -r requirements.txt
* env file with private data.
* npm start, http://locahost:3000/
* python3 server/server.py, http://localhost:5000/
* Local database connectivity with Postgres


## Technolgy

* <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAF" height="30">

* <img src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white" height = "30">

* <img src="https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white" height="30">

* <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30">

* <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" height="30">

* <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" height="30">

* Rapid API to access Skyscanner flights API.

* SQL Alchemy Database toolkit for Python

## Web routes
-----
| Method        | Path              | Purpose                                   |
|:--------------|:------------------|:------------------------------------------|
|    GET        |/                  | Home Page                                 |
|    GET        |/Search            | Search Flight Engine                      |
|    GET        |/SearchLocation    | Search Location on Search page            |
|    GET        |Airport Display    | Airport Display suggestions on Search page|
|    POST       | Login             | Login Page |  
|    POST       |Signup             | Signup Page |
___
# Screenshots 

* <img src="public/pictures/eFlights_home.jpg">

# Issues Encontured

* Lost authentication, after clicking other page. Resolution; credentials and content type: application/json

# Future Updates
---
* Credit card processing redirect
* eStore
* Add more features to the site as Hotel and Car rental search and purchase.
* Styling
# Contributors

[Jonathan Kishi](https://github.com/Jkishi6)

[Zane Larson](https://github.com/ZDC7096)

[Didac Fernandez](https://www.github.com/didacf)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
