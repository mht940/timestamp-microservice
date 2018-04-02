// server.js

// init project
const express = require('express')
const app = express()
const moment = require('moment')

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + '/views/index.html')
})

app.get("/:timeStamp", (req, res, next) => {
  let timeStamp = req.params.timeStamp
  if (/^[-]?\d+$/.test(req.params.timeStamp)) {
    let natural = moment.unix(timeStamp).utc(false).format("LL").toString()
    let unix = Number(timeStamp)
    res.status(200).send({unix, natural})
  } 
})

