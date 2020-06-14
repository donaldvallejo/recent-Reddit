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
  
  app.post('/posts2/new', (req, res) => {
    // INSTANTIATE INSTANCE OF POST MODEL
    const post = new Post2(req.body);

    // SAVE INSTANCE OF POST MODEL TO DB
    post.save((err, post) => {
      // REDIRECT TO THE ROOT
      return res.redirect(`/posts2/new`);
    })
  });

};