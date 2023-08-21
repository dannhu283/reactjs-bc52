import React from "react";

export default function UserProfile({
  name = " unknow",
  age = 0,
  isAdmin = false,
}) {
  //   const { name, age, isAdmin } = props;
  return (
    <div>
      <h3>
        Name:{name}
        {isAdmin && <span>(Admin)</span>}
      </h3>
      <p>Age:{age}</p>
    </div>
  );
}
