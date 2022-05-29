import { FaSignInAlt } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const {email, password} = formData;
  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
  }

  return (
    <div className="login">
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please log in to begin adoption application</p>
      </section>
      <section className="form">
        <form onSubmit={handleSubmit}>
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
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
      
    </div>
  )
};

export default Login;