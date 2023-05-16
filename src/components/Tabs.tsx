'use client'

import { House, PlusCircle, User } from '@phosphor-icons/react'

import colors from 'tailwindcss/colors';

export function Tabs() {
  return (
    <div className="fixed bottom-0 left-0  bg-white border w-full  flex h-15 ">

      <button className='hover:bg-slate-100 flex-1 flex justify-center items-center'>
        <House size={24} />
      </button>

      <button className='b-5 hover:bg-slate-100 flex-1 flex justify-center items-center relative'>
        <PlusCircle size={48} weight="fill" color={colors.green[600]} />
      </button>

      <button className='hover:bg-slate-100 flex-1 flex justify-center items-center'>
        <User size={24} />
      </button>

    </div>
  )
}