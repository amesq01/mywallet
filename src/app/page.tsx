'use client'

import { Expenses } from '@/components/Expenses'
import { Header } from '@/components/Header'
import { NewExpense } from '@/components/NewExpense'
import { Profile } from '@/components/Profile'
import { Tabs } from '@/components/Tabs'
import Image from 'next/image'
import { useState } from 'react'



export default function Home() {
  const [changeComponent, setChangeComponent] = useState<String>('home');


  return (
    <div className='h-full'>
      <Header />
      {changeComponent === 'home' && <Expenses />}
      {changeComponent === 'newExpense' && <NewExpense />}
      {changeComponent === 'profile' && <Profile />}

      <Tabs setChangeComponent={setChangeComponent} />
    </div>
  )
}
