// const express = require('express')
const next = require('next')
const { createServer } = require('http')
const routes = require('./routes')
const { parse } = require('url')
const { join } = require('path')
// const fs = require('fs')
// const bodyParser = require('body-parser') // turns the body into json object
// const colors = require('colors')
// ENV SETUP
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = routes.getRequestHandler(app)
const handle = app.getRequestHandler()
const port = process.env.PORT || 3000
// const handle = app.getRequestHandler()
// const expressServer = express()

/*

Start APP WITH STATIC FILES

*/
// app.prepare().then(() => {
//   createServer((req, res) => {
//     const parsedUrl = parse(req.url, true)
//     const rootStaticFiles = [
//       '/robots.txt',
//       '/sitemap.xml',
//       '/favicon.ico',
//       '/styles.css'
//     ]
//     if (rootStaticFiles.indexOf(parsedUrl.pathname) > -1) {
//       const path = join(__dirname, 'static', parsedUrl.pathname)
//       app.serveStatic(req, res, path)
//     } else {
//       handler(req, res, parsedUrl)
//     }
//   }).listen(port, err => {
//     if (err) throw err
//     console.log('> Ready on: ' + port)
//   })
// })

/*

Start APP

*/
app.prepare().then(() => {
  createServer(handler).listen(port, err => {
    if (err) throw err
    console.log('> Ready on: ' + port)
  })
})

/*

Original Setup with express

*/
// app.prepare().then(() => {
//   // allows us to send json to our express app
//   expressServer.use(bodyParser.json())

//   // Potentailly get USER on every render her before using getInitialProps? with Middlewear

//   expressServer.get('/other', (req, res) => {
//     // console.log(serverLock.getBaseUrl(req));

//     req.query = {
//       text: 'spencer'
//     }

//     console.log(req.query)
//     return app.render(req, res, '/other', req.query)
//   })

//   expressServer.get('/store/:id', (req, res) => {
//     const actualPage = '/store'
//     const queryParams = { id: req.params.id }
//     console.log(actualPage)
//     console.log(queryParams)

//     app.render(req, res, actualPage, queryParams)
//   })

//   expressServer.get('/', (req, res) => {
//     // console.log('SECURE'.red);
//     // console.log(JSON.stringify(req.secure, null, 2));
//     // console.log('headers'.red);
//     // console.log(JSON.stringify(req.headers, null, 2));

//     return app.render(req, res, '/', req.query)
//   })

//   expressServer.get('*', (req, res) => {
//     return handle(req, res)
//   })

//   expressServer.listen(port, err => {
//     if (err) throw err
//     console.log('> Ready on: ' + port)
//   })
// })
