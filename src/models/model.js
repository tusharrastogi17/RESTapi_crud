const {Schema} = require('mongoose');
var {dbClient} = require('../config/db')

const movieSchema = new Schema({
    name: String,
    link: String
},{
    timestamps: true
});

const proModel = dbClient.model('Pro', movieSchema);

module.exports.prosModel = proModel ;