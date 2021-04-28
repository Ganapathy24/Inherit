function buildQuery(queryObject) {
    let query = {} 
    if(queryObject.id !== undefined) {
        query.id = queryObject.id;
    }
    if(queryObject.languages !== undefined) {
        query.languages = queryObject.languages;
    }
    return query;
}

module.exports = buildQuery;