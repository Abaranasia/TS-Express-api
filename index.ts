
//const express = require('express')
import express from 'express';

const app = express()
const port = 3000

app.get('/', (req, res) => {

  res.status(401).json({
    ok: false,
    msg: 'No token provided on request'
  });
  
  res.json({
    ok: true,
    msg: 'Server up. Hi there!'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
