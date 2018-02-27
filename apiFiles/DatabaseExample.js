import mongoose from "mongoose";


// mongo db setup, visit https://www.mongodb.com/ to get a free db(make sure choose free when setting up cluster)t
mongoose.connect('mongodb://DbAdmin:adminPassword@cluster0-shard-00-00-vstof.mongodb.net:27017,cluster0-shard-00-01-vstof.mongodb.net:27017,cluster0-shard-00-02-vstof.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');
const db = mongoose.connection;
db.once('open', function() {
    console.log('db connected');
});

// table schemas
const Schemas = {
    CatSchema : mongoose.Schema({
        name: String,
        color: String,
        Size: String,
        age: Number
    })
};

// Returns Connected Database Singleton
const GetDatabase = () => {
    return mongoose;
};

// Example method, set any of the if statements to true to let the example code execute
const DataBaseExample = () => {

    const Cat = mongoose.model('Cat', Schemas.CatSchema);

    // make new row in db
    if (false) {
        let bruce = new Cat({
            name: 'Bruce',
            color: 'yellow',
            Size: 'small'
        });
        bruce.save((error, result) => {
            if (error) console.log(error);
            if (result) console.log(result);
        });
    }

    //search for all the cats we made
    if (false) {
        Cat.find().exec((err, result) => {
            if (err) console.log(err);
            if (result) console.log(result);
        });
    }
    //Search for a cat by id
    if (false) {
        Cat.find({_id: '5a95ac586a69a234b0a480c3'}).exec((error, result) => {
            if (error) console.log(error);
            if (result) console.log(result);
        });
    }
    //Search for a cat by name
    if (false) {
        Cat.find({color: 'yellow'}).exec((error, result) => {
            if (error) console.log(error);
            if (result) console.log(result);
        });
    }
    //Search With a select
    if (false) {
        Cat.find().select('name color').exec((err, result) => {
            if (err) console.log(err);
            if (result) console.log(result);
        });
    }
    //Update the cats info with a new column
    if (false) {
        Cat.find({_id: '5a95ac586a69a234b0a480c3'}).exec((error, result) => { //get the cat
            if (error) console.log(error);
            if (result) console.log(result);
            let foundCat = result[0]; //we searched for all with id of so we need to pick from array
            foundCat.age = 11; //assign value to cat age
            foundCat.save((saveErr, saveResult) => { //save the change just made
                if (saveErr) console.log(saveErr);
                if (saveResult) console.log(saveResult);
            })
        });
    }
};

export default {
    DataBaseExample: DataBaseExample,
    Schemas: Schemas,
    GetDatabase: GetDatabase
}