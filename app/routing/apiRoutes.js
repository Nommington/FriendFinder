var countriesData = require("../data/friends");



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
        console.log(req.body.name);
        var yourCountry = req.body;
        var yourCountryScore = yourCountry.scores;
        console.log(yourCountry);
        var scoreDiff = 0;

        for (i=0; i<countriesData.length; i++) {
            var country = countriesData[i];
            scoreDiff = 0;
            console.log("country: " + countriesData[i].name);
            for (j=0; j<country.scores.length; j++){
                scoreDiff += Math.abs(parseInt(yourCountryScore[j]) - parseInt(country.scores[j]));
            }
            if (scoreDiff <= bffCountry.diff) {
                console.log(bffCountry);
                bffCountry.name = country.name;
                bffCountry.flag = country.flag;
                bffCountry.diff = scoreDiff;
            }
        }
        countriesData.push(req.body);
        //console.log(bffCountry);
        res.json(bffCountry);
    });
};

