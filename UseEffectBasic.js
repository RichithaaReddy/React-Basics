import React,{useState,useEffect} from 'react'

function App() {
  const [count,setCount] = useState(0)
  useEffect(()=>console.log("clicked"),[])
  //if no depecndecies i.e [] , useEffect will only run once after exectution
  return (
    <div>
      <h2> {count} </h2>
      <button onClick={()=>{setCount(count + 1)}}>add</button>
      <button onClick={()=>{setCount(count-1)}}>minus</button>
    </div>
  )
}

export default App



//when dependencies are present

//useEffect = realtime react hook =to execute a  react function after return statement
//piece of code in response to a change in the component's state or props. 
// useEffect to do things like fetch data from an API
// parameters = fuction and dependencies
import React,{useState,useEffect} from 'react'

function App() {
  const [count,setCount] = useState(0)
  useEffect(()=>console.log("clicked"),[count])
  //depecndecies = count ie everytime the value of count changes useeffect executes
  return (
    <div>
      <h2> {count} </h2>
      <button onClick={()=>{setCount(count + 1)}}>add</button>
      <button onClick={()=>{setCount(count-1)}}>minus</button>
    </div>
  )
}

export default App
