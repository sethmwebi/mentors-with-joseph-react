import React from "react";

const Avatar = ({ person, size }) => {
  return (
    <img
      src={person.imgUrl}
      alt={person.name}
      height={size}
      width={size}
      className="avatar"
    />
  );
};

export default Avatar;
