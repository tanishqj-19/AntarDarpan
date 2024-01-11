'use client'
import { Sidebar } from 'flowbite-react';
import type { CustomFlowbiteTheme } from 'flowbite-react';
import {HiChartPie, HiInbox, HiViewBoards } from 'react-icons/hi';

const customTheme: CustomFlowbiteTheme['sidebar'] = {
    root: {
      inner: 'bg-gray-300',
    },
};
const Bar = () => {
  return (
    <Sidebar theme={customTheme}>
      <Sidebar.Logo href="/" img="/favicon.ico" imgAlt="MindGauge logo">
        MindGauge
      </Sidebar.Logo>
      <Sidebar.Items className='py-5'>
        <Sidebar.ItemGroup className='py-5'>
          <Sidebar.Item href="/" icon={HiChartPie}>
            Home
          </Sidebar.Item>
          <Sidebar.Item href="/journal" icon={HiViewBoards}>
            Journal
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox}>
            History
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>

  )
}

export default Bar