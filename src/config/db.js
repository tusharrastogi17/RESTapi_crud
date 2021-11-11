const dbClient = require('mongoose');
const url= "mongodb+srv://sasuke:sasukeuchiha@cluster0.zenvb.mongodb.net/project";

dbClient.connect(url, {
    useNewUrlParser: true,
})
    .then(() => {
        console.log('Successfully connected to database');
    })
    .catch((err) => {
        console.log('Error connecting to database');
    })


module.exports.dbClient = dbClient;
