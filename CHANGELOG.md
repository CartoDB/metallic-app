# Metallic App ChangeLog

## v0.9.0 (2017-mm-dd)

 - Update deps:
   + koa: 2.4.1
   + babel-cli: 6.26.0
   + babel-plugin-transform-es2015-modules-commonjs: 6.26.0
   + babel-plugin-transform-object-rest-spread: 6.26.0
   + babel-register: 6.26.0
   + metallic-errors: 0.2.0
   + metallic-interfaces: 0.3.0
   + metallic-logger: 0.9.0
   + mocha: 4.0.1
   + nyc: 11.3.0
   + sinon: 4.1.2
   + source-map-support: 0.5.0
   + standard: 10.0.3


## v0.8.0 (2017-10-29)

 - Do not build log-middleware when logger is not provided
 - Do not emit error to application
 - Add support for Travis CI


## v0.7.0 (2017-07-02)

 - Improved error middleware: now do NOT rely on koa's default error middleware


## v0.6.0 (2017-06-25)

 - Update dependencies
 - Use mixin pattern to log http-server activity
 - Expose app provider
 - Use object as constructor params


## v0.5.0 (2017-06-06)

 - Update dependencies
 - Add package-lock.json


## v0.4.0 (2017-04-09)

 - Update dependencies


## v0.3.0 (2017-04-06)

 - Fix default port value, rely on OS to choose an available port
 - Upgraded dependencies


## v0.2.1 (2017-03-26)

 - Rename http-server-factory default export


## v0.2.0 (2017-03-22)

 - Remove babel plugin
 - Set port: 3000 as default


## v0.1.0 (2017-03-20)

 - First release
