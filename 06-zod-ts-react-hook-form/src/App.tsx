import { useState } from 'react'

import './App.css'
import { Button } from './components/ui/button'
import { NavBar } from './components/NavBar'
import { FormCompeletion } from './components/FormCompeletion'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <NavBar/>
      </nav>
      <div>
        <FormCompeletion/>
        {/* <Button variant={"destructive"}>Clik me</Button> */}
      </div>
    </>
  )
}

export default App
