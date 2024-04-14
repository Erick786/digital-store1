import React from 'react'
import styled from 'styled-components';

const CriarConta = styled.section`
    background-color:  #F9F8FE;
    
    & h1{
        font-weight: 700;
        font-size: 32px;
        line-height: 36px;
        letter-spacing: 1px;

    }
    & form{
        display: flex;
        flex-direction: column;
        width: 750px;
        position: absolute;
         background-color: #fff;
        border-radius: 5px;
        padding: 30px;
        & h3{
        font-weight: 700;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: .75px;
        align-items: center;
        }


    }
    
`;

const ButtonCadastro = () => {
  return (
    <CriarConta>
    <h1>Criar Conta</h1>
    <form>
      <h3>Informações Pessoais</h3>
      <label htmlFor="text">Nome Completo*</label>
      <input type="text" placeholder='Insira seu nome' />
      <label htmlFor="number">CPF*</label>
      <input type="text" placeholder='Insira seu CPF' />
      <label htmlFor="email">E-mail*</label>
      <input type="text" placeholder='Insira seu email' />
      <label htmlFor="celular">Celular*</label>
      <input type="text" placeholder='Insira seu celular' />
   </form>
    <form>
        <h3>Informações de Entrega</h3>
        <label htmlFor="endereco">Endereço*</label>
        <input type="text" placeholder='Insira seu endereço' />
        <label htmlFor="bairro">Bairro*</label>
        <input type="text" placeholder='Insira seu bairro' />
        <label htmlFor="cidade">Cidade*</label>
        <input type="text" placeholder='Insira sua cidade' />
        <label htmlFor="cep">CEP*</label>
        <input type="text" placeholder='Insira seu CEP' />
        <label htmlFor="complemento">Complemento</label>
        <input type="text" placeholder='Insira o complemento' />
    </form>
       <div>
        <input type="checkbox"/>
        <label htmlFor="">Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.</label>
         <button>Criar Conta</button>
       </div>
    </CriarConta>
  )
}

export default ButtonCadastro;