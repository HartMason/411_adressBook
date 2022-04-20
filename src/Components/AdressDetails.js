import React, { useEffect, useState } from "react";

export default function AdressDetails(props) {
  const { item } = props;

  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    setIsClicked(!isClicked);
    console.log(isClicked);
  };

  return (
    <li>
      <h3>{item.name.first + " " + item.name.last}</h3>
      <img src={item.picture.medium} />
      <div>
        <button onClick={clickHandler}>Details</button>
      </div>
      {isClicked ? (
        <div>
          <p>{item.cell}</p>
          <p>{item.email}</p>
          <p>{item.dob.age}</p>
        </div>
      ) : (
        <div></div>
      )}
    </li>
  );
}
