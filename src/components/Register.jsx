import {useState} from "react";
import {FaUser} from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })
  const {name, email, password, password2} = formData;
  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(password !== password2) {
      alert("Passwords do not match!")
    }
  }

  return (
    <div className="register">
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please register to adopt</p>
      </section>
      <section className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              className="form-control" 
              id="name" 
              name="name"
              placeholder="Enter your name"
              value={name} 
              onChange={handleChange} 
              required
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              name="email"
              placeholder="Enter your email"
              value={email} 
              onChange={handleChange} 
              required
            />
          </div>
          <div className="form-group">
            <input 
              type="password" 
              className="form-control" 
              id="password" 
              name="password"
              placeholder="Enter your password"
              value={password} 
              onChange={handleChange} 
              required
            />
          </div>
          <div className="form-group">
            <input 
              type="password" 
              className="form-control" 
              id="password2" 
              name="password2"
              placeholder="Confirm your password"
              value={password2} 
              onChange={handleChange} 
              required
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
      
    </div>
  )
};

export default Register;
