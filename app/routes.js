module.exports = function(app) {
var request = require('request');

	// server routes ===========================================================
    app.get('/',  function(req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    });

 app.get('/results',  function(req, res) {
        request('#enderurl', function (err, response, body) {

            if (err) {
                console.log(err);
            } else {
                res.send(body);
            }
        });
    });

    app.get('/results/user/:id',  function(req, res) {



        request('#enderurl' +userid, function (err, response, body) {

            if (err) {
                console.log(err);
            } else {

                res.send(JSON.parse(body));
            }

        });
    });



	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};