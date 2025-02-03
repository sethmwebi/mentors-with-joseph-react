import React from "react";
import Button from "./button";

export default function Toolbar({ onPlayMOvie, onUploadImage }) {
  return (
    <div>
      <Button onClick={onPlayMOvie}>Play Movie</Button>
      <Button onClick={onUploadImage}>Upload Image</Button>
    </div>
  );
}
