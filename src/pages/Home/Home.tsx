import homeLogo from '../../assets/home.png'
import ListaProdutos from '../../components/produtos/listaProdutos/ListaProdutos';


function Home() {
    return (
        <>
        <div className="bg-green-500 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vindo!</h2>
              <p className='text-xl'>Venha comprar conosco</p>
              <div className="flex justify-around gap-4">
              <button className='rounded bg-white text-green-500 py-2 px-4'>Ver produtos</button>
            </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
        <ListaProdutos/>
      </>
    );
}

export default Home;