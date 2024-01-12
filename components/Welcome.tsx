'use client'

import { useUser } from "@clerk/nextjs"



const Welcome = () => {
    var curHr = new Date().getHours()
    var abbrevation = "Good Evening"
    

    if (curHr < 12) {
        abbrevation = "Good Morning"
    } else if (curHr < 18) {
        abbrevation = "Good Afternoon"
    }
    const {user} = useUser();
  return (
    <h2 className="text-4xl font-bold leading-[1.15] px-10
        bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
        {abbrevation}, {user?.firstName}
    </h2>
  )
}

export default Welcome