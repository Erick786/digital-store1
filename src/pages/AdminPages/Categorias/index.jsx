import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Sidebar } from 'primereact/sidebar';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState } from 'react';
import { useBuscarCategorias } from '../../../hooks/CategoriaHooks';
        
        
        
const Categorias = () => {
    const[visibleCreate, setVisibleCreate] = useState(false);
    const { data: categorias} = useBuscarCategorias();

    return ( 
        <>
        <h2 className='flex justify-content-between align-items-center'>
            Categorias
         <Button label='Nova categoria' icon={"pi pi-plus"} className='bg-pink-600 hover:bg-pink-800 gap-3 border-0 ' onClick={() => setVisibleCreate(true)} />
         </h2>
         <DataTable className='mt-4' value={categorias}  >
            <Column 
            field={'id'}
             header={"id"}/>
            
             
            <Column
              field={'nome'}
              header={"categoria"}
            />
         </DataTable>
         <Sidebar visible={visibleCreate} position='right' onHide={() => setVisibleCreate(false)}>
           <form>
            <h3 className='mb-4'>Criar</h3>
            <label htmlFor="categoria_nome" className='mb-2 block'>Categoria</label>
            <InputText id='categoria_nome' placeholder='Digite o nome' className='w-full mb-3'/>
            <Button type='submit' label='Criar' className='bg-pink-600 hover:bg-pink-800 w-full boder-0'/>
            </form> 
         </Sidebar>
        
        </>
    );
}
 
export default Categorias;