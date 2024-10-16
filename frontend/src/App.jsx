import React from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const fun = () =>{
    const data = document.getElementsByTagName("input")[0].files[0]
    const formData = new FormData();
    formData.append("file",data);

    axios.post("http://localhost:9000/upload",formData)
    .then((res)=>{
      console.log(res.data);
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  return (
    <>
      <input type="file" />
      <button onClick={fun}>submit</button>
    </>
  )
}

export default App
