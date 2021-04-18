var Genre = require('../models/genre');
var Book = require('../models/book');
var async = require('async');
const {body, validationResult} = require('express-validator');

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
  res.render('genre_form', {title: 'Create Genre'});
};

//Display Genre create form on POST
exports.genre_create_post = [
  // Valdate and sanitize the name field
  body('name', 'Genre name required').trim().isLength({min: 1}).escape(),
  // Process request after validation and sanitization
  (req, res, next) =>{
    // Extract the validation errors from a request
    const errors = validationResult(req);
    //Create a genre object with escaped and trimmed data
    var genre = new Genre(
      {name: req.body.name}
    );
    if(!errors.isEmpty()){
      // There are errors. Render the form again with sanitized vallues/error messages.
      res.render('genre_form', {title: 'Create Genre', genre: genre, errors: errors.array()});
      return;
    }else{
      // Data from form isn valid
      // Check if Genre with same name already excists
      Genre.findOne({'name': req.body.name})
        .exec(function(err, found_genre){
          if(err){return next(err);}
          if(found_genre){
            // Genre exists, redirect to its detail page.
            res.redirect(found_genre.url);
          }else{
            genre.save(function(err){
              if(err) {return next(err);}
              // Genre saved. Redirect to genre detail page
              res.redirect(genre.url);
            });
          }
        });
    }
  }
];

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


