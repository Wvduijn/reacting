import React from "react";

// Input: liked: boolean
// Output: onClick

const Like = ({ onClick, liked }) => {
  let classes = "fa fa-heart";
  if (!liked) classes += "-o";
  return (
    <i
      onClick={onClick}
      className={classes}
      aria-hidden="true"
      style={{ cursor: "pointer" }}
    />
  );
};

export default Like;
