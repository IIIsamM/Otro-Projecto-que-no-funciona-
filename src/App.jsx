import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar';
import Content from './components/Content';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex w-full'>
          <Sidebar />
          <div className='flex-1'>  
            <Content />
          </div>
        </div>
    </>
  )
}

export default App
