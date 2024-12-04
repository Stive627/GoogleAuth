const express = require('express')
const authRoutes = require('./authRoutes')
// The url to reach the google developper : https://console.developers.google.com/
const app = express()
app.use('/', authRoutes)
app.get('/', authRoutes.get(''), (req, res)=>{
    res.send('Authentication success.')
})
app.listen(3000, ()=>{
    console.log('The server is running at http://localhost:3000/')
})