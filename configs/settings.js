'use strict'

var path = require('path')
var rootPath = path.normalize(__dirname + '/../..')
var _ = require('lodash')
var baseLine = {
  root: rootPath,
  hostname: process.env.HOST || process.env.HOSTNAME,
  templateEngine: 'swig',
  // The secret should be set to a non-guessable string that
  // is used to compute a session hash
  sessionSecret: 'MEANSTACKJS',
  // The name of the MongoDB collection to store sessions in
  sessionCollection: 'sessions',
  // The session cookie settings
  sessionCookie: {
    path: '/',
    httpOnly: true,
    // If secure is set to true then it will cause the cookie to be set
    // only when SSL-enabled (HTTPS) is used, and otherwise it won't
    // set a cookie. 'true' is recommended yet it requires the above
    // mentioned pre-requisite.
    secure: false,
    // Only set the maxAge to null if the cookie shouldn't be expired
    // at all. The cookie will expunge when the browser is closed.
    maxAge: null
  },

  // The session cookie name
  sessionName: 'connect.meanstackjs',
  title: 'MEANSTACKJS',
  // // 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js',
  //       'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/js/bootstrap.min.js',
  //       'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.6/moment.js',
  //       'https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.2/toastr.min.js',
  //       'https://ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular.js',
  //       'https://ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular-sanitize.js',
  //       'https://ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular-animate.js',
  //       'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.7/angular-resource.js',
  //       'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.js',
  //       'https://angular-ui.github.io/bootstrap/ui-bootstrap-tpls-0.14.3.js',
  //       'https://cdnjs.cloudflare.com/ajax/libs/angular-moment/0.10.3/angular-moment.js',
  // '/modules/client.module.js',
  //     '/modules/system/system.module.js',
  //     '/modules/user/user.module.js',
  //     '/modules/blog/blog.module.js',
  //     '/modules/exception/exception.module.js',
  //     '/modules/logger/logger.module.js',
  //     '/modules/router/router.module.js',
  //     '/modules/layout/layout.module.js',
  //     '/modules/header/header.module.js',
  //     '/modules/footer/footer.module.js',
  //     '/modules/core/core.module.js',
  //     '/modules/core/config.js',
  //     '/modules/core/constants.js',
  //     '/modules/core/core.route.js',
  //     '/modules/layout/layout.controller.js',
  //     '/modules/header/header.controller.js',
  //     '/modules/footer/footer.controller.js',
  //     '/modules/exception/exception-handler.provider.js',
  //     '/modules/exception/exception.js',
  //     '/modules/logger/logger.js',
  //     '/modules/router/router-helper.provider.js',
  //     '/modules/system/system.controller.js',
  //     '/modules/system/system.routes.js',
  //     '/modules/user/user.controller.js',
  //     '/modules/user/user.routes.js',
  //     '/modules/blog/blog.controller.js',
  //     '/modules/blog/blog.routes.js'

  // /'/bower_components/bootstrap/dist/css/bootstrap.min.css',
  assets: {
    js: [
      '/bower_components/ng-file-upload/ng-file-upload-all.js',
      '/bower_components/angular-mocks/angular-mocks.js',
      '/bower_components/angular-cookies/angular-cookies.js',
      '/bower_components/angular-sanitize/angular-sanitize.js',
      '/bower_components/angular-animate/angular-animate.js',
      '/bower_components/angular-resource/angular-resource.js',
      '/bower_components/angular-ui-router/release/angular-ui-router.js',
      '/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      '/bower_components/angular-moment/angular-moment.js',
      '/bower_components/moment/moment.js',
      '/bower_components/toastr/toastr.js',
      '/bower_components/bootstrap/dist/js/bootstrap.js',
      '/bower_components/angular/angular.js',
      '/bower_components/jquery/dist/jquery.js'
    ],
    css: [
      '/styles/compiled/global.style.css',
      '/bower_components/toastr/toastr.css',
      '/bower_components/font-awesome/css/font-awesome.min.css'
    ]
  },
  buildreq: {
    response: {
      method: 'get',
      data: {},
      user: {},
      count: 0,
      hostname: '',
      type: '',
      actions: {
        prev: false,
        next: false,
        reload: false
      },
      delete: ['error']
    },
    query: {
      sort: '',
      limit: 20,
      select: '',
      filter: {},
      populateId: 'user',
      populateItems: '',
      lean: false,
      skip: 0,
      where: '',
      gt: 1,
      lt: 0,
      in: [],
      equal: '',
      errorMessage: 'Unknown Value'
    },
    routing: {
      schema: true,
      url: '/api/v1/',
      build: true
    }
  }
}
var settings
if (process.env.NODE_ENV === 'test') {
  settings = _.merge(baseLine, require('./environments/test.js'))
} else if (process.env.NODE_ENV === 'production') {
  settings = _.merge(baseLine, require('./environments/production.js'))
} else {
  settings = _.merge(baseLine, require('./environments/development.js'))

// var settings = require('./configs/settings.js')
}

module.exports = settings
