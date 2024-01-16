import { UserButton } from "@clerk/nextjs";
import Bar from "@/components/Bar";

// [#E0E0E0]
const DashboardLayout = ({ children }) => {
    return (
        <div className="h-screen relative flex bg-black">
            <aside className=" rounded-tr-lg rounded-br-lg w-56">
                <Bar />
            </aside>

            <div className="flex flex-col flex-1 bg-white  shadow-xl rounded-3xl border-t-[12px] border-b-[12px] border-r-8 border-black ">
                <header className="h-16 shadow-md">
                    <div className="flex items-center justify-end h-full mr-2">
                        <UserButton afterSignOutUrl="/" />
                    </div>
                </header>
                <div className="flex-1 overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};


export default DashboardLayout;

// [calc(100vh-60px)]