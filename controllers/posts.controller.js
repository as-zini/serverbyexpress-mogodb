const path = require('path');

function getPost(req, res){
  res.sendFile(path.join(__dirname, '..', 'public', 'images', 'cheese.jpg'))
}

module.exports = {
  getPost
}