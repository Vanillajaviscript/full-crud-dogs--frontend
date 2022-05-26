import { Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";
import { useEffect, useState } from "react";


const Main = () => {
  const [dogs, setDogs] = useState(null);

  const url = "https://full-crud-dogs--mern.herokuapp.com/dogs/";

  const getDogs = () => {
    const res = fetch(url);
    const data = res.json();
    setDogs(data);
    console.log(data)
  }

  const createDog = async (dog) => {
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(dog)
    })
    getDogs()
  }

  const updateDog = async (dog, id) => {
    await fetch(`${url}${id}`, {
      method: "PUT",
      header: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(dog)
    })
    getDogs()
  }
  return (
    <div>main</div>
  )
}

export default Main;