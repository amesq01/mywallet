'use client'

import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'

export function MonthsNavigation() {
  return (
    <div className='flex  bg-slate-600 items-center justify-around h-10'>

      <ArrowLeft size={24} color='white' onClick={() => alert('hello')} className='cursor-pointer' />

      <span className='text-zinc-300'>
        Maio/2023
      </span>

      <ArrowRight size={24} color='white' onClick={() => alert('hello')} className='cursor-pointer' />
    </div>
  )
}