import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import Container from './components/Container'

function App() {
  // count variable inicial
  // setCount la función modificadora
  // useState(xxxxx) valor inicial que toma la variable
  
  const [count, setCount] = useState(0)

  return (
    <>
    <Button title="x1" text="xxxxx"/>
    <Button text="hola"/>
     <Button text="chao"/>
     <Container>
      <p>soy una etiqueta</p>
     </Container>
     <Container>
      <div>
        <p>hola</p>
      </div>
     </Container>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
