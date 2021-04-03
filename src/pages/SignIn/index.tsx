import React from 'react';
import { Form } from '@unform/web';
import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';

import { Background, Container, Content } from './styles';

const SignIn: React.FC = () => {

    function handleSubmit(data: object) {
        console.log(data);
    }

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="GoBarber" />

                <Form onSubmit={handleSubmit}>
                    <h1>Faça seu logon</h1>
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

                    <Button type="submit">Entrar</Button>

                    <a href="#">
                        Esqueci minha senha
                    </a>

                </Form>

                <a href="">
                    <FiLogIn />
                    Criar conta
                </a>

            </Content>

            <Background />
        </Container>
    );
}

export default SignIn;