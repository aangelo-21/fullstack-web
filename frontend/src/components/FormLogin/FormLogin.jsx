import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../service/auth';

/* import { useContext } from 'react'
import { loginContext } from '../../Context/login' */

const FormLogin = () => {

  /*   const loginStatus = useContext(loginContext) */

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

   const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate()

  const handleLogIn = async () => {
    let data = { email: email, password: password }
    console.log(data);
    try {
      const loginResult = await login(data)
      
      if (loginResult != undefined) {
        localStorage.setItem("userEmail", loginResult.email)
        localStorage.setItem("token", loginResult.token);
        localStorage.setItem("role", loginResult.role);
        navigate('/Home');
      } else {
        // It never comes here :(
       
      }

    } catch (error) {
      
      setErrorMessage('Wrong password or email');
    } 
  };   
  

      return (
        <div>
          <form action="">
            <label htmlFor="Email">Email:</label>
            <br />
            <input onChange={(e) => {
              setEmail(e.target.value)
            }} id="email" type="text" placeholder="Your email here" />
            <br />
            <br />

            <label htmlFor="Password">Password:</label>
            <br />
            <input onChange={(e) => {
              setPassword(e.target.value)
            }} id="password" type="password" placeholder="Your password here" />
            <br />
            <br />

            <button onClick={(e) => {
              e.preventDefault();
              handleLogIn();
             /*  redirectUser() */
            }}>Log In</button>

            <p>Still don't have an account?</p>
            <p>
              <a href="/Signup">Join us here!</a>
            </p>
          </form>
          {errorMessage && <p style={{ color: 'red', fontSize: '12px'  }}  >{errorMessage}</p>}
        </div>
      )
    }
  /* export const UserContext = createContext('defaultValue') */
  export default FormLogin
