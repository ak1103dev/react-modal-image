import React from "react";

import { ZoomInIcon, ZoomOutIcon, DownloadIcon, CloseIcon, RotateIcon } from "./icons";

const download = e => {
  console.log(e.target.href);
  fetch(e.target.href, {
    method: "GET",
    headers: {}
  })
    .then(response => {
      response.arrayBuffer().then(function(buffer) {
        const url = window.URL.createObjectURL(new Blob([buffer]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "image.jpg"); //or any other extension
        document.body.appendChild(link);
        link.click();
      });
    })
    .catch(err => {
      console.log(err);
    });
};

const Header = ({
  image,
  alt,
  zoomed,
  toggleZoom,
  toggleRotate,
  onClose,
  enableDownload,
  enableZoom,
  enableRotate
}) => (
  <div className="__react_modal_image__header">
    <span className="__react_modal_image__icon_menu">
      {enableDownload && (
        <a href={image} download onClick={download}>
          <DownloadIcon />
        </a>
      )}
      {enableZoom && (
        <a onClick={toggleZoom}>
          {zoomed ? <ZoomOutIcon /> : <ZoomInIcon />}
        </a>
      )}
      {enableRotate && (
        <a onClick={toggleRotate}>
          <RotateIcon/>
        </a>
      )}
      <a onClick={onClose}>
        <CloseIcon />
      </a>
    </span>
    {alt && <span className="__react_modal_image__caption">{alt}</span>}
  </div>
);

export default Header;
