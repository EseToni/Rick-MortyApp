import "./App.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { validate } from "./helper/validateForm";

function App() {
  const navigate = useNavigate();
  const emailEjemplo = "falsigfx@gmail.com";
  const passwordEjemplo = "aleatorio123";
  const [access, setAccess] = useState(false);
  function login(form) {
    if ((form.email === emailEjemplo) & (form.password === passwordEjemplo)) {
      setAccess(true);
      navigate("/");
    }
  }
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "Introduce un email",
    password: "Introduce una contraseña",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
    setErrors(validate({ ...form, [property]: value }));
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const errosArray = Object.values(errors);

    if (errosArray.length === 0) {
      login(form);
      if (access) {
        setForm({ email: "", password: "" });
        setErrors({ email: "", password: "" });
        return alert("Login exitoso");
      }
      else{
        alert("Contraseña o email invalidos")
      }
    } else {
      alert("Introduce los datos necesarios");
    }
  };

  return (
    <div className="index">
      <img
        src="https://images6.alphacoders.com/909/909641.png"
        alt="no se ve"
        className="ambos"
      />
      <img
        src="https://images6.alphacoders.com/909/909639.png"
        alt="ricky"
        className="rickyimg"
      />
      <img
        src="https://images.alphacoders.com/909/909640.png"
        alt="morty"
        className="mortyimg"
      />
      <h1 className="title">Sé bueno, Morty. Sé mejor que yo.</h1>
      <div className="centrado">
        <form onSubmit={submitHandler}>
          <div className="emailDiv">
            <label htmlFor="">Email:</label>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            <br/>
            <span className="errors">{errors.email}</span>
          </div>
          <div className="passDiv">
            <label htmlFor="">Password:</label>
            <input
              type="text"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
            <br/>
            <span className="errors" >{errors.password}</span>
          </div>
          <button type="submit" className="buttonLogin">Login</button>
        </form>
      </div>
    </div>
  );
}

export default App;
