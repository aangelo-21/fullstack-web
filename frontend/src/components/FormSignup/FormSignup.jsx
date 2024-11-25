import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signup } from '../../service/auth'
import './FormSignup.css'

const FormSignup = () => {
  const [showpop, setShowPop] = useState(false)

  const [username, setUserName] = useState()
  const [email, setEmail] = useState()
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [password, setPassword] = useState()

  const handleSignUp = async () => {
    let data = {
      email: email,
      username: username,
      firstName: firstName,
      lastName: lastName,
      password: password,
    }

    const signupResult = await signup(data)
    localStorage.setItem('userEmail', signupResult.user)
    localStorage.setItem('token', signupResult.token)
    localStorage.setItem('role', signupResult.role)
  }

  const sendButton = (e) => {
    e.preventDefault()
    handleSignUp()
    redirectUser()
  }

  const navigate = useNavigate()

  const redirectUser = () => {
    navigate('/Home')
  }

  return (
    <div>
      {showpop === true ? (
        <div id="pop">
          <button
            id="terms-button"
            onClick={(e) => {
              e.preventDefault()
              setShowPop(false)
            }}
          >
            X
          </button>
          By accepting these terms, you agree to let us collect, store, and use
          your personal data in ways you can't even imagine. We promise to
          protect your data like it's our own, which means we’ll share it with
          anyone willing to pay. Enjoy your privacy while it lasts!
        </div>
      ) : null}
      <form
        onSubmit={(e) => {
          sendButton(e)
        }}
        action=""
      >
        <label htmlFor="Email">Email:</label>
        <br />
        <input
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          id="email"
          type="email"
          placeholder="Your email here"
          required
        />
        <br />
        <br />

        <label htmlFor="Username">Username:</label>
        <br />
        <input
          onChange={(e) => {
            setUserName(e.target.value)
          }}
          id="username"
          type="text"
          placeholder="Your username here"
          required
        />
        <br />
        <br />

        <label htmlFor="First Name">First Name:</label>
        <br />
        <input
          onChange={(e) => {
            setFirstName(e.target.value)
          }}
          id="firstName"
          type="text"
          placeholder="Your first name here"
        />
        <br />
        <br />

        <label htmlFor="Last Name">Last Name:</label>
        <br />
        <input
          onChange={(e) => {
            setLastName(e.target.value)
          }}
          id="lastName"
          type="text"
          placeholder="Your last name here"
        />
        <br />
        <br />

        <label htmlFor="Password">Password:</label>
        <br />
        <input
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          id="password"
          type="password"
          placeholder="Your password here"
          required
        />
        <br />
        <br />

        <label htmlFor="Password">Confirm your Password:</label>
        <br />
        <input
          id="confirmPassword"
          type="password"
          placeholder="Confirm your password"
        />
        <br />
        <br />

        <input id="terms" type="checkbox" />
        <label htmlFor="Terms">
          I accept the{' '}
          <a
            href=""
            onClick={(e) => {
              e.preventDefault()
              setShowPop(true)
            }}
          >
            terms and conditions
          </a>{' '}
          :
        </label>
        <br />
        <br />

        <button>Sign Up</button>
      </form>
    </div>
  )
}

export default FormSignup
