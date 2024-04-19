import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-width: 100vw;
  background-color: #FFF

`

export const Form = styled.form`
  display: flex;
  padding: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffecb3;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.10);
  border-radius: 5px;
  width: 100%;
  max-width: 500px;
  gap: 30px 0px;

  h1 {
    color: #808080;
    font-size: 20px;
    font-weight: light;
  }

  p {
    color: #808080;
    font-size: 16px;
    font-weight: bold; 
  }

  a {
    color: #808080;
    font-size: 14px;
  }
`

export const SubContainerSign = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0px 20px;
  align-items: center;

  p {
    color: #808080;
    font-size: 16px;
    font-weight: bold;
  }

  a {
    color: #808080;
    font-size: 16px;
    font-weight: bold;
    text-decoration:none;
  }
`