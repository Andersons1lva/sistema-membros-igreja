import React, { useState } from "react"
import { Container, Form, ImageSection, SubContainerSign  } from "./styles"
import Input from "../../Components/input/index"
import Botao from "../../Components/Botao/index"
import { validarEmail, validarSenha } from "../../Utils/validadores"
import Logo from "../../imagens/logo_igreja.png"
import UserService from "../../Services/UserService"
import { NavLink, useNavigate } from 'react-router-dom'

const userService = new UserService()

const Login = () => {
    const [loading, setLoading] = useState()
    const [form, setFrom] = useState([])
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setLoading(true)
            const response = await userService.login(form)
            console.log('response do Login', response)
            if (response === true) {
                alert('usuário Logado com Sucesso')
                navigate('/home')
            }
            setLoading(false)
        }
        catch (err) {
            alert('Algo deu errado com o Login' + err)
        }
    }

    const handleChange = (event) => {
       setFrom({ ...form, [event.target.name]: event.target.value })
    }
    const validadorInput = () => {
        return validarEmail(form.email) && validarSenha(form.password)
    }

    return (
        <Container>
            <h1>Sistema<br />Gerenciamento<br /> de Membros</h1>
            <ImageSection/>
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
                    disabled={loading === true || !validadorInput()}
                />
                <SubContainerSign>
                    <p>Não possui conta?</p>
                    <NavLink to="cadastrar">Cadastrar</NavLink>
                </SubContainerSign>
            </Form>
        </Container>
    )
}

export default Login;
