const { getAllPosts, getPostById } = require("../models/postModel")

const postsController = {

    // GET /
    index: (req, res) => {
        const posts = getAllPosts()

        res.render('index', {posts})
    },
    

    // GET /posts/:id
    show: (req, res) => {
        const id = req.params.id
        const post = getPostById(id)

        res.render('post', {post})
    }
}

module.exports = postsController