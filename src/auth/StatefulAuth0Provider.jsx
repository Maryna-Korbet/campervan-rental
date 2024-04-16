import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import configuration  from "../configuration/configuration";


const authConfig = {
    domain: configuration.auth0Domain,
    clientId: configuration.auth0ClientId,
    authorizationParams: {
        redirect_uri: configuration.auth0RedirectUri,
    }
}

export default function StatefulAuth0Provider({ children }) {
    const navigate = useNavigate();

    const onRedirectCallback = (appState) => {
        navigate(appState.returnTo || window.location.pathname);
    }
    return (
        <Auth0Provider {...authConfig} cacheLocation="localstorage" onRedirectCallback={onRedirectCallback}>
            {children}
        </Auth0Provider>
    )
}