const Course = require('../models/Course');
const {mongooseToObject} = require('../../util/mongoose');

class CourseController {
//Read
    // [GET] /course/:slug
    show(req, res, next) {        
        Course.findOne({slug: req.params.slug})
            .then((course) => {
                res.render('course/show', {course: mongooseToObject(course) })
            })
            .catch((next) => {
                alert('Error')
            })
    }

//Create    
    // [GET] /course/create
    create(req, res, next) {        
        res.render('course/create')
    }
    // [POST] /course/store
    store(req, res, next) {     
        req.body.image = `https://img.youtube.com/vi/${req.body.videoID}/0.jpg`
        const course = new Course(req.body);
        course.save()
            .then(() => {res.redirect('/')})
            .catch(err => {})
    }

//Update    
    // [GET] /course/update/:id
    updateForm(req, res, next) {        
        Course.findById(req.params.id)
            .then(courses => res.render('course/update', {
                courses: mongooseToObject(courses)
            }))
            .catch(next)
    }

    // [PUT] /course/:id
    updateHandle(req, res, next) {        
        Course.updateOne({_id: req.params.id}, req.body)
            .then(() => {res.redirect('/me/stored/courses')})
    }

//Delete    
    // [DELETE] /course/:id
    deleteHandle(req, res, next) {        
        Course.deleteOne({_id: req.params.id})
            .then(() => {res.redirect('back')})
            .catch(next)
    }
}

module.exports = new CourseController;
