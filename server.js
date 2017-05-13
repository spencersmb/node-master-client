const express = require('express')
// const compression = require('compression');
const next = require('next')
const { createServer } = require('http')
const routes = require('./routes')
const { parse } = require('url')
const { join } = require('path')
// const fs = require('fs')
const bodyParser = require('body-parser') // turns the body into json object
// const colors = require('colors')
// ENV SETUP
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = routes.getRequestHandler(app)
const handle = app.getRequestHandler()
const port = process.env.PORT || 3000
// const handle = app.getRequestHandler()
const expressServer = express()

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
// app.prepare().then(() => {
//   createServer(handler).listen(port, err => {
//     if (err) throw err
//     console.log('> Ready on: ' + port)
//   })
// })

/*

Original Setup with express

*/
app.prepare().then(() => {
  // allows us to send json to our express app
  expressServer.use(bodyParser.json())

  // NEXT ROUTE EXAMPLE BELOW
  // page path in app is: /pages/store
  // filename is: edit.js
  // routes.add('edit', '/store/:id/edit', 'store/edit')
  expressServer.get('/store/:id/edit', (req, res) => {
    req.query = {
      id: req.params.id
    }

    return app.render(req, res, '/store/edit', req.query)
  })

  // routes.add('details', '/store/:slug', 'store/details')
  expressServer.get('/store/:slug', (req, res) => {
    req.query = {
      slug: req.params.slug
    }

    return app.render(req, res, '/store/details', req.query)
  })

  expressServer.get('*', (req, res) => {
    return handle(req, res)
  })

  expressServer.listen(port, err => {
    if (err) throw err
    console.log('> Ready on: ' + port + ' using express')
  })
})
