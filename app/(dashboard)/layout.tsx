import { UserButton } from "@clerk/nextjs";


const DashboardLayout = ({ children }) =>{
    return (
        <div className=" h-screen w-100vh relative ">
            <aside className="bg-[#EDECE9] absolute top-0 left-0 w-[250px] h-full border-r border-black/10">
                Mind Gauge
            </aside>
            
            <div className="bg-neutral-200 ml-[250px] h-full">
                <header className="h-[60px] flex justify-between">
                    <h2 className="text-3xl px-8 font-bold leading-relaxed text-black"> Journal </h2>
                    <div className=" mt-2 mr-2">
                        <UserButton afterSignOutUrl="/" />
                    </div>
                </header>
                <div className="h-[calc(100vh-60px)]"> {children} </div>
            </div>
            
        </div>
    )
}

export default DashboardLayout;

// [calc(100vh-60px)]