'use client'

import { MagnifyingGlass, House, PlusCircle, User, XCircle, ChartLine } from '@phosphor-icons/react'
import Link from 'next/link';
import { useState } from 'react';

import colors from 'tailwindcss/colors';



export function Tabs() {

  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 border w-full flex-col flex bg-green-100 ">


      {
        showSearch &&

        <div className='w-full bg-green-300 p-1 flex flex-row items-center gap-2 ' >
          <input type="text" placeholder='Digite para pesquisar' className='flex-1 text-sm px-2 py-1 outline-0' />
          <MagnifyingGlass size={20} />
          <XCircle size={20} className='mx-3' />
        </div>

      }



      <div className='flex flex-row items-center justify-between flex-1 h-full relative' >

        <Link href='./newexpense' className=' absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-55%] h-full  px-3 flex justify-center items-center'>
          <PlusCircle size={48} weight="fill" color={colors.slate[800]} />
        </Link>


        <div className='flex flex-row flex-1 items-center justify-around '>

          <Link href='./' className='  h-full flex justify-center p-3 items-center'>
            <House size={24} />
          </Link>

          <Link href='./' className='   h-full flex justify-center p-3 items-center'>
            <ChartLine size={24} />
          </Link>

        </div>

        <div className='flex w-[25%]' />

        <div className='flex flex-row flex-1 items-center justify-around'>

          <div
            className='  h-full flex justify-center px- items-center cursor-pointer'
            onClick={() => setShowSearch(!showSearch)}>

            <MagnifyingGlass size={24} />

          </div>

          <Link href='./profile' className='  h-full px- flex justify-center items-center'>
            <User size={24} />
          </Link>
        </div>

      </div>
    </div>
  )
}