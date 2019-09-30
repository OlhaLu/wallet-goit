const ExchangeModel = require("../models/transactionsModel.js");
const getDataFromPbApi = require('./apiPrivatBank.js');

module.exports = async function() {
  ExchangeModel.create({
    currency: await getDataFromPbApi() 
    }, (err, result)=> {
    console.error(err);
  });
}