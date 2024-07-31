const express = require('express')
const router = express.Router();
const courseController = require('../app/controllers/CourseController')


router.get('/create', courseController.create );
router.post('/store', courseController.store );
router.get('/update/:id', courseController.updateForm );
router.put('/:id', courseController.updateHandle );
router.delete('/:id', courseController.deleteHandle);
router.get('/:slug', courseController.show );



module.exports = router;