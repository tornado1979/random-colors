This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


## Table of Contents
- [About](#about)
- [Workflow](#workflow)
- [Folder Structure](#folder-structure)
- [Run local](#run-local)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
- [Todo](#todo)


## About
* It is a web app that uses http://www.colr.org/ API to fetch some data to the client, and show them to the end user as he clicks on a circle.
* It is written in reactjs + reduxjs.

## Workflow

* Init: a request to the API_ENDPOINT: http://www.colr.org/json/color/random, is done to fetch the json data.
* The data are consumed and the store is updated with the new values.
* The circle changes to the new colour and shows on the left top corner of its container.
* The user clicks on the circle, another request is done to the endpoint.
* The fetched data udate the store, paint the circle and move it to the next corner.

## Folder structure

I have run `npm run eject`, in order to have better control over, 
webpack, eslint etc.

The structure of the project is this:
```
my-app/
  README.md
  build/
    minimized code+styles
  config/
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  scripts/
    build.js
    start.js
    test.js
  src/
    components/
      actionCreators/
        index.js  
      actions/
        index.js
      reducers/
        index.js
      selectors/
        index.js
      style/
        index.scss
    Home.js
    redux/
      store/
        index.js
    index.css
    index.js
    logo.svg
```

## Run local

In order to run localhost you shoul:

* download/clone the repo to a folder
* execute npm install to install all the dependencies
* npm run start
* open your browser on http://localhost:3000/

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Todo

* unit tests on actionCreators, reducers, selectors
* animate the circle from corner to corner
