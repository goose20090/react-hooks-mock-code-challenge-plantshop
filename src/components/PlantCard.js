import React, {useState} from "react";

function PlantCard({plant}) {
  const {price, image, name}= plant
  const [buttonStatus, setButtonStatus] = useState(true)
  function handleButtonClick(){
    setButtonStatus(!buttonStatus)
  }
  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {buttonStatus ? (
        <button className="primary" onClick={handleButtonClick}>In Stock</button>
      ) : (
        <button onClick = {handleButtonClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
