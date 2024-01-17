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
    const [analysis, setAnalysis] = useState(entry.analysis);
    
    // useAutosave({
    //   data: value, 
    //   onSave: async (_value) => {
    //     setIsLoading(true)
    //     const updated = await updateEntry(entry.id, _value)
    //     setIsLoading(false)


    //   }
    // })
    var {mood, summary, color, subject, negative} = analysis;

    const analysisData = [
      {name: 'Summary', value: summary},
      {name: 'Subject', value: subject},
      {name: 'Mood', value: mood},
      {name: 'Negative', value: negative ? 'True' : 'False'},
      

    ]

    const router = useRouter();

    const handleClick = async () => {
      setIsLoading(true);
      const updated = await updateEntry(entry.id, value);
      setAnalysis(updated.analysis)
      setValue(updated.content)
      setIsLoading(false);
      
    }

   
  return (
    <div className='w-full h-full grid grid-cols-3'>
      <div className='col-span-2'>
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
          }}
          >
            <label>
              <span className='font-semibold text-base text-black'> Dear Me, </span>

              <textarea 
                value={value}
                onChange={(e)=> setValue(e.target.value)}
                required
                className='w-full border-none flex rounded-lg h-[200px] lg:h-[350px] 2xl:h-[600px] mt-1 p-3 text-base text-black font-sans   bg-neutral-200
                focus:outline-none focus:ring-0'
              />
            </label>

            

            <div className='flex  mx-3 mb-5 gap-4'>

              <Link href={"/journal"}   className='text-grey-500 px-5 bg-white shadow-xl py-1.5 border border-black/20 hover:bg-sky-300 hover:border-none rounded-full text-sm'>
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
      </div>

      <div className="mt-5 ">
        <div className='px-6 py-10 rounded-tl-lg rounded-bl-lg shadow-md' style={{backgroundColor: color}}>
          <h2 className="text-2xl">Analysis</h2>
        </div>

        <div className=" py-4 ">
            <ul>
              {
                analysisData.map(item => (
                  <li className=" flex items-center justify-between px-2 py-5 text-gray-800 border-b shadow-lg rounded-tl-lg rounded-bl-lg   border-white/10 shadom-md">
                    <span className="text-lg font-semibold ">{item.name}</span>
                    <span className="text-base font-sans pl-2 text-balance">{item.value}</span>

                  </li>
                ))
              }
            </ul>
          </div>
        
      </div>
    </div>
    
  )
}

export default Editor