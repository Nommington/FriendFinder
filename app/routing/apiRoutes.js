var countriesData = require("../data/friends.js");



module.exports = function (app) {
    app.get("/api/countries", function (req, res) {
        res.json(countriesData);
    });

    app.post("/api/countries", function(req, res){
        var bffCountry = {
            name: "",
            flag: "",
            diff: 500
        };

        var yourCountryScore = req.body.scores;
        var scoreDiff = 0;

        for (i=0; i<countriesData.length; i++) {
            var country = countriesData[i];
            scoreDiff = 0;

            for (j=0; j<country.scores.length; j++){
                scoreDiff += Math.abs(parseInt(yourCountryScore[j]) - parseInt(country.scores[j]));
            }
            if (scoreDiff >= bffCountry.diff) {
                bffCountry.name = country.name;
                bffCountry.flag = country.flag;
                bffCountry.diff = scoreDiff;
            }
        }
        countriesData.push(req.body);
        res.json(bffCountry);
    });
};

