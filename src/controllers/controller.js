const {proModel, prosModel} = require('../models/model');

exports.create =(req, res) => {
    console.log(req.body);
    if(!req.body.link){
        return res.status(400).send({
            message:"No link is there "
        });
    }

    const newPro = new prosModel({
        name: req.body.name || "None",
        link: req.body.link
    });

    newPro.save()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error in saving the data"
        });
    });
};

exports.findAll = (req,res) =>{
    prosModel.find()
    .then(pros => {
        res.send(pros);
    })
    .catch( err => {
        res.status(500).send({
            message: err.message || "Some error occur while reciving data"
        });
    });
};

exports.findOne = (req,res) =>{
    prosModel.findById(req.params.movieId)

    .then(pro => {
        if(!pro){
            return res.status(404).send({
                message: "Movie not found " + req.params.proId
            })
        }
        res.send(pro);
    })
    .catch(err => {
        if(err.kind === "ObjectId"){
            return res.status(404).send({
                message: " Movie not found with id " + req.params.proId
            });
        }
        return res.status(500).send({
            message: "Error retrieving movie with id"+ req.params.proId
        });
    });
};

exports.update = (req,res) =>{
    if(!req.body.link){
        return res.status(400).send({
            message: "Movie link cannot be empty"
        });
    }
    console.log(req.params);

    prosModel.findByIdAndUpdate(req.params.movieId, {
        name: req.body.name || "None",
        link: req.body.link
    }, {new: true})
    .then(pro =>{
        if(!pro){
            return res.status(404).send({
                message:"Movie not found" + req.params.movieId
            });
        }
        res.send(pro);
    })
    .catch(err => {
        if(err.kind === 'ObjectId'){
            return res.status(404).send({
                message: "Movie not found" + req.params.movieId
            });
        }
        return res.status(500).send({
            message: "Error updating movie with id "+ req.params.movieId
        });
    });
};

exports.delete = (req,res) =>{
    prosModel.findByIdAndRemove(req.params.movieId)
    .then(pro => {
        if(!pro) {
            return res.status(404).send({
                message: "Movie not found with id " + req.params.movieId
            });
        }
        res.send({message: "Note deleted successfully!"});
    })
    .catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Movie not found with id " + req.params.movieId
            });                
        }
        return res.status(500).send({
            message: "Could not delete Movie with id " + req.params.movieId
        });
    });
};


