import React from 'react'
import gmail from "./assets/gmail.png"
import meta from "./assets/meta.png"
import tenis1 from "./assets/tenis1.png"
import tenis2 from "./assets/tenis2.png"
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const ContaContainer = styled.section`
    background-image: linear-gradient(#B5B6F2, #EFEFFF);
    padding: 120px 100px 160px 100px;
    & form{
        float:left ;
        width: 580px;
        background-color: #fff;
        border-radius: 5px;
        padding: 30px;
        & h3{
            font-size: 32px;
            line-height: 36px;
            letter-spacing: 1px;
            margin-bottom: 20px;
            }
        & p{
            font-size: 16px;
            line-height: 28px;
            letter-spacing: .75px;
            margin-bottom: 20px;
            color: #474747;
            & a{
                text-decoration: underline;
                color: #474747;
                &:hover{
                    color: #c92071;
                }
            }
        }
        & label{
            font-size: 12px;
            font-weight: bold;
            line-height: 24px;
            letter-spacing: .75px;
            color: #474747;
            display: block;
            margin-bottom: 5px;
        }
        & input{
            width: 100%;
            height: 60px;
            padding-left: 24px;
            border-radius: 8px;
            background-color: #47474710;
            margin-bottom: 20px;
        }
        & > a{
            display: block;
            text-decoration: underline;
            color: #474747;
            &:hover{
                color: #c92071;
            }
        }
        & button{
            background-color: #c92071;
            width: 100%;
            height: 48px;
            color: #fff;
            font-size: 16px;
            font-weight: bold;
            border-radius: 8px;
            margin-top: 30px;
            margin-bottom: 30px;
            cursor: pointer;
        }
        & .loginSocial{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            color: #474747;
        }
       }
       & .tenis{
        margin-top: 10px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        padding: 20px;
        margin-left: 30px;
        & .tenis img{
            width: 200px;
            margin-bottom: 20px;
            margin-top: 20px;
        }
        & .tenisEsquerdo{
        margin: 50px;
         margin-top: -50px;
         width: 256px;
         height: 483px;
         top: 156px;
         left: 974.61px;
         gap: 0px;
         opacity: 0px;
         rotate: -165.29 deg;
        }
        & .tenisDireito{
         width: 252px;
         height: 515px;
         top: 417.1px;
         left: 1409.15px;
         gap: 0px;
         opacity: 0px;
         rotate: 159.54 deg; 
        }
       }
`;

const CriarConta = () => {

  return (

    <ContaContainer>
    <form>
         <h3>Crie sua conta</h3>
        <p>Já possui uma conta? Entre <Link to={"/cadastro"}>aqui</Link></p>
        <label htmlFor="email">Email*</label>
        <input 
          id={"email"} 
          type={"email"}
           placeholder={"Insira o seu email"}
        />
           <button>Criar Conta</button>
           
           <div className="loginSocial">
            Ou faça login com 
            <img src={gmail} alt="gmail logo" />
            <img src={meta} alt="meta icone" />
           </div>
           
    </form>
          <  div className='tenis'>
            <img className='tenisEsquerdo' src={tenis1} alt="tenis 1" />
            <img className='tenisDireito' src={tenis2} alt="tenis 2" />
           </div>
    </ContaContainer>
  )
}

export default CriarConta;