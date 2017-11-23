import assert from 'assert'
import { RunnerInterface } from 'metallic-interfaces'
import HttpServerFactory from '../src'
import MetricsFactory from 'metallic-metrics'

describe('http-server-factory', function () {
  it('.create() should return a HttpServer instance', function () {
    const logger = undefined
    const metrics = MetricsFactory.create({ logger, options: { interval: 0 } })
    const httpServer = HttpServerFactory.create({
      metrics,
      logger,
      options: {
        port: 3000
      }
    })

    assert.ok(httpServer instanceof RunnerInterface)
  })
})
