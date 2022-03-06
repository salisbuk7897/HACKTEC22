const axios = require('axios');

module.exports.pred = function(req, res){
    /* const headers = {
        "Content-Type": "application/json",
        "api_key": "D9SopgSXzb2QVw8I0HpWWH6YqJ456xCQDFQu6fyt",
        "features": [
            {
            "meddra_id": `${req.body.mid}`,
            "se_name": `${req.body.sen}`
            }
        ],
        "include_features": false,
        "model": "custom_prediction_regression_1646483866483",
        "version": "1"
    } */
    axios.post('https://api.mage.ai/v1/predict', {
        "api_key": "D9SopgSXzb2QVw8I0HpWWH6YqJ456xCQDFQu6fyt",
        "features": [
            {
            "meddra_id": `${req.body.mid}`,
            "se_name": `${req.body.sen}`
            }
        ],
        "include_features": false,
        "model": "custom_prediction_regression_1646483866483",
        "version": "1"
      })
      .then((response) => {
        c = response.data[0]["prediction"]
        //console.log(`c: ${c}`)
        res.send(`${c}`)
      })
      .catch((error) => {
        res.send("Error")
      })
}

module.exports.vpred = function(req, res){
  console.log(req.body);
  res.send(req.body)
}