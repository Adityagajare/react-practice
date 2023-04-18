import React from 'react'
import style from "./_authentication.module.css"

const Register = () => {
  return (
    <div id={style.registercontainer}>
      <div id={style.registerpage}>
        <form action="">
          <h2>Register Page</h2>
          <div id={style.forminnerdiv}>
            <label htmlFor="firstname">FirstName</label>
            <input type="text" name="firstname" id="firstname" />
          </div>
          <div id={style.forminnerdiv}>
            <label htmlFor="lastname">LastName</label>
            <input type="text" name="lastname" id="lastname" />
          </div>
          <div id={style.forminnerdiv}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div id={style.forminnerdiv}>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div id={style.forminnerdiv}>
            <label htmlFor="cnfpassword">Confirm Password</label>
            <input type="password" name="cnfpassword" id="cnfpassword" />
          </div>
          <div id={style.forminnerdiv}>
            <label htmlFor="dob">Date of Birth</label>
            <div id={style.registerselect}>
            <select name="date" id="date">
              <option value="-">-</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <select name="month" id="month">
                <option value="-">-</option>
                <option value="jan">Jan</option>
                <option value="feb">Feb</option>
                <option value="mar">March</option>
            </select>
            <select name="year" id="year">
                <option value="-">-</option>
                <option value="1995">1995</option>
                <option value="1996">1996</option>
                <option value="1997">1997</option>
                <option value="1998">1998</option>
                <option value="1999">1999</option>
                <option value="2000">2000</option>
              </select>
            </div>
          </div>
          <div id={style.forminnerdiv}>
            <label htmlFor="gender">Gender</label>
            <input type="radio" name="gender" id="male" value="male"/>Male
            <input type="radio" name="gender" id="female" value="female"/>Female
            <input type="radio" name="gender" id="others" value="others"/>Others
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register