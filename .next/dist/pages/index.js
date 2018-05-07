'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _election = require('../election');

var _election2 = _interopRequireDefault(_election);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/basedgod/Documents/VoteSC/pages/index.js?entry';

// import { Link } from '../routes';

var voteIndex = function (_Component) {
    (0, _inherits3.default)(voteIndex, _Component);

    function voteIndex() {
        (0, _classCallCheck3.default)(this, voteIndex);

        return (0, _possibleConstructorReturn3.default)(this, (voteIndex.__proto__ || (0, _getPrototypeOf2.default)(voteIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(voteIndex, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, ' This is your Ballot ')));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var ballots;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _election2.default.methods.getDeployedBallots().call();

                            case 2:
                                ballots = _context.sent;
                                return _context.abrupt('return', { ballots: ballots });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return voteIndex;
}(_react.Component);

exports.default = voteIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkJ1dHRvbiIsImVsZWN0aW9uIiwiTGF5b3V0Iiwidm90ZUluZGV4IiwibWV0aG9kcyIsImdldERlcGxveWVkQmFsbG90cyIsImNhbGwiLCJiYWxsb3RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTTs7QUFDZixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFZOzs7Ozs7OztBQUNuQjs7SUFFTSxBOzs7Ozs7Ozs7OztpQ0FRUSxBQUNOO21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBSFosQUFDSSxBQUNJLEFBQ0ksQUFLZjs7Ozs7Ozs7Ozs7O3VDQWJ5QixtQkFBQSxBQUFTLFFBQVQsQUFBaUIscUJBQXFCLEEsQUFBdEM7O2lDQUFoQjtBO2lFQUNDLEVBQUUsUyxBQUFGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTFMsQSxBQXFCeEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvYmFzZWRnb2QvRG9jdW1lbnRzL1ZvdGVTQyJ9