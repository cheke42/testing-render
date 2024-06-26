const
walletModel = require("../model/wallet"),

get = async (req,res) => {
	let 
	id_wallet = req.params.id_wallet,
	wallet = await walletModel.get(id_wallet)
	res.status(200).send(wallet)
},

getDetails = async(req,res) => {
    id_wallet = req.params.id_wallet,
    wallet = await walletModel.getDetails(id_wallet)
	res.status(200).send(wallet)
},

getDailyPerfomance = async (req,res) => {
	let
	id_wallet = req.params.id_wallet,
	fecha = req.params.fecha
    wallet = await walletModel.getDailyPerfomance(id_wallet,fecha)
	res.status(200).send(wallet)
},

getDateByDate = async(req,res) => {
    let id = req.params.id
    let fecha = req.params.fecha
    walletDetail = await walletModel.getWalletDatailByDate(id,fecha)
    res.status(200).send(walletDetail)
},

getRangeDate = async(req,res) => {
    let id = req.params.id
    let limit = req.params.limit
    walletDetail = await walletModel.getRangeDate(id,limit)
    res.status(200).send(walletDetail)
},
saveWallet = async(req,res) => {
	let
	params = req.body,
	wallet_name = params.wallet_name
	walletDetail = await walletModel.saveWallet(wallet_name)
	res.status(200).send(walletDetail)
},
getBalance = async(req,res) => {
	let 
	id_wallet = req.params.id,
	fecha = req.params.fecha
	walletBalance = await walletModel.getWalletBalance(id_wallet,fecha)
	res.status(200).send(walletBalance)
},
getPreviousBalance = async(req,res) => {
	let 
	id_wallet = req.params.id,
	fecha = req.params.fecha
	walletBalance = await walletModel.getPreviousWalletBalance(id_wallet,fecha)
	res.status(200).send(walletBalance)
},

getTicker = async(req,res) => {
	let 
	id_wallet = req.params.id
	tickers = await walletModel.getTicker(id_wallet)
	res.status(200).send(tickers)
},
getLastPerfomance = async(req,res) => {
	let 
	id_wallet = req.params.id
	lastPerfomance = await walletModel.getLastPerfomance(id_wallet)
	res.status(200).send(lastPerfomance)
}

module.exports = {
	get,
    getDetails,
	getDailyPerfomance,
	getDateByDate,
	getRangeDate,
	getBalance,
	getPreviousBalance,
	getTicker,
	getLastPerfomance,
	saveWallet
}