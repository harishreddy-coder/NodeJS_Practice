function middleware2 (req, res, next) {
    console.log('I am Middleware_2')
    next()
}

module.exports = middleware2;