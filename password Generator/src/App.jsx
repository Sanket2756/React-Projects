import { useState, useCallback, useEffect, useRef } from 'react'
import React from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
  
    <div className='w-full h-screen flex justify-center items-center bg-[#0f172a]'>
      
      {/* Card Styling: Darker background with better borders */}
      <div className='w-full max-w-md mx-auto shadow-2xl rounded-2xl px-6 py-8 text-white bg-[#1e293b] border border-gray-700'>
        
        <h1 className='text-2xl font-bold text-center mb-6 text-blue-400'>Password Generator</h1>

        <div className='flex shadow-inner rounded-xl overflow-hidden mb-6 bg-gray-800 border border-gray-600'>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-2.5 px-4 bg-transparent text-emerald-400 font-mono text-lg'
            placeholder='Generating...'
            readOnly
          />
          <button 
            className='bg-blue-600 hover:bg-blue-700 transition-colors px-5 py-2 text-white font-semibold'
            onClick={() => window.navigator.clipboard.writeText(password)}
          >
            Copy
          </button>
        </div>

        <div className='flex flex-col gap-y-4'>
          {/* Range Slider */}
          <div className='flex items-center justify-between bg-gray-800/50 p-3 rounded-lg'>
            <label className='text-gray-300 font-medium'>Length: <span className='text-blue-400'>{length}</span></label>
            <input
              type='range'
              min={6}
              max={40}
              className='cursor-pointer accent-blue-500 w-1/2'
              value={length}
              onChange={(e) => { setLength(e.target.value) }}
            />
          </div>

          <div className='flex gap-x-4'>
            {/* Numbers Checkbox */}
            <div className="flex items-center gap-x-2 bg-gray-800/50 px-4 py-2 rounded-lg flex-1 cursor-pointer">
              <input
                type="checkbox"
                checked={numberAllowed}
                id="numberInput"
                className='w-4 h-4 accent-blue-500'
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
              <label htmlFor='numberInput' className='cursor-pointer select-none'>Numbers</label>
            </div>

            {/* Special Characters Checkbox */}
            <div className="flex items-center gap-x-2 bg-gray-800/50 px-4 py-2 rounded-lg flex-1 cursor-pointer">
              <input
                type="checkbox"
                checked={charAllowed}
                id="charInput"
                className='w-4 h-4 accent-blue-500'
              onChange={() => setCharAllowed((prev) => !prev)}
              />
              <label htmlFor='charInput' className='cursor-pointer select-none'>Special</label>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App