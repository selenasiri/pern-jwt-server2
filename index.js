const express = require('express')
const app = express()
const cors = require('cors')

//middleware

app.use(express.json()) //req.body whenever accessing data from the client side
app.use(cors())

//ROUTES

//reguster and login routes

app.use('/auth', require('./routes/jwtAuth'))
app.use('/dashboard', require('./routes/dashboard'))

app.listen(5000, () => {
  console.log('server is running on port 5000')
})

// https://www.youtube.com/watch?v=7UQBMb8ZpuE&t=4537s
// Learn JWT with the PERN stack by building a Registration/Login system Part 1  -- api web server
// Mar 17, 2020 length - 1:33
