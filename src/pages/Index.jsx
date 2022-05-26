import { Link } from "react-router-dom";
import { useState } from "react";


const Index = ({dogs, createDog}) => {
  const [form, setForm] = useState({
    id: "",
    name: "",
    gender: "",
    breed: "",
    age: "",
    location: "",
    img: "",
    description: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.targe.name]: e.target.value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createDog(form);
    setForm({
      id: "",
      name: "",
      gender: "",
      breed: "",
      age: "",
      location: "",
      img: "",
      description: ""
    })
  };

  const loaded = () => {
  return dogs.map((dog) => (
    <div className="dog-data" key={dog._id}>
      <Link to={`/dogs/${dog._id}`}>
        <h1>{dog.name}</h1>
      </Link>
    </div>
  ))
}
const loading = () => {
  return <h1>Loading...</h1>
}
return (
  <section>
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        name="id"
        placeholder="id number"
        value={form.id}
        onChange={handleChange} 
      />
      <input 
        type="text"
        name="name"
        placeholder="name"
        value={form.name}
        onChange={handleChange} 
      />
      <input 
        type="text"
        name="gender"
        placeholder="gender"
        value={form.gender}
        onChange={handleChange} 
      />
      <input 
        type="text"
        name="breed"
        placeholder="breed"
        value={form.breed}
        onChange={handleChange} 
      />
      <input 
        type="text"
        name="age"
        placeholder="age"
        value={form.age}
        onChange={handleChange} 
      />
      <input 
        type="text"
        name="location"
        placeholder="location"
        value={form.location}
        onChange={handleChange} 
      />
      <input 
        type="text"
        name="image"
        placeholder="image URL"
        value={form.img}
        onChange={handleChange} 
      />
      <input 
        type="text"
        name="description"
        placeholder="short description"
        value={form.description}
        onChange={handleChange} 
      />
      <button>New Dog</button>
    </form>
    {dogs ? loaded() : loading()}
  </section>
  )
}

export default Index;