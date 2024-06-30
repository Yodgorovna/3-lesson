import React from "react";

export const Card = ({ UserName }) => {
  return (
    <div>
      <h1>{UserName}</h1>
      <button>delete</button>
      <button>edit</button>
    </div>
  );
};
