const path = require('path');

module.exports = {
  entry: {
	'HomePage' : './javascript/HomePage.js',
	'Overview' : './javascript/Overview.js',
	'Contract' : './javascript/Contract.js',
	'Pre-Assessment' : './javascript/Pre-Assessment.js',
	'Profit&Loss' : './javascript/Profit&Loss.js',
	'RiskAssessmentProtocol' : './javascript/RiskAssessmentProtocol.js',
	'updateOverview' : './javascript/updateOverview.js',
	'EnterPage' : './javascript/EnterPage.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};