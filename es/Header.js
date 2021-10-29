import React from "react";
import { ZoomInIcon, ZoomOutIcon, DownloadIcon, CloseIcon, RotateIcon } from "./icons";

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
  return React.createElement("div", {
    className: "__react_modal_image__header"
  }, React.createElement("span", {
    className: "__react_modal_image__icon_menu"
  }, enableDownload && React.createElement("div", {
    onClick: function onClick() {
      return download(image);
    }
  }, React.createElement(DownloadIcon, null)), enableZoom && React.createElement("a", {
    onClick: toggleZoom
  }, zoomed ? React.createElement(ZoomOutIcon, null) : React.createElement(ZoomInIcon, null)), enableRotate && React.createElement("a", {
    onClick: toggleRotate
  }, React.createElement(RotateIcon, null)), React.createElement("a", {
    onClick: onClose
  }, React.createElement(CloseIcon, null))), alt && React.createElement("span", {
    className: "__react_modal_image__caption"
  }, alt));
};

export default Header;