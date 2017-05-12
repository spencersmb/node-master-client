const nextRoutes = require('next-routes')
const routes = (module.exports = nextRoutes())

// 'page filename', 'route you want o have in the browser'
routes.add('details', '/store/details/:slug', 'store/details')
routes.add('edit', '/store/:id/edit', 'store')
routes.add('about', '/about-us/:foo(bar|baz)')
