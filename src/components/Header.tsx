import { MonthsNavigation } from "@/components/MonthsNavigation";
import Image from "next/image";

import logo from '@/assets/logo.png'

export function Header() {
  return (
    <div className=" fixed top-0 left-1/2 -translate-x-1/2 max-w-2xl mx-auto w-full bg-slate-800">


      <div className="flex flex-row  px-5 h-20 items-center justify-between ">


        <Image src={logo} alt="Logo My Wallet" className="h-16 w-[7rem] " />



        <div className="flex flex-col text-zinc-400 ">
          <span>Receber: R$ 13.823,12</span>
          <span>Recebido: </span>
        </div>
      </div>
      <MonthsNavigation />
    </div>
  )
}