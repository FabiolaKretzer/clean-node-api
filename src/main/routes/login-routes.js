const makeLoginController = require('../factories/login-controller-factory')
const { adapt } = require('../adapters/express-router-adapter')

module.exports = router => {
  router.post('/login', adapt(makeLoginController()))
}
