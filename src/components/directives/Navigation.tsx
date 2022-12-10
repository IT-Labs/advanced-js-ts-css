import Stack from '@mui/material/Stack';
import { NavLink, useLocation } from 'react-router-dom';
import classes from './Navigation.module.css';
import { useState } from 'react';

export default function Navigation() {

  const navLinks: {link: string, name: string}[] = [
    {link: '/home', name: 'Home'}, 
    {link: '/var-let-const', name: 'Var Let Const'},
    {link: '/variable-types', name: 'Variable types'},
    {link: '/accessing-object-properties', name: 'Accessing Object Properties'},
    {link: '/if-else-switch', name: 'If Else Switch'},
    {link: '/arrays', name: 'Arrays'},
    {link: '/spread-rest-destructuring', name: 'Spread Rest Destructuring'},
    {link: '/shallow-deep-copy', name: 'Shallow and Deep copy'},
    {link: '/named-and-default-exports', name: 'Named and Default Export'},
    {link: '/type-script-intro', name: 'TypeScript Intro'},
    {link: '/type-inference', name: 'Type Inference'},
    {link: '/type-assertions', name: 'Type Assertions'},
    {link: '/union-types', name: 'Union Types'},
    {link: '/generics', name: 'Generics'},
    {link: '/css-selectors', name: 'CSS Selectors'},
    {link: '/css-position', name: 'CSS Position'},
    {link: '/css-position-examples', name: 'CSS Position Examples'},
    {link: '/css-display', name: 'CSS Display'},
    {link: '/css-display-examples', name: 'CSS Display Examples'},
  ];

  const { pathname } = useLocation();
  let currentLink = navLinks.findIndex(o => o.link === pathname);
  const [activeLink, setActiveLink] = useState(currentLink ? currentLink : 0);

  return (
      <Stack direction="column" spacing={2} className={classes.header}>
        {navLinks.map((navLink, index) => 
          <NavLink key={index} to={navLink.link} className={(navData: any) => navData.isActive ? classes.active : ''} onClick={() => setActiveLink(index)}>
            <div className={classes.linksWrapper}>
              {navLink.name}
              <div className={classes.play}></div>
              {index < activeLink && <div className={classes.completed}>completed</div>}
            </div>
          </NavLink>
        )}
      </Stack>
  );
}
