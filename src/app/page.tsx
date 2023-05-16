import { Expenses } from '@/components/Expenses'
import { Header } from '@/components/Header'
import { Tabs } from '@/components/Tabs'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-full'>
      <Header />
      <Expenses />
      <Tabs />
    </div>
  )
}
