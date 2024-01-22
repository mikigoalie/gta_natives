import { useState } from 'react'
import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Container from './Pages/Container'
import '@mantine/code-highlight/styles.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <MantineProvider  defaultColorScheme="dark" theme={{ colorScheme: 'dark' }}>
      <Container/>
    </MantineProvider>
  )
}

export default App
