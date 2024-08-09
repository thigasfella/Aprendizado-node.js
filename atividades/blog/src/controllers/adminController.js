const { getAllPosts, createPost, savePost, deletePost, getPostById, updatePost } = require("../models/postModel")

const adminController = {
    // GET /admin

    index: (req, res) =>{
       const posts = getAllPosts()
       res.render('admin', {posts})
    },
    // GET /admin/create
    create: (req, res) =>{
        res.render('newPostForm')
    },
    // POST /admin/create
    save: (req, res) =>{
        const {title, content} = req.body

        const newPost = createPost(title, content)
        savePost(newPost)

        res.redirect('/admin')
    },
    // GET /admin/edit/:id
    edit: (req, res) => {
        const id = req.params.id
        const post = getPostById(id)
        res.render('editPostForm', {post})
    },
    // POST /admin/update/:id
    update: (req, res) => {
        const id = req.params.id
        const {title, content} = req.body
        updatePost(id, { title, content })

        res.redirect('/admin')
    },
    // POST /admin/delete/:id
    delete: (req, res) => {
        const id = req.params.id
        deletePost(id)

        res.redirect('/admin')
    }
}

module.exports = adminController