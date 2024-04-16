import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { NavigationLink } from '../NavigationLink/NavigationLink';
import { AuthSection } from '../AuthSection/AuthSection';
import { AppHeaderContainer, NavigationLinkContainer, NavigationItem, AppHeaderLogo } from './AppHeader.styled';


export function AppHeader() {
    const { isAuthenticated } = useAuth0();

    return (
        <AppHeaderContainer>
            <AppHeaderLogo>
                <p>CamperVAN</p>
            </AppHeaderLogo>

            <NavigationLinkContainer>
                <NavigationItem>
                    <NavigationLink to="/">Home</NavigationLink>
                </NavigationItem>

                <NavigationItem>
                    <NavigationLink to="/catalog">Catalog</NavigationLink>
                </NavigationItem>

                {isAuthenticated && (
                    <NavigationItem>
                        <NavigationLink to="/favorites">Favorites</NavigationLink>
                    </NavigationItem>
                    )
                }
            </NavigationLinkContainer>
            <AuthSection />
        </AppHeaderContainer>
    );
}