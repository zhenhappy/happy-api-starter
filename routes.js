const User = require('./controllers/user');
const Post = require('./controllers/post')

module.exports = function (app) {
  // account
  app.post('/user/signup', User.signup)
  app.post('/user/login', User.login)
  app.put('/user', User.update)
  app.get('/user/logout', User.logout)
  app.get('/users', User.all)
  app.get('/user/:userId', User.getById)

  // post
  app.post('/post', Post.new)
  app.delete('/post/:id', Post.remove)
  app.get('/posts', Post.all)
}
