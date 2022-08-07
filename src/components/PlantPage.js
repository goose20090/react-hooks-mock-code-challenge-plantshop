import React, {useEffect, useState}from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants]= useState([]);
  const [search, setSearch]= useState([]);

  const [plantName, setPlantName]= useState("")
  const [plantImage, setPlantImage]= useState("")
  const [plantPrice, setPlantPrice]= useState(0.00)


  function handleNameChange(e){
    setPlantName(e.target.value)
  }

  function handleImageChange(e){
    setPlantImage(e.target.value)
  }

  function handlePriceChange(e){
    setPlantPrice(e.target.value)
  }

  function handleSearchChange(e){
    setSearch(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()

    fetch ("http://localhost:6001/plants", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "name": plantName,
        "image": plantImage,
        "price": plantPrice
      })
    }).then(res=> res.json())
    .then(plant=> {
      setPlants([...plants, plant])
    })
  }

  useEffect(()=>{
    fetch('http://localhost:6001/plants')
    .then(res=> res.json())
    .then(data=> {
      setPlants(data)
    })
  }, [])
  return (
    <main>
      <NewPlantForm handleSubmit = {handleSubmit} handleImageChange= {handleImageChange} handleNameChange ={handleNameChange} handlePriceChange = {handlePriceChange}/>
      <Search handleSearchChange = {handleSearchChange}/>
      <PlantList plants ={plants.filter((plant)=> plant.name.toLowerCase().includes(search))}/>
    </main>
  );
}

export default PlantPage;
