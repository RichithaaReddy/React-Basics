//what ever you type display down the input box

import React,{useState} from 'react'
function App() {
  const [user,setUser] = useState()
  const handler = e =>{
    setUser(e.target.value)
  }
  return (
    <div>
        <center>
          <input onChange={handler} type="text" placeholder='username' value={user}  name="user" />
          <h2>{user}</h2>
        </center>
    </div>
  )
}

export default App
