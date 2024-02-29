import { Link } from 'react-router-dom'

function Navbar() {
 
  return (
    <>
     <div className='w-full bg-green-500 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold ml-4'>DrogaGen</div>
            <div className='flex gap-4 mr-4'>

            <Link to="/" className='hover:underline'>Home</Link>
            <Link to="/sobre" className='hover:underline'>Sobre nós</Link>
            <Link to="/contato" className='hover:underline'>Contato</Link>
            <Link to="/categorias" className='hover:underline'>Categorias</Link>
            <Link to="/produto" className='hover:underline'>Produtos</Link>  
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar