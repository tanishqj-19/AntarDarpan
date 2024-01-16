'use client'

import { useState } from "react"



const Question = () => {

    const [value, setValue] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={(e) =>{ setValue(e.target.value)}}
                className=" w-[40rem] focus:bg-transparent font-sans bg-neutral-200 focus:border-black/20 border border-neutral-400  outline-0 focus:ring-0 shadow-xl rounded-2xl p-2 text-lg mr-3 ml-10"
                
                placeholder="Ask a question?"
            />
            <button
                type="submit"
                className="bg-black font-semibold shadow-xl px-10 py-2 rounded-2xl text-white "
                >
                Ask
            </button>
            
      </form>

    </div>
  )
}

export default Question