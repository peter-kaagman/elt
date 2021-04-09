var Book = require('../models/book');

//Site home page
exports.index = function(req,res){
  res.send('NOT IMPLEMENTED: Site Home Page');
};

//Display a list of all Books
exports.book_list = function(req,res){
  res.send('NOT IMPLEMENTED: Book list');
};

//Display detail page for a specific Books
exports.book_detail = function(req,res){
  res.send('NOT IMPLEMENTED: Book detail' + req.params.id);
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


