import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { AvatarUser, AvatarImage, Login, AuthButton} from './AuthSection.styled.js';
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
            <Login>
                <AvatarUser>
                    <AvatarImage src={user?.picture} alt={user?.name} />
                </AvatarUser>
                <AuthButton>
                    <Button onClick={onLogOut}>Log Out</Button>
                </AuthButton>
            </Login> 
        )
    }
    return (
        <AuthButton>
            <Button onClick={onLogin}>Log In</Button>
        </AuthButton>
        )
} 

