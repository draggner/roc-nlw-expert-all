export function NoteCard() {
  return (
    <button className='rounded-md text-left bg-slate-800 p-5 space-y-6 overflow-hidden outline-none relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400'>
    <span className='text-sm font-medium text-slate-300'>
      há 7 dias
    </span>
    <p className='text-sm leading-6 text-slate-400'>
      Podemos utilizar o pacote chalk para exibir logs no código coloridos para dar um efeito mais legal no terminal.
      Podemos trocar tanto a cor do texto quanto a cor de fundo do texto impresso no console.
    </p>
    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0" />
  </button>
  )
}