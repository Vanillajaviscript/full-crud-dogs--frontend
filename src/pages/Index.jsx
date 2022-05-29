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
    img: ""
  });

  const handleChange = (e) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
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
      img: ""
    })
  };

  const loaded = () => {
  return (
    <div className="dog-names"> {dogs.map((dog) => (
      <div className="dog-data" key={dog._id}>
        <Link to={`/dogs/${dog._id}`}>
          <h5>{dog.name}</h5>
        </Link>
      </div>
    ))}
    </div>)
}
const loading = () => {
  return <h1>Loading...</h1>
}

return (
  <section>
    <form className="form-group" id="form" onSubmit={handleSubmit}>
      <input 
        type="text"
        name="id"
        placeholder="id number"
        value={form.id}
        onChange={handleChange} 
        required
      />
      <input 
        type="text"
        name="name"
        placeholder="name"
        value={form.name}
        onChange={handleChange} 
        required
      />
      <input 
        type="text"
        name="gender"
        placeholder="gender"
        value={form.gender}
        onChange={handleChange} 
        required
      />
      <input 
        type="text"
        name="breed"
        placeholder="breed"
        value={form.breed}
        onChange={handleChange} 
        required
      />
      <input 
        type="text"
        name="age"
        placeholder="age"
        value={form.age}
        onChange={handleChange} 
        required
      />
      <input 
        type="text"
        name="location"
        placeholder="location"
        value={form.location}
        onChange={handleChange} 
        required
      />
      <input 
        type="text"
        name="img"
        placeholder="image URL"
        value={form.img}
        onChange={handleChange} 
        required
      />
      <button className="btn btn-block">New Dog</button>
    </form>
    {dogs ? loaded() : loading()}
  </section>
  )
}

export default Index;