import { ChangeEvent,  useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import { atualizar, buscar } from '../../../services/service';
import { toastAlerta } from '../../../utils/toastAlerta';

function FormularioCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();




  async function buscarPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria, 
 );
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    })

    console.log(JSON.stringify(categoria))
  }

  async function gerarNovoCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria, 
)

        toastAlerta('categoria atualizado com sucesso', 'sucesso')
        retornar()

    } catch (error: any) {
        if (error.toString().includes('403')) {
          alert('Não foi possivel cadastrar a categoria')
          handleLogout()
        } else {
          alert('Erro ao atualizar a categoria')
        }

      }

    } 
    if (id !== undefined) {
        try {
          await atualizar(`/categorias`, categoria, setCategoria,) {
            
          }
  
          toastAlerta('Categoria cadastrada com sucesso', 'Sucesso')
          retornar()
       } catch (error: any) {
        if (error.toString().includes('403')) {
          alert('Não foi possível cadastrar a categoria')
          handleLogout()
        } else {
          toastAlerta('Erro ao cadastrar a categoria', 'erro')
        }
      }
    }

    retornar()

  function retornar() {
    navigate("/categorias")
  }



  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
    <h1 className="text-4xl text-center my-8">
      {id === undefined ? 'Cadastre uma novo categoria' : 'Editar categoria'}
    </h1>

    <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoCategoria}>
      <div className="flex flex-col gap-2">
        <label htmlFor="descricao">Tipo de categoria</label>
        <input
          type="text"
          placeholder="tipo"
          name='tipo'
          className="border-2 border-slate-700 rounded p-2"
          value={categoria.tipo}
          onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
        />
      </div>
      <button
        className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block"
        type="submit"
      >
        {id === undefined ? 'Cadastrar' : 'Editar'}
      </button>
    </form>
  </div>
  );




function handleLogout() {
    throw new Error('Function not implemented.');
}
     }
         }
         export default FormularioCategoria;