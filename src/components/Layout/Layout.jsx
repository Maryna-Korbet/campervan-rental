import * as React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppHeader } from '../AppHeader/AppHeader';


export const Layout = () => {
    return (
        <React.Fragment>
            <AppHeader />

            <Suspense fallback={null}>
            <Outlet />
            </Suspense>

        </React.Fragment>
    );
};


