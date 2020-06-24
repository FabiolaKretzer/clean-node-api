module.exports = app => {
  app.disable('x-powered-by')
  app.use((req, res, next) => {
    res.set('access-controll-allow-origin', '*')
    res.set('access-controll-allow-methods', '*')
    res.set('access-controll-allow-headers', '*')
    next()
  })
}
