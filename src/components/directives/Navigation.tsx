import Stack from '@mui/material/Stack';
import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';
import { useState } from 'react';

export default function Navigation() {

  const navLinks: {key: number, link: string, name: string}[] = [
    {key: 0, link: '/home', name: 'Home'}, 
    {key: 1, link: '/var-let-const', name: 'Var Let Const'},
    {key: 2, link: '/accessing-object-properties', name: 'Accessing Object Properties'},
    {key: 3, link: '/variable-types', name: 'Variable types'},
    {key: 4, link: '/arrays', name: 'Arrays'},
    {key: 5, link: '/spread-rest-destructuring', name: 'Spread Rest Destructuring'},
    {key: 6, link: '/named-and-default-exports', name: 'Named and Default Export'},
    {key: 7, link: '/type-script-intro', name: 'TypeScript Intro'},
    {key: 8, link: '/type-inference', name: 'Type Inference'},
    {key: 9, link: '/type-assertions', name: 'Type Assertions'},
    {key: 10, link: '/union-types', name: 'Union Types'},
    {key: 11, link: '/generics', name: 'Generics'},
    {key: 12, link: '/css-selectors', name: 'CSS Selectors'},
    {key: 13, link: '/css-position', name: 'CSS Position'},
    {key: 14, link: '/css-position-examples', name: 'CSS Position Examples'},
    {key: 15, link: '/css-display', name: 'CSS Display'},
    {key: 16, link: '/css-display-examples', name: 'CSS Display Examples'},
  ];

  const [activeLink, setActiveLink] = useState(0);

  return (
      <Stack direction="column" spacing={2} className={classes.header}>
        {navLinks.map(navLink => 
          <NavLink key={navLink.key} to={navLink.link} className={(navData: any) => navData.isActive ? classes.active : ''} onClick={() => setActiveLink(navLink.key)}>
            <div className={classes.linksWrapper}>
              {navLink.name}
              <div className={classes.play}></div>
              {navLink.key < activeLink && <div className={classes.completed}>completed</div>}
            </div>
          </NavLink>
        )}
      </Stack>
  );
}
