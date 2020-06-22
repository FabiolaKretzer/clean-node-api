const validator = require('validator')
const EmailValidator = require('./email-validator')
const MissingParamError = require('../errors/missing-param-error')

const makeSut = () => {
  return new EmailValidator()
}

describe('Email Validator', () => {
  test('Should return true if validator returns true', () => {
    const sut = makeSut()
    const isEmailValid = sut.isValid('valid_email@gmail.com')
    expect(isEmailValid).toBe(true)
  })

  test('Should return false if validator returns false', () => {
    validator.isEmailValid = false
    const sut = makeSut()
    const isEmailValid = sut.isValid('invalid_email@gmail.com')
    expect(isEmailValid).toBe(false)
  })

  test('Should call validator with correct email', () => {
    const sut = makeSut()
    sut.isValid('any_email@gmail.com')
    expect(validator.email).toBe('any_email@gmail.com')
  })

  test('Should throw if no email is provided', () => {
    const sut = makeSut()
    // expect(() => { sut.isValid() }).toThrow(new MissingParamError('email'))
    expect(sut.isValid).toThrow(new MissingParamError('email'))
  })
})
