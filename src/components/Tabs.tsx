'use client'

import { MagnifyingGlass, House, PlusCircle, User, XCircle, ChartLine } from '@phosphor-icons/react'
import Link from 'next/link';
import { useState } from 'react';

import colors from 'tailwindcss/colors';



export function Tabs() {

  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="fixed bottom-0  border w-full flex-col flex bg-slate-800 py-1 left-1/2 -translate-x-1/2 max-w-2xl mx-auto w-ful ">


      {
        showSearch &&

        <div className='w-full bg-gray-800 p-1 flex flex-row items-center transition-opacity gap-2 text-slate-200  ' >
          <input type="text" placeholder='Digite para pesquisar' className='flex-1 text-sm px-2 py-1 outline-0 text-slate-800 font-medium' />
          <MagnifyingGlass size={20} className='hover:text-slate-50 cursor-pointer' onClick={() => alert('clicou')} />
          <XCircle size={20} className='mx-3 hover:text-slate-50 cursor-pointer' onClick={() => setShowSearch(!showSearch)} />
        </div>

      }



      <div className='flex flex-row items-center justify-between flex-1 h-full relative' >

        <Link href='./newexpense' className=' absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-55%] h-full  px-3 flex justify-center items-center'>
          <PlusCircle size={48} weight="fill" color={colors.slate[200]} />
        </Link>


        <div className='flex flex-row flex-1 items-center justify-around text-slate-200 '>

          <Link href='./' className='  h-full flex justify-center p-3 items-center'>
            <House size={24} />
          </Link>

          <Link href='./' className='   h-full flex justify-center p-3 items-center'>
            <ChartLine size={24} />
          </Link>

        </div>

        <div className='flex w-[25%]' />

        <div className='flex flex-row flex-1 items-center justify-around text-slate-200'>

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