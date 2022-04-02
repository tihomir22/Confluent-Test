import React from "react";
import "./TitleBlock.scss";

export interface TitleBlockProps {
  title: string;
}

function TitleBlock(props: TitleBlockProps) {
  return (
    <div className="title-container">
      <div className="short-separator"></div>
      <h1 className="title">{props.title}</h1>
    </div>
  );
}

export default TitleBlock;
