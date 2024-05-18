const {writeData, readData} = require("../utils/data");
const sendAllGames = async (req, res, next) => {
  res.send(req.games)
};

const sendUpdatedGames = (req, res) => {
    res.send({
        games: req.games,
        updated: req.updatedObject
    });
};

module.exports = {
   
    sendAllGames,
    
    sendUpdatedGames
}