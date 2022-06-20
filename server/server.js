const express = require('express')
const next = require('next')
var cors = require('cors')
const bodyParser = require('body-parser')
var randomstring = require("randomstring");
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json())
  server.use(cors())

  server.get('/api',(req,res)=>{
    res.send('sa')
  })
  server.post('/api/shorten', async (req, res) => {
    const key = randomstring.generate(7);
    const { url } = req.body
    const shortUrl = await prisma.link.create({
      data: {
        key,
        url
      },
    })
    res.json(shortUrl)
  })

  server.get('/api/shorten/', async (req, res) => {
    console.log(req.params)
    const key = req.query.key
    const url = await prisma.link.findMany({
      where: {
        key
      },
    })
    console.log(url)
    res.json({
      url:url[0].url
    })
  })

  
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(process.env.PORT ,(err) => {
    if (err) throw err
    console.log('Ready on http://localhost:3000')
  })
})