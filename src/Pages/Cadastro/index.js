import React, {useState} from 'react'
import { Container, Form, SubContainerSign } from './styles'
import Input from '../../Components/input/index'
import Botao from '../../Components/Botao/index'
import { validarEmail, validarSenha, validarConfirmarSenha } from '../../Utils/validadores'
import UserService from '../../Services/UserService'
import { NavLink, useNavigate } from 'react-router-dom'

const userService = new UserService()

const Cadastro = () => {
  const [loading, setLoading] = useState()
  const [form, setForm] = useState([])
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true)
      const { data } = await userService.cadastrar({
        email: form.email,
        password: form.password,
        role:"USER"
      })
      if (data) {
        try {
          // Tenta fazer o login com os dados cadastrados
          const responseLogin = await userService.login({
            email: form.email,
            password: form.password
          });
      
          // Verifica se o login foi bem-sucedido
          if (responseLogin) {
            // Se sim, exibe um alerta de sucesso
            alert('Usuário cadastrado e logado com sucesso!');
            // E navega para a página inicial
            navigate('/home');
          } else {
            // Se o login não foi bem-sucedido, exibe uma mensagem de erro
            alert('Erro ao fazer login após o cadastro');
          }
        } catch (error) {
          // Se ocorrer um erro ao fazer login, exibe uma mensagem de erro
          alert('Erro ao fazer login após o cadastro: ' + error);
        }
    }
      setLoading(false)
    }
    catch (err) {
      alert('Algo deu errado com o Cadastro' + err)
    }
  }

  const handleChange = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const validadorInput = () => {
    return validarEmail(form.email) 
    && validarSenha(form.password)
    && validarConfirmarSenha(form.password, form.confirmarPassword)
  }

  return (
    <Container>
      <Form>
        <h1>Faça o seu Cadastro</h1>        
        <Input
          name='email'
          placeholder='Digite o seu e-mail'
          onChange={handleChange}
          type='email'
        />
        <Input
          name='password'
          placeholder='Digite a sua senha'
          onChange={handleChange}
          type={form.showPassword ? 'text' : 'password'} // Usando form.showPassword para mostrar ou ocultar a senha
        />
        <Input
          name='confirmarPassword'
          placeholder='Confirme a sua senha'
          onChange={handleChange}
          type='password'
        />
        <Botao
          type='submit'
          text='Efetuar Cadastro'
          onClick={handleSubmit}
          disabled={loading === true || !validadorInput()}
        />
        <SubContainerSign>
          <p>Já possui conta?</p>
          <NavLink to="*">Login</NavLink>
        </SubContainerSign>
      </Form>
    </Container>
    
  )
}

export default Cadastro;