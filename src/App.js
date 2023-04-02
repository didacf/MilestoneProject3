import React, { useEffect, useState } from 'react';


function App() {

    const [description, setName] = useState('');
    const [email, setEmail] = useState('');
  
    function handleSubmit(event) {
      event.preventDefault();
      fetch('http://localhost:5000/add_user', {
        method: 'POST',
        body: JSON.stringify({ description, email })
      })
      .then(response => {
        if (response.ok) {
          console.log('User added successfully');
          // TODO: take some action, such as redirecting to another page
        } else {
          throw new Error('Failed to add user');
        }
      })
      .catch(error => {
        console.error(error);
        // TODO: handle the error in some way, such as displaying an error message to the user
      });
    }
  
    const [data, setData] = useState([{}])

    useEffect(()=>{
    fetch("http://127.0.0.1:5000/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
    }, [])

  return (
    <div className="App">
      <header className="App-header">

      <div>
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="int"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <button type="submit">Add User</button>
      </form>
    </div>
      </header>
    </div>
  );
}

export default App;
