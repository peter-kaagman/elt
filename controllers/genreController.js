var Genre = require('../models/genre');

//Display a list of all Genres
exports.genre_list = function(req,res){
  res.send('NOT IMPLEMENTED: Genre list');
};

//Display detail page for a specific Genres
exports.genre_detail = function(req,res){
  res.send('NOT IMPLEMENTED: Genre detail' + req.params.id);
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


