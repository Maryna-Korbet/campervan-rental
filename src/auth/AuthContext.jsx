const { createContext } = require("react");

export const anonymousUser = { name: 'Anonymous' };

export const AuthContext = createContext({ user: anonymousUser });