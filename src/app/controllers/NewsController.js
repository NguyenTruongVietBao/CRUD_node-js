class NewsController{

    // [GET] /news
    index(req, res){
        res.render('news')
    }

    // [GET] /news/:slug
    show(req, res){
        res.send('News detail')
    }

    // [GET] /news/id
    showID(req,res){
        res.send('show ID')
    }
}

module.exports = new NewsController;
