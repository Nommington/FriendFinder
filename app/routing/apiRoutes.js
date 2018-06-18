var countriesData = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/countries", function (req, res) {
        res.json(countriesData);
    });
};

