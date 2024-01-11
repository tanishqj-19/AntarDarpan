import { UserButton } from "@clerk/nextjs";
import Bar from "@/components/Bar";

// [#E0E0E0]
const DashboardLayout = ({ children }) =>{
    return (
        <div className=" h-dvh w-100vh relative ">
            <aside className="bg-gray-300 absolute top-0 left-0 w-64 h-full border-r border-black/10">
                <Bar />
            </aside>
            
            <div className="bg-gray-200 ml-[250px] h-full overflow-y-auto">
                <header className="h-[60px] border-b border-black/10">
                    <div className="flex items-center justify-end h-full mr-2">
                        <UserButton afterSignOutUrl="/" />
                    </div>
                </header>
                <div className="h-[calc(100vh-60px)] "> 
                    {children} 
                </div>
            </div>
            
        </div>
    )
}

export default DashboardLayout;

// [calc(100vh-60px)]