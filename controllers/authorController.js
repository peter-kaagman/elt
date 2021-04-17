var Author = require('../models/author');

//Display a list of all Authors
exports.author_list = function(req,res){
  Author.find()
    .sort([['family_name', 'ascending']])
    .exec(function (err, list_authors){
      if (err) {return next(err); }
      // Succesful, so render
      res.render('author_list', { title: 'Author List', author_list: list_authors})
    });
};

//Display detail page for a specific Authors
exports.author_detail = function(req,res){
  res.send('NOT IMPLEMENTED: Author detail' + req.params.id);
};

//Display Author create form on GET
exports.author_create_get = function(req,res){
  res.send('NOT IMPLEMENTED: Author create GET')
};

//Display Author create form on POST
exports.author_create_post = function(req,res){
  res.send('NOT IMPLEMENTED: Author create POST')
};

//Display Author delete form on GET
exports.author_delete_get = function(req,res){
  res.send('NOT IMPLEMENTED: Author delete GET')
};

//Display Author delete form on POST
exports.author_delete_post = function(req,res){
  res.send('NOT IMPLEMENTED: Author delete POST')
};

//Display Author update form on GET
exports.author_update_get = function(req,res){
  res.send('NOT IMPLEMENTED: Author update GET')
};

//Display Author update form on POST
exports.author_update_post = function(req,res){
  res.send('NOT IMPLEMENTED: Author update POST')
};

