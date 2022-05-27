import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";


const Show = ({ dogs, updateDog, deleteDog }) => {
  const { id } = useParams();
  const dog = dogs.find((dog) => dog._id === id);
  const navigate = useNavigate();

  const [ editForm, setEditForm ] = useState(dog);

  const handleChange = (e) => {
    setEditForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateDog(editForm, id);
    navigate("/");
  }

  const removeDog = () => {
    deleteDog(id);
    navigate("/")
  }

  return (
    <div className="show-dogs">
      <div className="dog-description">
        <h4>Name: {dog.name.toUpperCase()}</h4>
        <h4>ID: {dog.id}</h4>
        <h4>Gender: {dog.gender}</h4>
        <h4>Breed: {dog.breed}</h4>
        <h4>Age: {dog.age}</h4>
        <h4>Current location: {dog.location}</h4>
      </div>
      <img src={dog.img} alt={dog.name} />
      <button onClick={removeDog}>Delete</button>
      <form className="edit-form" onSubmit={handleSubmit}>
        <input 
          type="text"
          name="id"
          placeholder="id"
          value={editForm.id}
          onChange={handleChange}
        />
        <input 
          type="text"
          name="name"
          placeholder="name"
          value={editForm.name}
          onChange={handleChange}
        />
        <input 
          type="text"
          name="gender"
          placeholder="gender"
          value={editForm.gender}
          onChange={handleChange}
        />
        <input 
          type="text"
          name="breed"
          placeholder="breed"
          value={editForm.breed}
          onChange={handleChange}
        />
        <input 
          type="text"
          name="age"
          placeholder="age"
          value={editForm.age}
          onChange={handleChange}
        />
        <input 
          type="text"
          name="img"
          placeholder="img"
          value={editForm.img}
          onChange={handleChange}
        />
        <input 
          type="text"
          name="location"
          placeholder="location"
          value={editForm.location}
          onChange={handleChange}
        />
        <button onClick={handleChange}>Submit</button>
      </form>
    </div>
  )
}

export default Show;