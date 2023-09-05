import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PostDetails() {
  //giá trị động sau  Dynamic segment là giá trị của params
  const { id } = useParams();

  return (
    <div>
      <h1>Post Details({id})</h1>
    </div>
  );
}
