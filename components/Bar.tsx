'use client'
import { Sidebar } from 'flowbite-react';
import type { CustomFlowbiteTheme } from 'flowbite-react';
import {HiChartPie, HiInbox, HiViewBoards } from 'react-icons/hi';

const customTheme: CustomFlowbiteTheme['sidebar'] = {
    root: {
      inner: 'bg-white rounded',
      
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