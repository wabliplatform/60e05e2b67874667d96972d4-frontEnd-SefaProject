const http = require('http');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

class ExpressServer {
    constructor(port) {
      this.port = port;
      this.app = express();
      this.setupMiddleware();
    }
  
    setupMiddleware() {
      this.app.use(cors());
      this.app.use(bodyParser.json({ limit: '14MB' }));
      this.app.use(express.json());
      this.app.use(express.urlencoded({ extended: false }));
      this.app.use(cookieParser());
      this.app.use(express.static(__dirname));
      this.app.get('/', (req, res) => res.sendFile(path.join(__dirname,'html','HomePage.html')));
			this.app.get('/HomePage', (req, res) => res.sendFile(path.join(__dirname,'html','HomePage.html')));
			this.app.get('/HomePage/:id', (req, res) => res.sendFile(path.join(__dirname,'html','HomePage.html')));
			this.app.get('/Overview', (req, res) => res.sendFile(path.join(__dirname,'html','Overview.html')));
			this.app.get('/Overview/:id', (req, res) => res.sendFile(path.join(__dirname,'html','Overview.html')));
			this.app.get('/Contract', (req, res) => res.sendFile(path.join(__dirname,'html','Contract.html')));
			this.app.get('/Contract/:id', (req, res) => res.sendFile(path.join(__dirname,'html','Contract.html')));
			this.app.get('/Pre-Assessment', (req, res) => res.sendFile(path.join(__dirname,'html','Pre-Assessment.html')));
			this.app.get('/Pre-Assessment/:id', (req, res) => res.sendFile(path.join(__dirname,'html','Pre-Assessment.html')));
			this.app.get('/Profit&Loss', (req, res) => res.sendFile(path.join(__dirname,'html','Profit&Loss.html')));
			this.app.get('/Profit&Loss/:id', (req, res) => res.sendFile(path.join(__dirname,'html','Profit&Loss.html')));
			this.app.get('/RiskAssessmentProtocol', (req, res) => res.sendFile(path.join(__dirname,'html','RiskAssessmentProtocol.html')));
			this.app.get('/RiskAssessmentProtocol/:id', (req, res) => res.sendFile(path.join(__dirname,'html','RiskAssessmentProtocol.html')));
			this.app.get('/updateOverview', (req, res) => res.sendFile(path.join(__dirname,'html','updateOverview.html')));
			this.app.get('/updateOverview/:id', (req, res) => res.sendFile(path.join(__dirname,'html','updateOverview.html')));
			
    }
  
    launch() {
          http.createServer(this.app).listen(this.port);
          console.log(`Listening on port ${this.port}`);
    }
  
  
    async close() {
      if (this.server !== undefined) {
        await this.server.close();
        console.log(`Server on port ${this.port} shut down`);
      }
    }
  }
  
  module.exports = ExpressServer;