import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Grid, Box, Paper } from "@mui/material";

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
      <Box sx={{ flexGrow: 1}}>
        <Grid className="dog-info" container spacing={1}>
          <Grid item xs={12} md={6}>
            <h4>Name: {dog.name.toUpperCase()}</h4>
          </Grid>
          <Grid item xs={6}>
            <h4>ID: {dog.id}</h4>
          </Grid>
          <Grid item xs={6}>
            <h4>Gender: {dog.gender}</h4>
          </Grid>
          <Grid item xs={6} >
            <h4>Breed: {dog.breed}</h4>
          </Grid>
          <Grid item xs={6}>
            <h4>Age: {dog.age}</h4>
          </Grid>
          <Grid item xs={12}>
            <h4>Current location: {dog.location}</h4>
          </Grid>
        </Grid>
      </Box>
      <img src={dog.img} alt={dog.name} />
      <form className="form-group" id="form" onSubmit={handleSubmit}>
        <input 
          type="text"
          name="id"
          placeholder="id"
          value={editForm.id}
          onChange={handleChange}
          required
        />
        <input 
          type="text"
          name="name"
          placeholder="name"
          value={editForm.name}
          onChange={handleChange}
          required
        />
        <input 
          type="text"
          name="gender"
          placeholder="gender"
          value={editForm.gender}
          onChange={handleChange}
          required
        />
        <input 
          type="text"
          name="breed"
          placeholder="breed"
          value={editForm.breed}
          onChange={handleChange}
          required
        />
        <input 
          type="text"
          name="age"
          placeholder="age"
          value={editForm.age}
          onChange={handleChange}
          required
        />
        <input 
          type="text"
          name="img"
          placeholder="img"
          value={editForm.img}
          onChange={handleChange}
          required
        />
        <input 
          type="text"
          name="location"
          placeholder="location"
          value={editForm.location}
          onChange={handleChange}
          required
        />
        <button className="btn btn-block" onClick={handleChange}>Submit</button>
        <hr />
        <button className="btn btn-block" onClick={removeDog}>Delete</button>
      </form>
    </div>
  )
}

export default Show;