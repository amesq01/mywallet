

export function Header() {
  return (
    <div className="flex flex-row bg-slate-800 px-5 h-20 items-center justify-between fixed top-0 left-0 w-full ">
      <div>

        <h1 className="text-xl font-bold text-white">
          Minhas
        </h1>
        <strong className="text-xl font-bold text-white"> Despesas</strong>
      </div>

      <div className="flex flex-col text-zinc-400 ">
        <span>Receber: R$ 13.823,12</span>
        <span>Recebido: </span>
      </div>

    </div>
  )
}