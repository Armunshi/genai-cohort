import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Input } from './components/ui/input'
import { Button } from './components/ui/button'
import apiClient  from '../api/axios.js'
import { ArrowBigUp } from 'lucide-react'

function App() {
  const [prompt, setPrompt] = useState('')
  const [output,setOutput]  = useState('')
  const sendPrompt= async ()=>{
    
      const response = await apiClient.post('',JSON.stringify({prompt:prompt}),
    {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true 
    })
    console.log(response)
    setOutput(response.data.data.reply)
  }
  return (
    <>
    <nav className='h-30 bg-slate-900 text-orange-400'>
           AI -PERSONA OF hitesh sir
        </nav>
     
        <div className='flex flex-col items-center justify-center min-h-screen bg-slate-900 text-orange-400 px-4'>
        {output}
        
        <div className='w-full max-w-3xl flex items-end space-x-2 p-4 border border-gray-600 rounded-xl bg-white shadow-lg'>
          <textarea
            rows={1}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ask me a question..."
            className="flex-1 resize-none p-3 rounded-md text-black focus:outline-none overflow-hidden max-h-60"
            onInput={(e) => {
              e.target.style.height = 'auto'
              e.target.style.height = e.target.scrollHeight + 'px'
            }}
          />
          <Button onClick={sendPrompt} className="self-end p-2">
            <ArrowBigUp />
          </Button>
        </div>
      </div>
    </>
  )
}

export default App
