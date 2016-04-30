// Backbone Model

var Blog = Backbone.Model.extend({
  defaults: {
    author: '',
    title: '',
    url: '',
  }
});

// Backbone Collection

var Blogs = Backbone.Collection.
  extend({});

//instantiate two Blogs

var blog1 = new Blog ({
  author: 'Thamer',
  title: 'Thamer\'s Blog',
  url: 'http://thameralmerry.com'
});

var blog2 = new Blog ({
  author: 'Jackahammer',
  title: 'Jackahammers\'s Blog',
  url: 'http://jackahammer.com'
});

var blogs = new Blogs ([blog1, blog2]);
