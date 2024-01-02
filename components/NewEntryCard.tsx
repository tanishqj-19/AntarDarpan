'use client'

import { createNewEntry } from "@/utils/api"
import { revalidatePath } from 'next/cache'
import { useRouter } from 'next/navigation'

const NewEntry = () => {
  const router = useRouter()

  const handleOnClick = async () => {
    const data = await createNewEntry()

    router.push(`/journal/${data.id}`)

  }

  return (
    <div
      className="cursor-pointer overflow-hidden rounded-xl bg-gray-600 shadow-md text-white font-[400] leading-3 hover:bg-white hover:text-blue-800" 
      onClick={handleOnClick}
    >
      <div className="px-4 py-5 sm:p-6 ">
        <span className="text-3xl ">New Entry</span>
      </div>
    </div>
  )
}

export default NewEntry