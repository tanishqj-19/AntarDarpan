'use client'

import { createNewEntry } from "@/utils/api"
import { useRouter } from "next/navigation"


const NewEntryCard = () => {
  const router = useRouter()
  const handleOnClick = async () => {
    const data = await createNewEntry()

    router.push(`/journal/${data.id}`)

  }
  return (
    <div
        className="flex justify-center max-w-72 items-center cursor-pointer overflow-hidden rounded-full bg-black text-white shadow shadow-gray "
    >
        <div className="px-4 py-5 sm:p-4  text-center" onClick={handleOnClick}>
            <span className="text-xl text-center ">New Entry</span>
        </div>
    </div>
  )
}

export default NewEntryCard