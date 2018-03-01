import express from 'express';

import cors from 'cors';
import bodyParser from 'body-parser';

import Database from './apiFiles/DatabaseExample';

let app = express();

app.use(cors()); //allow all cors
app.use(bodyParser.json()); //support for json encoded bodies
app.use(bodyParser.urlencoded({extend: true})); //support for url encoded bodies

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log('running on port: ' + port);
});


//runs the Db Example from apiFiles/DatabaseExample
Database.DataBaseExample();


const router = express.Router();

app.use('/api', router);

//middleware function (gets called before any route)
app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next()
});

//basic get request for localhost:[port]/api/pathname
router.route('/pathname').get((req, res, next) => {
    res.send('Get Request');
});
//basic post request
router.route('/pathname').post((req, res, next) => {
    res.send('Post Request');
});
import api1 from  './apiFiles/apiFile1'; // import external file for more routes
api1(app, router); //pass app and router to external routes


//"npm run dev" in command line to start