'use client'

import { useState,  } from 'react';
import Link from 'next/link';
import { updateEntry } from '@/utils/api';
import { useRouter } from 'next/navigation';
import { useAutosave } from 'react-autosave';

const Editor = ({entry}) => {
    const [value, setValue] = useState(entry.content)

    useAutosave({
      data: value, 
      onSave: async (_value) => {
        
      }
    })


    const router = useRouter();

    const handleClick = async () => {
      await updateEntry(entry.id, value);

      router.push(`/journal/${entry.id}`)
    }
  return (
    <section className='w-full max-w-full flex justify-start items-start 
    flex-col px-10'>
        <h1 className='text-4xl font-bold leading-[1.15]  py-4
            bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent'>
        Create Journal
        </h1>

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

        

        <div className='flex  mx-3 mb-5 gap-4'>

          <Link href={"/journal"} className='text-grey-500 px-5 shadow-md py-1.5 border border-black/30 hover:bg-white hover:border-none rounded-full text-sm'>
            Cancel
          </Link>

          <button type='submit' onClick={handleClick}
          className='px-5 py-1.5 text-sm  bg-black rounded-full text-white shadow-md border'
          >
            Update
          </button>

        </div>

        
      </form>

    </section>
  )
}

export default Editor