import React from "react"
import { Container, Form, ImageSection, SubContainerSing } from "./styles"
import Input from "../../Components/input/index"
import Botao from "../../Components/Botao/index"
import Logo from "../../imagens/logo_igreja.png"


const Login = () => {

    const handleSubmit = async (event) => {
        event.preventDefault();
        /* try {
             setLoading(true)
             const response = await userService.login(form)
             console.log('response do Login', response)
             if (response === true) {
                 alert('usuário Logado com Sucesso')
                 navigate('/home')
             }
            // setLoading(false)
         }
         catch (err) {
             alert('Algo deu errado com o Login' + err)
         }*/
    }

    const handleChange = (event) => {
        // setFrom({ ...form, [event.target.name]: event.target.value })
    }
    const validadorInput = () => {
        // return validarEmail(form.email) && validarSenha(form.password)
    }

    return (
        <Container>
            <ImageSection>
                <h1>Sistema<br/>Gerenciamento<br /> de Membros</h1>
            </ImageSection>
            <Form>
                <img src={Logo} style={{ width: '195px', height: '250px' }} />
                <Input
                    name='email'
                    placeholder='Digite o seu e-mail'
                    onChange={handleChange}
                    type='email'
                />
                <Input
                    name='password'
                    placeholder='Digite sua senha'
                    onChange={handleChange}
                    type='password'
                />
                <Botao
                    type='submit'
                    text='Entrar'
                    onClick={handleSubmit}
                //   disabled={loading === true || !validadorInput()}
                />

            </Form>
        </Container>
    )
}

export default Login;
