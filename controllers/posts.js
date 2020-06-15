const Post = require('../models/post');
const Post2 = require('../models/post2');

module.exports = (app) => {

  // CREATE
  app.post('/posts/new', (req, res) => {
    // INSTANTIATE INSTANCE OF POST MODEL
    const post = new Post(req.body);

    // SAVE INSTANCE OF POST MODEL TO DB
    post.save((err, post) => {
      // REDIRECT TO THE ROOT
      return res.redirect(`/`);
    })
  });

  app.get("/index", (req, res) => {
        console.log("we in bitch")
    Post.find({})
    .then(posts => {
      console.log("le promise", posts)
      res.render("/post-index.handlebars", { posts });
    })
    .catch(err => {
      console.log(err.message);
    });
  })
  
  app.post('/posts2/new', (req, res) => {
    // INSTANTIATE INSTANCE OF POST MODEL
    const post = new Post2(req.body);

    // SAVE INSTANCE OF POST MODEL TO DB
    post.save((err, post) => {
      // REDIRECT TO THE ROOT
      return res.redirect(`/`);
    })
  });
  
  app.get("/posts/:id", function(req, res) {
    // LOOK UP THE POST
    Post.findById(req.params.id)
      .then(post => {
        res.render("posts-show", { post });
      })
      .catch(err => {
        console.log(err.message);
      });
  });
};