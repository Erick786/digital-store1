import React from 'react'
import { Link } from 'react-router-dom'

const HeaderAdmin = () => {
  return (
     <header className='w-2 h-screen bg-bluegray-700 p-3 block'>
        <h1 className='py-4'>LOGO</h1>
        <nav>
            <ul className='flex flex-column '>
                <li>
                    <Link className='text-white'  to={"/dashboard"}>Dashboard</Link>
                </li>
                <li>
                    <Link className='text-white' to={"/dashboard/produtos"}>Produtos</Link>
                </li>
                <li>
                    <Link className='text-white' to={"/dashboard/marcas"}>Marcas</Link>
                </li>
                <li>
                    <Link className='text-white' to={"/dashboard/categorias"}>Categorias</Link>
                </li>
                <li>
                    <Link className='text-white' to={"/dashboard/tipo-de-produto"}>Tipo de produto</Link>
                </li>
            </ul>
        </nav>
     </header>
  )
}

export default HeaderAdmin;