import Link from "next/link"

export default function Home() {
  return (
    <div className='w-screen h-screen bg-black flex justify-center items-center text-white'>
      
      <div className='w-full max-w-[900px] mx-auto'>
        <h1 className='text-5xl mb-4'>Unleashing AI Harmony in Your Journal, Decoding Emotions Through Every Word.</h1>
          <p className='text-xl text-white/60 mb-6 '> 
              Our AI-infused journaling web app, MoodCraft, intuitively 
              deciphers the mood behind your thoughts, providing 
              a personalized and insightful reflection of your inner world.  
          </p>
        <div>
          <Link href="/journal">
            <button className="bg-blue-800 rounded-full px-6 py-4 text-xl transition easy-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  ">
              Get Started
            </button>
          </Link>
          
        </div>
      </div>
    </div>
  )
}
 