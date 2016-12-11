#!/usr/bin/env node
'use strict';

var _meow = require('meow');

var _meow2 = _interopRequireDefault(_meow);

var _uglifyJs = require('uglify-js');

var _uglifyJs2 = _interopRequireDefault(_uglifyJs);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cli = (0, _meow2.default)('\n  Usage\n    $ uglify-dir <input-path> <output-path>\n\n  Examples\n    $ uglify-dir src/js dist/js\n', {
  alias: {
    h: 'help'
  }
});

if (cli.input.length === 2) {
  (function () {
    var n = cli.input[0];
    var o = cli.input[1];

    _fs2.default.readdir(n, 'utf8', function (err, files) {
      if (err) throw err;

      files.map(function (file) {
        _shelljs2.default.exec('node_modules/.bin/uglifyjs ' + _path2.default.resolve(n, file) + ' -o ' + _path2.default.resolve(o, file) + ' -c -m');
      });
    });
  })();
} else {
  cli.showHelp();
}
