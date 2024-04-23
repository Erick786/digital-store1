import { useEffect, useState } from "react";
import styled from "styled-components";
import Produto from "../../components/Produto";

const ProdutosContainer = styled.section`
   padding: 40px 100px 0 100px;
   background-color: #f9f8fe;
   display: flex;
   flex-wrap: wrap;
   gap: 28px;
   & .selected{
     width: 345px;
     height: 60px;
     border: 1px solid #ccc;
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding: 0 20px;
     margin-left: 1008px;
     color: #ccc;
      & label{
        width: 251px;
        height: 28px;
        top: 248px;
        left: 1023px;
        gap: 0px;
        opacity: 0px;
        font-family: Inter;
        font-size: 16px;
       font-weight: 700;
       line-height: 28px;
       letter-spacing: 0.75px;
       text-align: left;
       color: #474747;
       }
   }
   & select{
        font-family: Inter;
       font-size: 16px;
       font-weight: 700;
       line-height: 28px;
      letter-spacing: 0.75px;
      text-align: left;
      color: #474747;
      cursor: pointer;
      
       }
   & .ordenacao{
      width: 100%;
   }
   & .filtros{
    width: 300px;
    background-color: #fff;
    border-radius: 4px;
    padding: 30px;
    & h6{
      color: #474747;
      font-size: 14px;
      line-height: 22px;
      &:first-of-type{
        font-size: 16px;
        line-height: 24px;
      }
    }
    & hr{
      background-color: #ccc;
      height: 1px;
      margin: 20px 0;
    }
    & ul{
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 10px ;
      & li label{
       display: flex;
       align-items: center;
       gap: 10px;
       font-size: 14px;
       color: #474747;
       line-height: 22px;
       cursor: pointer;
       & input{
        width: 22px;
        height: 22px;
        accent-color: #c92071;
        cursor: pointer;
       }
    }
   }
  }
   & .produtos{
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    & > div{
      width: calc(33.333% - 10px);
    }
   }

   //& :where(.ordenacao, .filtros, .produtos){
    //background-color: blue ;
  // }
`;
const Produtos = () => {
  
  const[marcas, setMarcas] = useState([]);
  const[tiposDeProdutos, setTiposDeProdutos] = useState([]);
  const[categorias, setCategorias] = useState([]);
  const[generos, setGeneros] = useState([]);
  const[produtos, setProdutos] = useState([]);
  const[ordenacao, setOrdenacao] = useState('');
  const[filtros, setFiltros] = useState([]);
  const[produtosFiltrados, setProdutosFiltrados] = useState([]);
  const [mostrarMensagem, setMostrarMensagem] = useState(false);

  const sortedProducts = produtosFiltrados.slice().sort((a, b)=>{
    if (ordenacao === "relevancia"){
      
    }else if (ordenacao === "populares"){

    }else if (ordenacao === "vendidos"){

    }else if (ordenacao === "lancamentos"){
      
    }else if (ordenacao === "ofertas"){
      
    }else if (ordenacao === "avaliados"){
      
    }else if (ordenacao === "precoAlto"){
      
    }else if (ordenacao === "precoBaixo"){
      
    }
  });

  {sortedProducts.map((produto)=>(
    <Produto key={produto.id} nome={produto.nome} categoria={produto.categoria.nome} imagem={produto.imagem} preco={produto.preco} desconto={produto.desconto}/>
  ))}
 
 

  function selecionarFiltro(value){
    if(filtros.includes(value)){
      setFiltros([...filtros.filter(valor=> valor != value)]);
      return;
    }
     setFiltros([...filtros, value.toLowerCase()]);
  }
  console.log(filtros)
 
  async function buscarMarcas(){
   const request = await fetch('http://localhost:3000/marcas');
   const response = await request.json();
   setMarcas(response);
  }
  async function buscarTiposDeProdutos(){
    const request = await fetch('http://localhost:3000/tipoDeProduto');
    const response = await request.json();
    setTiposDeProdutos(response);
   }

  async function buscarCategorias(){
    const request = await fetch('http://localhost:3000/categorias');
    const response = await request.json();
    setCategorias(response);
   }
 
   async function buscarGeneros(){
    const request = await fetch('http://localhost:3000/generos');
    const response = await request.json();
    setGeneros(response);
   }

   async function buscarProdutos(){
    const request = await fetch('http://localhost:3000/produtos');
    const response = await request.json();
    setProdutos(response);
   }
 
  

  

  useEffect(() =>{
    buscarMarcas();
    buscarTiposDeProdutos();
    buscarCategorias();
    buscarGeneros();
    buscarProdutos();
   
  }, []);

  useEffect(()=>{
     if(filtros.length > 0){
      setProdutosFiltrados(produtos.filter(p=> filtros.includes(p.marca.nome.toLowerCase()) || filtros.includes(p.tipoDeProduto.nome.toLowerCase()) || filtros.includes(p.categoria.nome.toLowerCase()) || filtros.includes(p.genero.toLowerCase())  || filtros.includes(p.estado.toLowerCase())));
      setMostrarMensagem(true);
      return;
     }
     setProdutosFiltrados(produtos);
     setMostrarMensagem(false)

    

  }, [filtros, produtos, ordenacao]);


  return (
      <ProdutosContainer>
         <div className="selected">
         <label htmlFor="drip-select">Ordenar por:</label>
         
         <select name="drip-store" id="dripSelect" value={ordenacao} onChange={(e) => setOrdenacao(e.target.value)}>
          <option value="relevancia">Mais relevante</option>
          <option value="populares">Mais populares</option>
          <option value="vendidos">Mais vendidos</option>
          <option value="lancamentos">Lançamentos</option>
          <option value="ofertas">Ofertas</option>
          <option value="avaliados">Melhores avaliados</option>
          <option value="precoAlto">Maior Preço</option>
          <option value="precoBaixo">Menor Preço</option>
         </select>
         </div>
         {
  filtros.length > 0 && (
    <div>Resultados dos produtos: </div>
  )
}
        
        
      
      <div className="ordenacao"></div>
       <div className="filtros">
         <h6>Filtrar por</h6>
          <hr />
          <h6>Marka</h6>
          <ul>
             {
             marcas && marcas.map(marca =>(
                <li key={`m${marca.id}`}>
              <label htmlFor={`m${marca.id}`}>
                <input type="checkbox" id={`m${marca.id}`} onClick={()=> selecionarFiltro(marca.nome)} />
                {marca.nome}
              </label>
            </li>
              
              ))
            }
            
          </ul>
          <h6>Tipos de Produtos</h6>
          <ul>
             {
             tiposDeProdutos && tiposDeProdutos.map(tipoDeProduto=>(
                <li key={`t${tipoDeProduto.id}`}>
              <label htmlFor={`t${tipoDeProduto.id}`}>
                <input type="checkbox" id={`t${tipoDeProduto.id}`} onClick={()=> selecionarFiltro(tipoDeProduto.nome)} />
                {tipoDeProduto.nome}
              </label>
            </li>
              
              ))
            }
            
          </ul>
          
          <h6>Categorias</h6>
          <ul>
             {
             categorias && categorias.map(categoria=>(
                <li key={`c${categoria.id}`}>
              <label htmlFor={`c${categoria.id}`}>
                <input type="checkbox" id={`c${categoria.id}`} onClick={()=> selecionarFiltro(categoria.nome)} />
                {categoria.nome}
              </label>
            </li>
              
              ))
            }
            
          </ul>
          <h6>Gêneros</h6>
          <ul>
             {
             generos && generos.map(genero =>(
                <li key={`g${genero.id}`}>
              <label htmlFor={`g${genero.id}`}>
                <input type="checkbox" id={`g${genero.id}`} onClick={()=> selecionarFiltro(genero.nome)}/>
                {genero.nome}
              </label>
            </li>
              
              ))
            }
            
          </ul>
          <h6>Estado</h6>
          <ul>
            <li>
              <label htmlFor="eNovo">
                <input id="eUsado" type="checkbox" name="estado" onClick={()=> selecionarFiltro("novo")} />Novo</label>
            </li>
            <li>
              <label htmlFor="eUsado"><input type="checkbox" name="estado" onClick={()=> selecionarFiltro("usado")} />Usado</label>
            </li>
          </ul>
       </div>
       <div className="produtos">
         {
           produtosFiltrados && produtosFiltrados.map(produto => (
            <Produto 
            key={`p${produto.id}`}
            nome={produto.nome}
            categoria={produto.categoria.nome}
            imagem={produto.imagem}
            preco={produto.preco}
            desconto={produto.desconto}

            />
           ))
         }
        
       </div>

      </ProdutosContainer>
  );
}

export default Produtos;