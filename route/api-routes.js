const router = require('express').Router();
const apiController = require('../controller/apiController');
const {authorization} = require('../middleware/authorization');

router.post('/login', apiController.login);

router.use(authorization)

router.route('/countries')
    .get(apiController.getCountries)
    .put(apiController.putCountries)
    .delete(apiController.deleteCountry);


//  Export API routes
module.exports = router;