import { UserButton } from "@clerk/nextjs";


const DashboardLayout = ({ children }) =>{
    return (
        <div className=" h-screen w-screen relative ">
            <aside className="bg-[#EDECE9] absolute top-0 left-0 w-[250px] h-full border-r border-black/10">
                MoodCraft
            </aside>
            
            <div className="ml-[250px] h-full">
                <header className="h-[60px]">
                    <div className="h-full w-full px-6 flex items-center justify-end">
                        <UserButton />
                    </div>
                </header>
                <div className="h-[calc(100vh-60px)]"> {children} </div>
            </div>
            
        </div>
    )
}

export default DashboardLayout;