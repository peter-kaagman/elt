var Book = require('../models/book');
var Author = require('../models/author');
var Genre = require('../models/genre');
var BookInstance = require('../models/bookinstance');

var async = require('async');

//Site home page
exports.index = function(req,res){
  async.parallel({
    book_count: function(callback){
      Book.countDocuments({},callback);
    },
    book_instance_count: function(callback){
      BookInstance.countDocuments({},callback);
    },
    book_instance_available_count: function(callback){
      BookInstance.countDocuments({status: 'Available'},callback);
    },
    author_count: function(callback){
      Author.countDocuments({},callback);
    },
    genre_count: function(callback){
      Genre.countDocuments({},callback);
    }
  }, function (err, result){
    res.render('index', {title: "Local Library Home",error: err, data: result});
  });
};

//Display a list of all Books
exports.book_list = function(req,res){
  Book.find({}, 'title author')
    .populate('author')
    .exec(function (err, list_books){
      if(err) {return next(err);}
      //Succesful, so render
      res.render('book_list', {title: 'Book List', book_list: list_books});
    });
};

//Display detail page for a specific Books
exports.book_detail = function(req,res){
  async.parallel({
    book: function(callback){
      Book.findById(req.params.id)
        .populate('author')
        .populate('genre')
        .exec(callback);
    },
    book_instance: function(callback){
      BookInstance.find({'book': req.params.id})
        .exec(callback);
    },
  }, function(err,results){
    if(err) { return next(err);}
    if (results.book==null) { // No results
      var err = new Error('Book not found');
      err.status = 404;
      return next(err);
    }
    // Successful, so render
    res.render('book_detail',{title: results.book.title, book: results.book, book_instances: results.book_instance});
  });
};

//Display Book create form on GET
exports.book_create_get = function(req,res){
  res.send('NOT IMPLEMENTED: Book create GET')
};

//Display Book create form on POST
exports.book_create_post = function(req,res){
  res.send('NOT IMPLEMENTED: Book create POST')
};

//Display Book delete form on GET
exports.book_delete_get = function(req,res){
  res.send('NOT IMPLEMENTED: Book delete GET')
};

//Display Book delete form on POST
exports.book_delete_post = function(req,res){
  res.send('NOT IMPLEMENTED: Book delete POST')
};

//Display Book update form on GET
exports.book_update_get = function(req,res){
  res.send('NOT IMPLEMENTED: Book update GET')
};

//Display Book update form on POST
exports.book_update_post = function(req,res){
  res.send('NOT IMPLEMENTED: Book update POST')
};


