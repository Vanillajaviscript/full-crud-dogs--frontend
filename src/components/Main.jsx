import { Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";
import { useEffect, useState } from "react";


const Main = () => {
  const [dogs, setDogs] = useState(null);

  const url = "http://localhost:3001/dogs/";

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
  }

  return (
    <div>main</div>
  )
}

export default Main;