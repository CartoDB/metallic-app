import { FactoryInterface } from 'metallic-interfaces'
import App from './app/app'
import Koa from 'koa'
import AppMiddlewares from './app/middleware/app-middlewares'
import CatchErrorMiddleware from './app/middleware/catch-error-middleware'
import ErrorMiddleware from './app/middleware/error-middleware'
import RequestIdMiddleware from './app/middleware/request-id-middleware'
import LogMiddleware from './app/middleware/log-middleware'
import MetricsMiddleware from './app/middleware/metrics-middleware'
import ResponseTimeMiddleware from './app/middleware/response-time-middleware'
import HttpServerLoggerMixin from './http-server-logger-mixin'
import HttpServer from './http-server'

export default class HttpServerFactory extends FactoryInterface {
  static create ({ metrics, logger, options } = {}) {
    options = {
      port: 0,
      ...options
    }

    const port = options.port
    const koa = new Koa()

    // add a reference to metrics from ctx
    if (metrics) {
      koa.context.metrics = metrics
    }

    const middlewares = new AppMiddlewares()

    middlewares.add(new CatchErrorMiddleware())

    middlewares.add(new RequestIdMiddleware())

    if (logger) {
      middlewares.add(new LogMiddleware({ logger }))
    }

    if (metrics) {
      middlewares.add(new MetricsMiddleware({ metrics }))
    }

    middlewares.add(new ResponseTimeMiddleware())
    middlewares.add(new ErrorMiddleware())

    const app = new App(koa, middlewares)

    const LoggedHttpServer = logger ? HttpServerLoggerMixin.mix(HttpServer) : HttpServer

    return new LoggedHttpServer({ app, port, logger })
  }
}
