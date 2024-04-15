const serialize = require('cookie').serialize;

const
userModel = require("../model/user"),

login = async (req,res) => {
	let 
    params = req.body
	username = params.username,
	password = params.password,
    response = await userModel.login(username,password)
	//res.status(200).send(response)
	res.cookie("token",response.token,{httpOnly: true}).send(response)
	// solution: https://www.youtube.com/watch?v=c_f2o5dZl8A
},

createAccount = async (req,res) => {
	let
	params = req.body,
	username = params.username,
	password = params.password
	response = await userModel.createAccount(username,password)
	res.status(200).send(response)
}


module.exports = {
	login,
	createAccount
}