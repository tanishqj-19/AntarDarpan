'use client'
import { Sidebar } from 'flowbite-react';
import type { CustomFlowbiteTheme } from 'flowbite-react';
import {HiChartPie, HiDesktopComputer, HiViewBoards, HiHome} from 'react-icons/hi';


const customTheme: CustomFlowbiteTheme['sidebar'] = {
    root: {
      inner: 'rounded h-full  w-48 overflow-y-auto overflow-x-hidden py-4  mt-none dark:bg-gray-800',
      
    },
    
    item: {
      base: "flex items-center justify-center font-sans rounded-xl p-2 text-base font-normal text-white/80 hover:text-black hover:bg-white dark:text-white dark:hover:bg-gray-700",
      active: "bg-white dark:bg-gray-700 ",
      collapsed: {
        insideCollapse: "group w-full pl-8 transition duration-75",
        noIcon: "font-bold"
      },
      icon: {
        base: "h-6 w-6 flex-shrink-0   rounded-xl transition duration-75 group-hover:text-white dark:text-gray-400 dark:group-hover:text-white",
        active: "text-gray-700 hover:text-white dark:text-gray-100"
      },
     
    },
    
    
};
const Bar = () => {
  return (
    <Sidebar theme={customTheme} className='py-5 px-2 '>
      <Sidebar.Logo href="/" img="/favicon.ico" imgAlt="AntarDarpan logo">
        <span className='text-2xl text-white font-sans'>AntarDarpan</span>
      </Sidebar.Logo>
      <Sidebar.Items className='py-5 px-2'>
        <Sidebar.ItemGroup className='py-5'>
          <Sidebar.Item href="/" icon={HiHome}>
            <span className='text-xl' >Home</span>
          </Sidebar.Item>
          <Sidebar.Item href="/journal" icon={HiViewBoards}>
            <span className=' text-xl'>Journal</span>
          </Sidebar.Item>
          <Sidebar.Item href="/history" icon={HiChartPie}>
            <span className=' text-xl'>History</span>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>

  )
}

export default Bar