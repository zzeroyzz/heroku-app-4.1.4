import './App.css';

import {useState, useEffect} from "react"

function url(path){
  return process.env.NODE_ENV === "development" ?
  `http://localhost:1234${path}` :path
}

function App() {
  const [appData, setAppData] =useState("Hi!")

  useEffect(() =>{
    fetch(url("/api/"))
    .then(res =>res.json())
    .then(apiData => setAppData(apiData.data))
  },[])
  return (
    <div className="App">
      <header className="App-header">
        API Data: {appData}
      </header>
    </div>
  );
}

export default App;
