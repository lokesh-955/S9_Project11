import React, { useState } from 'react'

const Registration = () => {

  const [status, setStatus] = useState(true)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmpassword, setConfirmpassword] = useState("")


  const btnSubmitClick = () => {
    alert("you click the button SUBMIT")
  }

  const btnResetClick = () => {
    alert("you click the button RESET")
    setUsername("")
    setStatus("invalid")
  }

  const Validateusername = (value) => {
    if (value.length >= 8)
      setStatus(false)
    else if(value.length <8){
      setStatus(true)
    }
    else
      setStatus(true)
  }
  const validateConfirmPassword = (value) => {
    if(value === password)
      setStatus(false)
    else
      setStatus(true)
  }

  return (
    <div>
      <table border={2}>
        <tr>
          <td><h5>Registration</h5></td>
        </tr>

        <tr>
          <td>
            <input type="text" placeholder="enter the username"
              value={username}
              onChange={(e) => {
              setUsername(e.target.value)
              Validateusername(e.target.value)
              }}
            />
          </td>
        </tr>

        <tr>
          <td>
            <input type="password" placeholder="enter the password"
            value={password}
              onChange={(e) => {
              setPassword(e.target.value)
              }}
            />
          </td>
        </tr>
         <tr>
          <td>
            <input type="password" placeholder="confirm the password"
            value={confirmpassword}
              onChange={(e) => {
              setConfirmpassword(e.target.value)
              validateConfirmPassword(e.target.value)
              }}
            />
          </td>
        </tr>

        <tr>
          <td>
            <input type="email" placeholder="enter the mail id" />
          </td>
        </tr>

        <tr>
          <td>
            <button
              disabled={status ===true}
              onClick={btnSubmitClick}
            >
              Submit
            </button>
            &nbsp;&nbsp;
            <button onClick={btnResetClick}>Reset</button>
          </td>
        </tr>

        <tr>
          <td>
            <h5>{username}:: {status}</h5>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default Registration