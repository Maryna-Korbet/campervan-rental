import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LogButton } from './AuthSection.styled.js';
import { Button } from '../GlobalStyles';
import configuration from 'configuration/configuration.js';

export function AuthSection() {
    const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

    const onLogin = async() => {
    await loginWithRedirect({
        appState: {
            returnTo: "/"
        }
        })
    }

    const onLogOut = () => {
        logout({
        logoutParams: {
            returnTo: configuration.apiBaseUrl,
        }
        })  
    }

    if (isAuthenticated) {
        return (
            <LogButton>
                <p>{user?.name}</p>
                <Button onClick={onLogOut}>Log Out</Button>
            </LogButton>
        )
    }
    return (
        <LogButton>
            <Button onClick={onLogin}>Log In</Button>
        </LogButton>
        )
} 

