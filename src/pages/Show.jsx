import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";


const Show = ({dogs, createDog, updateDog, deleteDog}) => {
  const { id } = useParams();
  const dog = dogs.find((dog) => dog._id === id);
  const navigate = useNavigate();

  const [ editForm, setEditForm ] = useState(dog);

  const handleChange = (e) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value
    })
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
      <h1>{dog.name}</h1>
      <h1>{dog.id}</h1>
      <h2>{dog.gender}</h2>
      <h2>{dog.breed}</h2>
      <h2>{dog.age}</h2>
      <h2>{dog.location}</h2>
      <img src={dog.img} alt={dog.name} />
      <button onClick={removeDog}>Delete</button>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="id"
          placeholder="id"
        />
      </form>
    </div>
  )
}

export default Show;