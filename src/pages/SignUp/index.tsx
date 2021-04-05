import React from 'react';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import logoImg from '../../assets/logo.svg';

import { Background, Container, Content } from './styles';
import { useCallback } from 'react';

const SignUp: React.FC = () => {

    const handleSubmit = useCallback(async (data: object) => {
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome é obrigatório'),
                email: Yup.string().required('E-mail é obrigatório').email('Digite um e-mail válido'),
                password: Yup.string().min(6, 'No mínimo 6 dígitos'),
            });

            await schema.validate(data, {
                abortEarly: false,
            });
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <Container>
            <Background />
            <Content>
                <img src={logoImg} alt="GoBarber" />

                <Form onSubmit={handleSubmit}>
                    <h1>Faça seu cadastro</h1>
                    <Input
                        name="name"
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

                </Form>

                <a href="">
                    <FiArrowLeft />
                    Voltar para página de login
                </a>

            </Content>


        </Container>
    );
}

export default SignUp;