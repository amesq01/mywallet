'use client'

import { House, PlusCircle, User } from '@phosphor-icons/react'

import colors from 'tailwindcss/colors';

type testeProps = {
  setChangeComponent: (e: string) => void
}


export function Tabs({ setChangeComponent }: testeProps) {
  return (
    <div className="fixed bottom-0 left-0  bg-white border w-full  flex h-15">

      <button onClick={() => setChangeComponent('home')} className='hover:bg-slate-100 flex-1 flex justify-center items-center'>
        <House size={24} />
      </button>

      <button onClick={() => setChangeComponent('newExpense')} className='b-5 hover:bg-slate-100 flex-1 flex justify-center items-center relative'>
        <PlusCircle size={48} weight="fill" color={colors.green[600]} />
      </button>

      <button onClick={() => setChangeComponent('profile')} className='hover:bg-slate-100 flex-1 flex justify-center items-center'>
        <User size={24} />
      </button>

    </div>
  )
}