var Genre = require('../models/genre');
var Book = require('../models/book');
var async = require('async');

//Display a list of all Genres
exports.genre_list = function(req,res){
  Genre.find()
    .sort([['name', 'ascending']])
    .exec(function (err, list_genres){
      if (err) {return next(err); }
      // Succesful, so render
      res.render('genre_list', { title: 'Genre List', genre_list: list_genres})
    });
};

//Display detail page for a specific Genres
exports.genre_detail = function(req,res){
  async.parallel({
    genre: function(callback){
      Genre.findById(req.params.id).exec(callback);
    },
    genre_books: function(callback){
      Book.find({'genre': req.params.id}).exec(callback)
    },
  }, function (err, result){
    if(err) { return next(err);}
    if (result.genre==null){ // no result
      err.status = 404;
      return next(err)
    }
    // Successful, so render
    res.render('genre_detail', {title: 'Genre Detail', genre: result.genre, genre_books: result.genre_books});
  });
};

//Display Genre create form on GET
exports.genre_create_get = function(req,res){
  res.send('NOT IMPLEMENTED: Genre create GET')
};

//Display Genre create form on POST
exports.genre_create_post = function(req,res){
  res.send('NOT IMPLEMENTED: Genre create POST')
};

//Display Genre delete form on GET
exports.genre_delete_get = function(req,res){
  res.send('NOT IMPLEMENTED: Genre delete GET')
};

//Display Genre delete form on POST
exports.genre_delete_post = function(req,res){
  res.send('NOT IMPLEMENTED: Genre delete POST')
};

//Display Genre update form on GET
exports.genre_update_get = function(req,res){
  res.send('NOT IMPLEMENTED: Genre update GET')
};

//Display Genre update form on POST
exports.genre_update_post = function(req,res){
  res.send('NOT IMPLEMENTED: Genre update POST')
};


