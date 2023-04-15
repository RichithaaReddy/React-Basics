//onsumbit = used in forms
import React,{useState} from 'react'
//useState
function App() {
  const [data , setData] = useState({
    username:'',
    password:'',
  })
//sestructuring
  const {username,password} = data
//updating
  const onChange = e =>{
    setData({...data,[e.target.name]:[e.target.value]} )
  }
//print dATA IN CONSOLE
  const submitHandler = e =>{
    e.preventDefault()
    console.log(data)
    // axios.post('url',data)
  }
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
        <input type="text" placeholder='USERNAME' name="username" onChange={onChange} value={username}/>
        <input type="password" placeholder='PASSWORD' name="password" onChange={onChange} value={password}/>
        <input type='submit' name='submit'/>
        </form>
      </center>
    </div>
  )
}

export default App
