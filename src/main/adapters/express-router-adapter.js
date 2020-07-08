module.exports = class ExpressRouterAdapter {
  static adapt (handle) {
    return async (req, res) => {
      const httpRequest = {
        body: req.body
      }
      const httpResponse = await handle(httpRequest)
      res.status(httpResponse.statusCode).json(httpResponse.body)
    }
  }
}
