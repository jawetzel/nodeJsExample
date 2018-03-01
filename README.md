# Steps to setup

### [Install Node](https://nodejs.org/en/)

### Install Gulp

Open Command Line enter 
```bash
npm install -g gulp
```

### Download Repo

### Install packages

```bash
cd [project path]
npm install
```

### Run Project

```bash
npm run dev
```


# Setup and Run Project

Download or clone project

Open command line to project

```bash
npm run setup
npm dev
```

# Project Parts

I do not claim to have any part in the making of any packages used, if you are looking for a more detailed explination
of any of the packages used here or are looking for further functionality from them, try searching for npm [package name]
in the google.

## Express

Express is a server framework which allows you to setup a pipeline for requests

To use Express, express needs to be added into the package.json, you can add it manualy in the package.json, but the
easier and preferable way would be to open the command line to the project and enter "npm install --save express"

Below is the most basic an express application can get. When this project is run, it will answer to
the url http://localhost:8080/api/pathname and will return with 'Get Response'

### package.json

```bash
{
  "name": "nodejs",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {},
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.16.2"
  },
  "devDependencies": {}
}
```

### index.js

```bash
import express from 'express';

let app = express();

const port = 8080;

app.listen(port, () => {
    console.log('running on port: ' + port);
});

app.use('/api', router);

router.route('/pathname').get((req, res, next) => {
    res.send('Get Request');
});
```

## Babel

Babel is a tool for both compressing a project from a project and the node modules into just a built project to take up
the minimum needed space on the server the project is to be run on, but here we are using it to convert the more current
version of javascript(es6) to an older and more widely compatible version of javascript. You may notice that if you create
your own project that some of the javascript syntax used in this project may not work. That is because babel is used here.

Below is the code used to add babel to the project


### Command Line

```bash
npm install --save-dev babel-cli babel-core babel-preset-es2015 babel-preset-stage-2
```

### package.json

```bash
{
  "name": "nodejs",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "rimraf dist/ && babel ./ --out-dir dist/ --ignore ./node_modules,./.babelrc,./package.json,./npm-debug.log --copy-files",
    "start": "npm run build && node dist/index.js",
  },
  "author": "",
  "license": "ISC",
  "dependencies": {},
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-core": "^6.26.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-stage-2": "^6.24.1",
    "rimraf": "^2.6.2"
  }
}

```

### .babelrc

```bash
{
  "presets": [
    "es2015",
    "stage-2"
  ]
}
```

## Gulp

Gulp is a task-runner that in this project is being used to automaticly restart the server every time a change in
javascript is detected, this allows us to not have to ctrl-c and restart the app every time we make changes. To run gulp
we need both gulp in the pacage.json and on our computer Below is how to get it setup in a project using babel.

### Command Line

```bash
npm install -g gulp
npm install --save-dev gulp gulp-babel gulp-load-plugins gulp-nodemon
```

### package.json

```bash
{
  "name": "nodejs",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "rimraf dist/ && babel ./ --out-dir dist/ --ignore ./node_modules,./.babelrc,./package.json,./npm-debug.log --copy-files",
    "start": "npm run build && node dist/index.js",
    "dev": "gulp nodemon"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {},
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-core": "^6.26.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-stage-2": "^6.24.1",
    "gulp": "^3.9.1",
    "gulp-babel": "^7.0.1",
    "gulp-load-plugins": "^1.5.0",
    "gulp-nodemon": "^2.2.1",
    "rimraf": "^2.6.2"
  }
}
```

### gulpfile.babel.js

```bash
import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import nodemon from 'gulp-nodemon';
import path from 'path';

const plugins = loadPlugins();


const paths = {
    js: ['./**/*.js', '!dist/**', '!node_modules/**']
};


gulp.task('babel', () => {
    return gulp.src(paths.js, { base: '.' })
        .pipe(plugins.babel())
        .pipe(gulp.dest('dist'));
});

gulp.task('nodemon', ['babel'], () =>
    plugins.nodemon({
        script: path.join('dist', 'index.js'),
        ext: 'js',
        ignore: ['node_modules/**/*.js', 'dist/**/*.js'],
        tasks: ['babel']
    })
);
```

## Jasmine

Jasmine is a unit testing framework, and the example of how it is being used in this example project is in apiFiles/Math.js
and in spec/tests/MathSpec.js

To setup Jasmine for unit tests in this project using babel required the following.

### Command Line

```bash
npm install --save-dev jasmine
npm install -g jasmine
```

### package.json

```bash
{
  "name": "nodejs",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "babel-node spec/run.js",
    "build": "rimraf dist/ && babel ./ --out-dir dist/ --ignore ./node_modules,./.babelrc,./package.json,./npm-debug.log --copy-files",
    "start": "npm run build && node dist/index.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {},
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-core": "^6.26.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-stage-2": "^6.24.1",
    "jasmine": "^3.1.0",
    "rimraf": "^2.6.2"
  }
}
```

### Code

Example code for unit testing can be found in 3 locations for the project

spec/run.js is the setup for jasmine unit tests
spec/tests/Mathspec.js is a unit test testing apiFiles/Math.js


## Mongoose

Mongoose is a framework to use MongoDb in NodeJs, I only cover a few simple examples of how to use it, there is great
documentation on github for mongoose and great documentation for [MongoDb](https://www.mongodb.com/).

### Command Line

```bash
npm install --save mongoose
```

### Basic Example Code

```bash
import mongoose from "mongoose";

mongoose.connect([Connection String Here);

const db = mongoose.connection;

db.once('open', function() {
    console.log('db connected');
});

const Schemas = {
    CatSchema : mongoose.Schema({
        name: String,
        color: String,
        Size: String,
        age: Number
    })
};

const Cat = mongoose.model('Cat', Schemas.CatSchema);

let bruce = new Cat({
    name: 'Bruce',
    color: 'yellow',
    Size: 'small'
});

bruce.save((error, result) => {
    if (error) console.log(error);
    if (result) console.log(result);
});

Cat.find().exec((err, result) => {
    if (err) console.log(err);
    if (result) console.log(result);
});
```