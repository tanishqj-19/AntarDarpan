'use client'
import React from 'react'
import Link from 'next/link'
import { Button, Navbar } from 'flowbite-react';
import { UserButton, auth } from "@clerk/nextjs";

const Nav = ({link}) => {

    let name = "Sign In"
    if(link === '/new-user')
        name  = "Sign Up"
  return (
    <Navbar fluid rounded >
      <Navbar.Brand href="/">
        <img src="/favicon.ico" className="mr-3 h-10 sm:h-9" alt="Ming Gauge" />
        <span className="self-center 
        whitespace-nowrap text-2xl font-bold leading-[1.15] 
        bg-gradient-to-r from-indigo-600 to-blue-900 bg-clip-text text-transparent">AntarDarpan</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Link href={link}>
            <Button className='text-xl bg-black rounded-full px-6 shadow-2xl border border-gray-600' >{name}</Button>
        </Link>
        
      </div>

     
      <Navbar.Collapse>
        <Navbar.Link href="/"  className='text-xl font-semibold' >
          Home
        </Navbar.Link>
        <Navbar.Link href="/about" className='text-xl font-semibold' >About</Navbar.Link>
        
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Nav