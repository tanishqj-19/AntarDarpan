import { UserButton } from "@clerk/nextjs";


const DashboardLayout = ({ children }) =>{
    return (
        <div className=" h-screen w-screen relative ">
            <aside className="bg-[#EDECE9] absolute  top-0 left-0 w-[200px] h-full border-r border-black/10">
                Mood
            </aside>
            
            <div className="ml-[200px]">
                <header className="h-[60px] border-b border-black/10">
                    <div className="h-full w-full px-6 flex items-center justify-end">
                        <UserButton />
                    </div>
                </header>
                <div> {children} </div>
            </div>
            
        </div>
    )
}

export default DashboardLayout;