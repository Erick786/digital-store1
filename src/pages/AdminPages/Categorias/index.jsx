import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Sidebar } from 'primereact/sidebar';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { useRef, useState } from 'react';
import { useBuscarCategorias, useCriarCategoria, useDeletarCategoria, useEditarCategoria } from '../../../hooks/CategoriaHooks';
import { useForm } from 'react-hook-form';
        
        
        
const Categorias = () => {

    const alerta = useRef();
    const[visibleCreate, setVisibleCreate] = useState(false);
    const[visibleEdit, setVisibleEdit] = useState(false);
    const[visibleDeletar, setVisibleDeletar] = useState(false);
    const { data: categorias} = useBuscarCategorias();
    const { mutateAsync: criarCategoria} = useCriarCategoria();
    const { mutateAsync: editarCategoria} = useEditarCategoria();
    const { mutateAsync: deletarCategoria} = useDeletarCategoria();

    const { register, handleSubmit, reset } = useForm();
 
    const { register: registerEdit,
            handleSubmit: handleSubmitEdit, 
             reset: resetEdit,
            setValue: setValueEdit
      } = useForm();
     
      const{ register: registerDeletar,
             handleSubmit: handleSubmitDeletar,
             reset: resetDeletar,
             setValue: setValueDeletar
            } = useForm();
   
     function criar(dados){
      criarCategoria(dados, {
        onSuccess: () =>{
          setVisibleCreate(false)
          reset();
          alerta.current.show({
            severity: "success",
            summary: "Aviso :",
            detail: "Categoria criada com sucesso"
          });
        },
        onError: (error) => {
          alerta.current.show({
            severity: "error",
            summary: "Aviso",
            detail:error.message
          })
        }
      });
    }
    function editar(dados){
      editarCategoria(dados, {
        onSuccess: () =>{
          setVisibleEdit(false);
          resetEdit();
          alerta.current.show({
            severity: "success",
            summary: "Aviso:",
            detail: "Categoria atualizada com sucesso"
          })
         },
         onError: (error) => {
          alerta.current.show({
            severity: "error",
            summary: "Aviso",
            detail:error.message
          })
        }
      });
    }

    function deletar(id){
      confirmDialog({
         header: "Aviso:",
         message: "Deseja realmente apagaer esse item?",
         acceptLabel: "Sim",
         rejectLabel: "Não",
         accept: () =>{
           deletarCategoria(id, {
            onSuccess: () => {
              alerta.current.show({
                severity: "success",
                summary: "Aviso :",
                detail: "Categoria deletada com sucesso"
              })
            },
            onError: (error) => {
              alerta.current.show({
                severity: "error",
                summary: "Aviso",
                detail:error.message
              })
            }
           }) 
            
           
         },
        
      });
      
    }

    return ( 
        <>
        <h2 className='flex justify-content-between align-items-center'>
            Categorias
         <Button 
         label='Nova categoria' 
         icon={"pi pi-plus"} 
         className='bg-pink-600 hover:bg-pink-800 gap-3 border-0 ' 
         onClick={() => setVisibleCreate(true)} />
         </h2>
         <DataTable className='mt-4'
                    value={categorias}
                    paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50]}
                    >
            <Column 
            field={'id'}
             header={"id"}/>
            
             
            <Column
              field={'nome'}
              header={"categoria"}
            />
            <Column 
            header={"Ações"}
            bodyClassName={"w-2"}
            body={(rowData)=>(
              <div className='flex gap-2'>
              <Button
              rounded
              icon={"pi pi-pencil"}
              className='bg-bluegray-700 hover:bg-pink-800 border-0'
              onClick={()=> {
                setValueEdit("id", rowData.id)
                setValueEdit("nome", rowData.nome)
                setVisibleEdit(true);
              }}
              />
              <Button
              rounded
              severity="danger" 
              icon={"pi pi-trash "}
              className='bg-bluegray-700 hover:bg-pink-800 border-0'
              onClick={() => deletar(rowData.id)}
              />
              </div>
            )}
            />
            
         </DataTable>
         <Sidebar 
         visible={visibleCreate}
          position='right' 
          onHide={() => setVisibleCreate(false)}>
           
           <form onSubmit={handleSubmit(criar)}>
            <h3 className='mb-4'>Criar</h3>
            <label htmlFor="categoria_nome" className='mb-2 block'>Categoria</label>
            <InputText
             id='categoria_nome' 
             placeholder='Digite o nome'
              className='w-full mb-3'
              {...register("nome")}
              />
             
           
            <Button type='submit'
             label='Criar' 
             className='bg-pink-600 hover:bg-pink-800 w-full boder-0'/>
            </form> 
         </Sidebar>
         <Sidebar 
         visible={visibleEdit}
          position='right' 
          onHide={() => setVisibleEdit(false)}>
           
           <form onSubmit={handleSubmitEdit(editar)}>
            <h3 className='mb-4'>Editar</h3>
            <input type="hidden"
            {...registerEdit("id")}
            />
            <label htmlFor="categoria_nome" className='mb-2 block'>Categoria</label>
            <InputText
             id='categoria_nome' 
             placeholder='Digite o nome'
              className='w-full mb-3'
              {...registerEdit("nome")}
              />
             
           
            <Button type='submit'
             label='Editar' 
             className='bg-pink-600 hover:bg-pink-800 w-full boder-0'/>
            </form> 
         </Sidebar>
         <ConfirmDialog/>
         <Toast ref={alerta} position="bottom-right"/>
        
        </>
    );
}
 
export default Categorias;