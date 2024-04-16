import { NavLink } from 'react-router-dom';


export function NavigationLink({ children, to }) {
  return (
    <NavLink to={to}>
        {children}
    </NavLink>
  );
};
