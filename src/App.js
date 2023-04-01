import React, { useEffect, useState } from 'react';


function App() {

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
        <p>
          HOME PAGE
        </p>
      </header>
    </div>
  );
}

export default App;
