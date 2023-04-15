import React,{useState} from 'react'

function App() {
  const [name,setName] = useState("hello")
  return (
    <div>
      <button onClick={()=>{setName('bye')}}>{name}</button>
    </div>
  )
}

export default App


