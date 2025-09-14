import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')

  console.log('Component rendered with: ' + text)

  useEffect(() => {
    const handler = (e: any) => {
      setText((state) => state + e.key)
    }

    window.document.addEventListener('keypress', handler)

    return () => window.document.removeEventListener('keypress', handler)
  }, [text])

  return <>Text: {text}</>
}

export default App
