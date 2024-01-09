const express = require('express')
const router = express.Router()

//Import the controller
const profileController = require('../Controllers/profileController')



//studentController related API
router.post('/create', profileController.create)
router.get('/read', profileController.read)
router.get('/readById/:id', profileController.readById)
router.post('/update/:id', profileController.update)
router.get('/delete/:id', profileController.delete)



//Export this file
module.exports = router;
