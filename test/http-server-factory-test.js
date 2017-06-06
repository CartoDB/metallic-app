import assert from 'assert'
import { RunnerInterface } from 'metallic-interfaces'
import HttpServerFactory from '../src'
import MetricsFactory from 'metallic-metrics'

describe('http-server-factory', function () {
  it('.create() should return a HttpServer instance', function () {
    const logger = undefined
    const metrics = MetricsFactory.create()
    const httpServer = HttpServerFactory.create(metrics, logger, { port: 3000 })

    assert.ok(httpServer instanceof RunnerInterface)
  })
})
