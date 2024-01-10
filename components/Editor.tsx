'use client'

import {useState} from 'react';
import Link from 'next/link';
import { updateEntry } from '@/utils/api';
import { useRouter } from 'next/navigation';
import { useAutosave } from 'react-autosave';
import { Spinner } from 'flowbite-react';

const Editor = ({entry}) => {
    const [value, setValue] = useState(entry.content)
    const [isloading, setIsLoading] = useState(false);
    
    // useAutosave({
    //   data: value, 
    //   onSave: async (_value) => {
    //     setIsLoading(true)
    //     const updated = await updateEntry(entry.id, _value)
    //     setIsLoading(false)


    //   }
    // })


    const router = useRouter();

    const handleClick = async () => {
      setIsLoading(true);
      const updated = await updateEntry(entry.id, value);
      setIsLoading(false);
      
    }

   
  return (
    <section className='w-full max-w-full flex justify-start items-start 
    flex-col px-10 '>
        <h1 className='text-4xl font-bold leading-[1.15] py-2 
            bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent'>
        Create Journal
        </h1>

        {
          isloading && <p className='mt-5 text-lg text-gray-600 sm:text-xl text-left max-w-md'>
            Loading <Spinner />
          </p>
        }

        <form
      className='mt-5 2xl:mt-10 w-full max-w-3xl flex flex-col gap-7 overflow-hidden
      rounded-xl border border-gray-300 bg-neutral-200 shadow-lg p-3 '
      onSubmit={async (e) => {
        e.preventDefault();
      
        // await handleClick();
        router.push("/journal")
      }}
      >
        <label>
          <span className='font-semibold text-base text-gray-800'> Your Journal </span>

          <textarea 
            value={value}
            onChange={(e)=> setValue(e.target.value)}
            required
            className='w-full border-none flex rounded-lg h-[200px] lg:h-[350px] 2xl:h-[600px] mt-2 p-3 text-sm text-gray-600  bg-white/90
            focus:outline-none focus:ring-0'
          />
        </label>

        

        <div className='flex  mx-3 mb-5 gap-4'>

          <Link href={"/journal"}   className='text-grey-500 px-5 shadow-md py-1.5 border border-black/30 hover:bg-white hover:border-none rounded-full text-sm'>
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