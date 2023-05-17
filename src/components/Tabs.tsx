'use client'

import { House, PlusCircle, User } from '@phosphor-icons/react'
import Link from 'next/link';

import colors from 'tailwindcss/colors';




export function Tabs() {
  return (
    <div className="fixed bottom-0 left-0  bg-white border w-full  flex h-[60px]">

      <Link href='./' className='hover:bg-slate-100 flex-1 flex justify-center items-center'>
        <House size={24} />
      </Link>

      <Link href='./newexpense' className='b-5 hover:bg-slate-100 flex-1 flex justify-center items-center relative'>
        <PlusCircle size={48} weight="fill" color={colors.slate[800]} />
      </Link>

      <Link href='./profile' className='hover:bg-slate-100 flex-1 flex justify-center items-center'>
        <User size={24} />
      </Link>

    </div>
  )
}