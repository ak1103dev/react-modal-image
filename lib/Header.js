"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _icons = require("./icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var download = function download(image) {
  fetch(image, {
    method: "GET",
    headers: {}
  }).then(function (response) {
    response.arrayBuffer().then(function (buffer) {
      var url = window.URL.createObjectURL(new Blob([buffer]));
      var link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "image.jpg"); //or any other extension

      document.body.appendChild(link);
      link.click();
    });
  })["catch"](function (err) {
    console.log(err);
  });
};

var Header = function Header(_ref) {
  var image = _ref.image,
      alt = _ref.alt,
      zoomed = _ref.zoomed,
      toggleZoom = _ref.toggleZoom,
      toggleRotate = _ref.toggleRotate,
      onClose = _ref.onClose,
      enableDownload = _ref.enableDownload,
      enableZoom = _ref.enableZoom,
      enableRotate = _ref.enableRotate;
  return _react["default"].createElement("div", {
    className: "__react_modal_image__header"
  }, _react["default"].createElement("span", {
    className: "__react_modal_image__icon_menu"
  }, enableDownload && _react["default"].createElement("a", {
    onClick: function onClick() {
      return download(image);
    }
  }, _react["default"].createElement(_icons.DownloadIcon, null)), enableZoom && _react["default"].createElement("a", {
    onClick: toggleZoom
  }, zoomed ? _react["default"].createElement(_icons.ZoomOutIcon, null) : _react["default"].createElement(_icons.ZoomInIcon, null)), enableRotate && _react["default"].createElement("a", {
    onClick: toggleRotate
  }, _react["default"].createElement(_icons.RotateIcon, null)), _react["default"].createElement("a", {
    onClick: onClose
  }, _react["default"].createElement(_icons.CloseIcon, null))), alt && _react["default"].createElement("span", {
    className: "__react_modal_image__caption"
  }, alt));
};

var _default = Header;
exports["default"] = _default;