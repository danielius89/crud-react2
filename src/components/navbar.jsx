import * as React from 'react';
import { useContext } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  styled,
  Typography,
  Divider,
} from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { UserContext } from '../global/UserContext';
import { login } from '../services/login';

const Link = styled(NavLink)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(0, 2),
  textDecoration: 'none',
  color: theme.palette.grey[200],

  '&.active': {
    boxShadow: `inset 0 -4px 0 ${theme.palette.common.white}`,
  },

  ':hover': {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
}));

const pages = [
  { text: 'Pagrindinis', to: '/' },
  { text: 'Filmai', to: '/movies' },
  { text: 'Žaidimai', to: '/games' },
  { text: 'Serialai', to: '/tv-series' },
];

const Navbar = () => {
  // react context
  const { user, setUser } = useContext(UserContext);

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          sx={{ display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ display: 'flex', alignSelf: 'stretch' }}>
          {pages.map(({ text, to }) => <Link key={to} to={to}>{text}</Link>)}
          <Divider
            orientation="vertical"
            flexItem
            variant="middle"
            sx={{ marginLeft: 1, marginRight: 2 }}
          />
          {user ? (
            <Button
              variant="ou"
              size="small"
              color="white"
              type="submit"
              sx={{ fontWeight: '700' }}
              onClick={() => {
                // call logout
                setUser(null);
              }}
            >
              Atsijungti
            </Button>
          ) : (

            <Button
              size="small"
              color="white"
              sx={{ fontWeight: '700' }}
              onClick={async () => {
              // eslint-disable-next-line no-shadow
                const user = await login();
                setUser(user);
              }}
            >
              Prisijungti

            </Button>
          )}

        </Box>
        <Typography sx={{ fontWeight: '700' }}>
          Your daily dose of
          <Typography component="span" color="secondary" sx={{ fontWeight: '700', textTransform: 'uppercase' }}> popular </Typography>
          culture
        </Typography>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
