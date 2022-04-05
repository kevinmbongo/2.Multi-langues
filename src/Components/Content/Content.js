import React from "react";
import data from "../../assets/data.js";
import "./Content.css";

export default function Content() {
  return (
    <div className="content">
      <h1 className="title">{data["FR"].title}</h1>
      <p className="content-txt">{data["FR"].txt}</p>
    </div>
  );
}
