const model = require('../models/users.model')

function getUsers(req, res){
  res.send(model);
}

function getUser(req, res){
    const userId = Number(req.params.userId);
    const user = model[userId];
    if(user){
      res.json(user);
  
    }else{
      res.sendStatus(404);
  }
}

function postUser(req, res){
  if(!req.body.name){
    console.log("error")
    return res.status(400).json({
      error: "Missing user name"
    })
  }
  const newUser = {
    name: req.body.name,
    id: model.length
  }
  //추가할 데이터를 기존 배열에 넣는부분
  model.push(newUser);
  //기존 배열과 추가한 데이터를 서버로 보내는 부분
  res.json(newUser);
}

module.exports = {
  getUsers,
  getUser,
  postUser
}