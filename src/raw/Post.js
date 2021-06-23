import React from "react";
import { useParams } from "react-router";

function Post() {
  const { id } = useParams();
  return <h2>Id is ={id}</h2>;
}

export default Post;
