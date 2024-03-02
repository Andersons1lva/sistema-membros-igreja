import styled from "styled-components";
import backgroundImage from "../../imagens/background3.png"

export const Container = styled.div`
    display:flex;
    justify-content: left;
    align-items: left;
    height: 100vh;
    min-width: 100vw; 

`
export const ImageSection = styled.div`    
    position:relative;
    flex: 1; /* Ocupa 50% da largura da tela */
    background-image: url(${backgroundImage});
    background-size: contain; /* Cobrir todo o elemento */
    background-position: right; /* Centralizar a imagem */
    background-repeat: no-repeat; /* Evita repetir a imagem */  

    h1 {
        color: #636e72;
        font-size: 5rem;
        margin-left: 20px;
        font-weight: normal;
        font-family:Trattatello, fantasy;
        position:absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);        
    }
`

export const Form = styled.form`
    display: flex;
    padding: 3rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #FFF;
    border-radius: 10px;
    width: 100%;
    max-width: 600px;
    gap: 30px 0px;

    h1 {
        color: white;
        font-size: 20px;
        font-weight: light;
    }

    p {
        color: white;
        font-size: 16px;
        font-weight: bold;
    }

    a {
        color: white;
        font-size: 14px;
    }

`

export const SubContainerSing = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0px 20px;
    align-items: center;
`