const router = require("express").Router();
const Celebrity = require('../models/Celebrity.model')

router.get('/create', (req, res, next) => {
    res.render('celebrities/new-celebrity.hbs')
  });

router.post('/create', (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;
    Celebrity.create({ name, occupation, catchPhrase })
      .then((createdCelebrity) => {
        res.redirect('/celebrities')

      }).catch((err) =>{
        console.log(err)
    }) 
  });

router.get('/', (req, res, next) => {
    Celebrity.find()
    .then(allCelebrities =>{
        res.render('celebrities/celebrities.hbs', {allCelebrities})
    })
  });

module.exports = router;