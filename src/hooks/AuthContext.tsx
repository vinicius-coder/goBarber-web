import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface AuthState {
    token: string;
    userDTO: object;
}

interface SignInCredentials {
    email: string;
    password: string;
}

interface AuthContextData {
    userDTO: object;
    signIn: (credentials: SignInCredentials) => void;
    signOut: () => void;
}

const AuthContext = createContext<AuthContextData>({
    userDTO: {},
    signIn: () => 0,
    signOut: () => 0,
});


const AuthProvider: React.FC = ({ children }) => {

    const [data, setData] = useState<AuthState>(() => {
        const token = localStorage.getItem('@GoBarber:token');
        const userDTO = localStorage.getItem('@GoBarber:user');

        if (token && userDTO) {
            return { token, userDTO: JSON.parse(userDTO) };
        }

        return {token: '', userDTO: {}};
    });

    const signIn = useCallback(async ({ email, password }) => {
        const response = await api.post('sessions', {
            email,
            password,
        });

        console.log(response.data)

        const { token, userDTO } = response.data;

        localStorage.setItem('@GoBarber:token', token);
        localStorage.setItem('@GoBarber:user', JSON.stringify(userDTO));

        setData({token: '', userDTO: new Object});
    }, []);

    const signOut = useCallback(() => {
        localStorage.removeItem('@GoBarber:token');
        localStorage.removeItem('@GoBarber:user');

        setData({token: '', userDTO: new Object});
    }, []);

    return (
        <AuthContext.Provider value={{ userDTO: data.userDTO, signIn, signOut }} >
            {children}
        </AuthContext.Provider>
    );
};

function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }

    return context;
}

export { AuthProvider, useAuth };