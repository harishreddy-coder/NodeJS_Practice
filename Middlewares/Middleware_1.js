
function middleware1 (req, res, next) {

    console.log('I am middleware_1')
    next()

}

module.exports = middleware1;