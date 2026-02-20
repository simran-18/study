import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'

function App() {
  const [message, setMessage] = useState('')
  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
  }, [])
  console.log('Message is ::: ', message)
  return (
    <>
      <p className="font-bold">{message}</p>
      <Button>Click</Button>
    </>
  )
}

export default App
