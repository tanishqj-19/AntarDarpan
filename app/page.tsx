import Link from "next/link"
import { auth } from "@clerk/nextjs"

export default async function Home() {
  const {userId} = await auth();

  let href = userId ? '/journal' : '/new-user'
  
  return (
    <div className='w-screen h-screen bg-white flex justify-center items-center text-black'>
      <div className='w-full max-w-[900px] mx-auto'>
        <h1 className='text-4xl lg:text-5xl font-bold  leading-[1.25] lg:leading-snug'>Unleashing
          <span className="text-blue-700"> AI Harmony </span>
            in Your Journal, Decoding <span className="text-blue-700"> Emotions </span>
             Through Every Word.</h1>
          <p className='text-xl text-black/60 mb-6 '> 
              Our AI-infused journaling web app, MindGauge, intuitively 
              deciphers the mood behind your thoughts, providing 
              a personalized and insightful reflection of your inner world.  
          </p>
        <div>
          <Link href={href}>
            <button className="bg-black text-white  drop-shadow-md
            rounded-full px-6 py-4 text-xl transition easy-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  ">
              Get Started
            </button>
          </Link>

        </div>
      </div>
    </div>
  )
}
 