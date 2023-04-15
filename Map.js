//map function= to hydrate array of values and print it in individual component
// array.map((value,index)=><li>{value}</li>)
//value = each hydrated value
// hydration refers to the process of attaching event listeners and state to a rendered HTML content that was initially generated on the server-side.

import React from 'react'

function App() {
  const arr = [{
    id:1,
    name:"a"
  },
  {
    id:2,
    name:"b"
  },
  {
    id:3,
    name:"c"
  }

]
  return (
    <div>
      {
      arr.map(
        (value,index) => 
        <li key={index}>{value.name}</li>
        )
      }
    </div>
  )
}

export default App
