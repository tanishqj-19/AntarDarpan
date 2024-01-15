'use client'
import { Sidebar } from 'flowbite-react';
import type { CustomFlowbiteTheme } from 'flowbite-react';
import {HiChartPie, HiInbox, HiViewBoards } from 'react-icons/hi';

const customTheme: CustomFlowbiteTheme['sidebar'] = {
    root: {
      inner: 'bg-white rounded h-full overflow-y-auto overflow-x-hidden py-4 px-3 dark:bg-gray-800',
      
    },
    
    item: {
      base: "flex items-center justify-center rounded-xl p-2 text-base font-normal text-gray-900 hover:text-white hover:bg-black dark:text-white dark:hover:bg-gray-700",
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
      <Sidebar.Logo href="/" img="/favicon.ico" imgAlt="MindGauge logo">
        <span className='text-2xl'>MindGauge</span>
      </Sidebar.Logo>
      <Sidebar.Items className='py-5 px-2'>
        <Sidebar.ItemGroup className='py-5'>
          <Sidebar.Item href="/" icon={HiChartPie}>
            <span className='font-semibold text-xl' >Home</span>
          </Sidebar.Item>
          <Sidebar.Item href="/journal" icon={HiViewBoards}>
            <span className='font-semibold text-xl'>Journal</span>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox}>
            <span className='font-semibold text-xl'>History</span>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>

  )
}

export default Bar