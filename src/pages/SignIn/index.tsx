import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import Input from '../../components/Input';
import Button from '../../components/Button';
import * as Yup from 'yup';

import logoImg from '../../assets/logo.svg';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';

import { Background, Container, Content } from './styles';
import { FormHandles } from '@unform/core';
import getValidationsErrors from '../../Utils/getValidationsErrors';

const SignIn: React.FC = () => {

    const formRef = useRef<FormHandles>(null);

    console.log(formRef);

    const handleSubmit = useCallback(async (data: object) => {
        try {
            formRef.current?.setErrors({});
            
            const schema = Yup.object().shape({
                email: Yup.string().required('E-mail é obrigatório').email('Digite um e-mail válido'),
                password: Yup.string().required('Senha é obrigatório'),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

        } catch (err) {

            const errors = getValidationsErrors(err);

            formRef.current?.setErrors(errors);
        }
    }, []);

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="GoBarber" />

                <Form ref={formRef} onSubmit={handleSubmit}>
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