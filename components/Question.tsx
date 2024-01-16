'use client'

import { useState } from "react"



const Question = () => {

    const [value, setValue] = useState('')
    const onChange = (e) =>{
        e.preventDefault()
    }
  return (
    <div>
        <form >
            <input
                type="text"
                value={value}
                onChange={onChange}
                className="border border-gray-400 focus:border-gray-400 outline-0 focus:ring-0 shadow-xl rounded-lg p-2 text-lg mr-3 ml-10"
                
                placeholder="Ask a question?"
            />
            <button
                type="submit"
                className="bg-black font-semibold shadow-xl px-10 py-2 rounded-2xl text-white"
                >
                Ask
            </button>
            
      </form>

    </div>
  )
}

export default Question