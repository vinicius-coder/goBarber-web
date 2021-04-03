import React from 'react';

import logoImg from '../../assets/logo.svg';
import { FiArrowLeft, FiLock, FiLogIn, FiMail, FiUser } from 'react-icons/fi';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Background, Container, Content } from './styles';

const SignUp: React.FC = () => {
    return (
        <Container>
            <Background />
            <Content>
                <img src={logoImg} alt="GoBarber" />

                <form>
                    <h1>Faça seu cadastro</h1>
                    <Input
                        name="Nome"
                        icon={FiUser}
                        placeholder="Nome"
                    />
                    <Input
                        name="email"
                        icon={FiMail}
                        placeholder="E-mail"
                    />
                    <Input
                        name="password"
                        icon={FiLock}
                        type="password"
                        placeholder="Senha"
                    />

                    <Button type="submit">Cadastrar</Button>

                </form>

                <a href="">
                    <FiArrowLeft />
                    Voltar para página de login
                </a>

            </Content>

            
        </Container>
    );
}

export default SignUp;