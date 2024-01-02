'use client'
import { Label, Textarea } from 'flowbite-react';
import { useState } from 'react';
import Link from 'next/link';



const Editor = ({entry}) => {
    const [value, setValue] = useState(entry.content)
  return (
    <section className='w-full max-w-full flex justify-start items-start 
    flex-col px-10'>
        <h1 className='text-4xl font-bold leading-[1.15]  py-4
            bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent'>
        Create Journal
        </h1>

        <p className=' text-lg text-gray-600 sm:text-xl 
            text-left max-w-3xl'>
            Embark on a transformative journaling experience by leveraging the power of AI to analyze 
            and gain valuable insights from your personal reflections. 
        </p>


        <form
      className='mt-10 w-full max-w-3xl flex flex-col gap-7 overflow-hidden
      rounded-xl border border-gray-300 bg-neutral-200 shadow-lg p-5 '
      onSubmit={() => {}}
      >
        <label>
          <span className='font-semibold text-base text-gray-800'> Your Journal </span>

          <textarea 
            value={value}
            onChange={(e)=> setValue(e.target.value)}
            required
            className='w-full border-none flex rounded-lg h-[300px] mt-2 p-3 text-sm text-gray-600  bg-white/90
            focus:outline-none focus:ring-0'
          />
        </label>

        

        {/* <div className='flex-end mx-3 mb-5 gap-4'>

          <Link href={"/"} className='text-grey-500 text-sm'>
            Cancel
          </Link>

          <button type='submit' disabled={submitting}
          className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submitting ? `${type}...`: type}
          </button>

        </div> */}

        
      </form>

    </section>
  )
}

export default Editor