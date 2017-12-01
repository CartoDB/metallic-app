import assert from 'assert'
import { RunnerInterface } from 'metallic-interfaces'
import HttpServerFactory from '../src'

describe('http-server-factory', function () {
  it('.create() should return a HttpServer instance', function () {
    const httpServer = HttpServerFactory.create()

    assert.ok(httpServer instanceof RunnerInterface)
  })
})
