const makeLoginController = require('../../presentation/controllers/login-controller')
const AuthUseCase = require('../../domain/usecases/auth-usecase')
const EmailValidator = require('../../utils/helpers/email-validator')
const LoadUserByEmailRepository = require('../../infra/repositories/load-user-by-email-repository')
const UpdateAccessTokenRepository = require('../../infra/repositories/update-access-token-repository')
const Encrypter = require('../../utils/helpers/encrypter')
const TokenGenerator = require('../../utils/helpers/token-generator')
const env = require('../config/env')

module.exports = () => {
  const tokenGenerator = new TokenGenerator(env.tokenSecret)
  const encrypter = new Encrypter()
  const loadUserByEmailRepository = new LoadUserByEmailRepository()
  const updateAccessTokenRepository = new UpdateAccessTokenRepository()
  const emailValidator = new EmailValidator()
  const authUseCase = new AuthUseCase({
    loadUserByEmailRepository,
    updateAccessTokenRepository,
    encrypter,
    tokenGenerator
  })
  return makeLoginController({
    authUseCase,
    emailValidator
  })
}
