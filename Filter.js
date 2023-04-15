//filtering names having "R"
import React from 'react'

function App() {
  const arr = ["Ravi","bobby","Richi"]
  const filtered = arr.filter(names => names.includes('R'))

  return (
    <div>
      {
        filtered.map(item =>
          <li>{item}</li>
        )
      }
    </div>
  )
}

export default App

//filtering values greater than 50
import React from 'react'

function App() {
  const arr = [11,2,31,43,54,65,75,86,44]
  const filtered = arr.filter(val => val > 50)

  return (
    <div>
      {
        filtered.map(item =>
          <li>{item}</li>
        )
      }
    </div>
  )
}

export default App
