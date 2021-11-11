const { Router } =require('express');
const Controller= require('../controllers/Controller');


const router =Router();

router.post('/movies', Controller.create);
router.get('/movies', Controller.findAll);
router.get('/movies/:movieId', Controller.findOne);
router.put('/movies/:movieId', Controller.update);
router.delete('/movies/:movieId', Controller.delete);


module.exports = router;