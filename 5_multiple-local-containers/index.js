const express = require('express')
const redis = require('redis')
const process = require('process')
const app = express()

const client = redis.createClient({
  host: 'redis-server', // container name
  port: 6379 // redis default port
})

client.set('visits', 0)

app.get('/', (req, res) => {
  process.exit(0) // to make server crash on purpose
  client.get('visits', (err, visits) => {
    res.send(`Number of visits is ${visits}`)
    client.set('visits', parseInt(visits) + 1)
  })
})

const PORT = 8081
app.listen(PORT, console.log(`Running on http://localhost:${PORT}`))
// the port in dockerfile is different from this, actually we can see the server in http://localhost:4000
