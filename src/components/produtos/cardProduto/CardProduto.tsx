import { Link } from 'react-router-dom'


function CardProduto() {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-green-500 text-white font-bold text-2xl'>Produto</header>
      <p className='p-8 text-3xl bg-slate-200 h-full'>Preço:</p>
      <p className='p-8 text-3xl bg-slate-200 h-full'>Marca:</p>
      <div className="flex">
        <Link to='' className='w-full text-slate-100 bg-green-700 hover:bg-green-600 flex items-center justify-center py-2'>
          <button>Comprar</button>
        </Link>
        <Link to='' className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Sair</button>
        </Link>
      </div>
    </div>
  )
}

export default CardProduto