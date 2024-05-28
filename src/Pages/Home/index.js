// Home/index.js

import React from 'react';
import { Navigate } from 'react-router-dom';
import UserManagement from '../../Components/UserManagement'; // Importe o componente UserManagement
import UserServices from '../../Services/UserService'; // Importe seu hook de autenticação, substitua pelo nome correto se for diferente

const Home = () => {
    const userService = new UserServices;

    // Verifica a autenticação usando o serviço de usuário
    const isAuthenticated = userService.usuarioAutenticado();

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <h1>Bem-vindo à página inicial</h1>
            
        </div>
    );
}

export default Home;
