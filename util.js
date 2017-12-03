var chalk = require('chalk');
var fs = require('fs-extra')
var json = require('comment-json');

//exports.err = function err(s) { return chalk.red('[ERR] ') + s }
//exports.inf = function inf(s) { return chalk.green('[INF] ') + s }
//exports.wrn = function err(s) { return chalk.yellow('[WRN] ') + s }
exports.errLog = function err(s) { console.log(chalk.red('[ERR] ') + s) }
exports.infLog = function inf(s) { console.log(chalk.green('[INF] ') + s) }
exports.wrnLog = function err(s) { console.log(chalk.yellow('[WRN] ') + s) }
exports.dbgLog = function dbgLog(s) { if (debug) console.log(chalk.blue('[DBG] ') + s) }
exports.err = function err(s) { return chalk.red('[ERR] ') + s }
exports.inf = function inf(s) { return chalk.green('[INF] ') + s }
exports.wrn = function err(s) { return chalk.yellow('[WRN] ') + s }
exports.dbg = function err(s) { return chalk.blue('[DBG] ') + s }

var errThrow = function err(s) { throw chalk.red('[ERR] ') + s }
exports.errThrow = errThrow
exports.dbgThrow = function err(s) { throw chalk.blue('[ERR] ') + s }

exports.getAppName = function getAppName(CurrWorkingDir) {
	var appJsonFileName = getAppJson(CurrWorkingDir)
	if (appJsonFileName == '') {
		throw 'Not a Sencha Cmd project - no app.json found'
	}
	var objAppJson = json.parse(fs.readFileSync(appJsonFileName).toString());
	var appName = objAppJson.name
	return appName
}



function getAppJson(CurrWorkingDir) {
	var myStringArray = CurrWorkingDir.split('/')
	var arrayLength = myStringArray.length
	var appJsonFile = ''
	for (var j = arrayLength; j > 0; j--) {
		var dir = ''
		for (var i = 0; i < j; i++) {
			if (myStringArray[i]!='') {
				dir = dir + '/' + myStringArray[i]
			}
		}
		// var workspaceJson = dir + '/' + 'workspace.json'
		// if (fs.existsSync(workspaceJson)) {
		// 	console.log('yes ' + workspaceJson)
		// }
		var appJson = dir + '/' + 'app.json'
//		console.log(appJson)
		if (fs.existsSync(appJson)) {
//			console.log('here')
			appJsonFile = appJson
		}
	}
	return appJsonFile
}

exports.getSenchaCmdPath = function getSenchaCmdPath(toPath, path) {
	pathVar = process.env.PATH
	var myStringArray = pathVar.split(':')
	var arrayLength = myStringArray.length
	var pathSenchaCmd = ''
	for (var i = 0; i < arrayLength; i++) {
		var str = myStringArray[i]
		var n = str.indexOf("Sencha/Cmd");
		if (n != -1) {
			pathSenchaCmd = str
		}
	}
	//var other = '/plugins/ext/current'
	//console.log(pathSenchaCmd + other)
	return pathSenchaCmd
}
