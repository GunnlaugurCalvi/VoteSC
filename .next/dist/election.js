'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _ElectionCreation = require('./build/ElectionCreation.json');

var _ElectionCreation2 = _interopRequireDefault(_ElectionCreation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_ElectionCreation2.default.interface), '0x35B8DD7Edb318ab2ceea68672e61924a1Fd689fB');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZWN0aW9uLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJFbGVjdGlvbkNyZWF0aW9uIiwiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQTZCLEFBQTdCOzs7Ozs7QUFFQSxJQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQXNCLEtBQUssQUFBTCxNQUFXLDJCQUFpQixBQUE1QixBQUF0QixZQUNiLEFBRGEsQUFBakIsQUFJQTs7a0JBQWUsQUFBZiIsImZpbGUiOiJlbGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9iYXNlZGdvZC9Eb2N1bWVudHMvVm90ZVNDIn0=