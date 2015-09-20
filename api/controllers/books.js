'use strict';
module.exports = {
    path: '/books',
    actions: {
        'get /': [
            function (req, res) {
                Model.books.find().then(function(books) {
                	res.send(books);
                }).catch(function(err) {
                	console.log(err);
                	res.send(500, err);
                })
            }],
    }
};
