'use client'

import { askQuestion } from "@/utils/api"
import { Spinner } from "flowbite-react"
import { useState } from "react"



const Question = () => {

    const [value, setValue] = useState('')
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState()


    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        const answer = await askQuestion(value);
        setResponse(answer);
        setValue('')
        setLoading(false);
    }

    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                disabled = {loading}
                onChange={(e) =>{ setValue(e.target.value)}}
                className=" w-[40rem] focus:bg-transparent font-sans bg-neutral-200 focus:border-black/20 border border-neutral-400  outline-0 focus:ring-0 shadow-xl rounded-2xl p-2 text-lg mr-3 ml-10"
                
                placeholder="Ask a question?"
            />
            <button
                disabled = {loading}
                type="submit"
                className="bg-black font-semibold shadow-xl px-10 py-2 rounded-2xl text-white "
                >
                Ask
            </button>
            
      </form>

      {loading && <p className="text-black ml-10"> Loading <Spinner/> </p>}
      {response && <p className="text-black text-base font-sans pt-2 ml-10"> {response} </p>}

    </div>
  )
}

export default Question