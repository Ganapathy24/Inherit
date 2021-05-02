const ObjectId = require('mongodb').ObjectID;


function buildQuery(queryObject) {
  let query = {}
  if (queryObject._id !== undefined) {
    query._id = new ObjectId(queryObject._id);
  }
  if (queryObject.languages !== undefined) {
    query.languages = queryObject.languages;
  }
  return query;
}

module.exports = buildQuery;
