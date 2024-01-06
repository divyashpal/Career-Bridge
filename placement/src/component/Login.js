// import { useState, useEffect } from "react";
// import Home from "./Home";
// function Signin() {

//     const [name1, setName] = useState()
//     // const [id,setId] = useState()
//     const [password, setPassword] = useState()
//     const [status, setStatus] = useState(false)

//     const [apidata, setapiData] = useState([])
//     useEffect(() => {
//         fetch("http://localhost:5000/").then((result) => {

//             result.json().then((data) => {
//                 setapiData(data)
//             })
//         }
//         )
//     }, [])

//     function CheckData() {
//         apidata.map((item) =>
//             name1 === item.name && password === item.password ? setStatus(true) : null

//         )


//     }

//     return (
//         <div>
//             {
//                 status ? <Home /> : <h1></h1>
//             }
//             <div>
//                 <input type="text" placeholder="Enter name" onChange={(e) => { setName(e.target.value) }}></input><br></br>
//                 <input type="text" placeholder="Enter password" onChange={(e) => { setPassword(e.target.value) }}></input><br></br>
//                 <button onClick={CheckData}>Submit</button>
//             </div>

//         </div>

//     )
// }

// export default Signin

// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   try {
  //     // Make a request to your backend to check the credentials
  //     const response = await axios.post('/api/login', { username, password });


  //     // Assuming your backend returns a success message
  //     if (response.data.success) {
  //       // Redirect to the home component upon successful login
  //       navigate('/');
  //     } else {
  //       alert('Invalid username or password. Please try again.');
  //     }
  //   } catch (error) {
  //     console.error('Error during login:', error);
  //   }
  // };
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', { username, password });
      setToken(response.data.token);
      alert('Login successful');
      window.location.href = '/'
    } catch (error) {
      console.error(error);
      alert('Invalid credentials');
    }
  };

  return (
    <div className='login'>
      <Helmet>
        <title>
          Login
        </title>
      </Helmet>
      <h2>Login</h2>
      
        <label>
          Username:
          <input className='login_space'
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input className='login_space'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button onClick={handleLogin}>Login</button>
        {token && <p>Token: {token}</p>}
      
    </div>
  );
};

export default Login;
