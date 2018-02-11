'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SimpleErrorObject = require('./SimpleErrorObject');

Object.keys(_SimpleErrorObject).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _SimpleErrorObject[key];
    }
  });
});

var _SimpleErrorObject2 = _interopRequireDefault(_SimpleErrorObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SimpleErrorObject2.default;
