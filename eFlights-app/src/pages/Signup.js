import React from 'react'

const Signup = () => {
  return (
    <>
        <div>
            <h2>Signup</h2>
            <form>
              <span>
                <label for="fName">First Name:</label>
                
                <input type={"text"} id="fName" name="fName"/>
                
                <label for="lName">Last Name:</label>
                
                <input type={"text"} id="lName" name="lName"/>
              </span>
                <br/>
                <span>
                <label for="email">Email:</label>
                
                <input type={"text"} id="email" name="email"/>
                
                <label for="conEmail">Confirm Email:</label>
                
                <input type={"text"} id="conEmail" name="conEmail"/>
                </span>
                <br/>
                <span>
                <label for="password">Password:</label>
                
                <input type={"text"} id="password" name="password"/>
                
                <label for="conPassword">Confirm Password:</label>
                
                <input type={"text"} id="conPassword" name="conPassword"/>
                </span>
                <br/>
                <input type={"submit"} value="Login"/>
            </form>
        </div>
    </>
  )
}

export default Signup