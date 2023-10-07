import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [display_pv, setDisplay_pv] = useState([])
  useEffect(() => {
    axios.get('https://project-node-js-98ba.onrender.com/get_provinces').then((res) => {
      setDisplay_pv(res.data)
    })
  }, [])
  return (
    <>
      <div>
        <ul>
          {display_pv.map((val) => {
            return <li> {val.name_th} </li>
          })}
        </ul>
      </div>
    </>
  )
}

export default App
