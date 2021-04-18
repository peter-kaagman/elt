var mongoose = require('mongoose');
const { DateTime } = require('luxon'); 

var Schema = mongoose.Schema;

var AuthorSchema = new Schema(
  {
    first_name: {type: String, required: true, maxlength: 100},
    family_name: {type: String, required: true, maxlength: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date},
  }
);

// Virtual for authors lifespan
AuthorSchema
  .virtual('lifespan')
  .get(function(){
    var birth =
      (this.date_of_birth ?
        DateTime
          .fromJSDate(this.date_of_birth)
          .setLocale('nl')
          .toLocaleString(DateTime.DATE_MED)
      : 'no date');
    var death =
      (this.date_of_death ?
        DateTime
          .fromJSDate(this.date_of_death)
          .setLocale('nl')
          .toLocaleString(DateTime.DATE_MED)
      : 'no date');
    return birth +' - '+ death;
  });

// Virtual for author's full name
AuthorSchema
.virtual('name')
.get(function () {
  return this.family_name + ', ' + this.first_name;
});

// Virtual for author's URL
AuthorSchema
.virtual('url')
.get(function () {
  return '/catalog/author/' + this._id;
});

//Export model
module.exports = mongoose.model('Author', AuthorSchema);
