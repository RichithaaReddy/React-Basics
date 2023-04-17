// Get API Data Using Fetch API In Reactjs
import React,{useEffect, useState} from 'react';

const App = () => {
    const [data,setData] = useState([])
    //map function used to render the list of items expects an array[] as input in useState
    useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/todos').then(
         response => response.json()
       ).then(json=> setData(json))

    },[])
  return (
    <div>
      {
        data.map(item =><li key={item.id} >{item.title}</li>)
      }
    </div>
  ); 
}

export default App;
