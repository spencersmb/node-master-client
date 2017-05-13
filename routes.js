const nextRoutes = require('next-routes')
const routes = (module.exports = nextRoutes())

// 'page filename', 'route you want o have in the browser', 'file path'
routes.add('details', '/store/:slug', 'store/details')
routes.add('edit', '/store/:id/edit', 'store/edit')
routes.add('about', '/about-us/:foo(bar|baz)')
// routes.add('product', '/customer/product/:brand/:product', 'customer/product')
