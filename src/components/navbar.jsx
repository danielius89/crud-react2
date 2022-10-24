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
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CloseIcon from '@mui/icons-material/Close';
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
    backgroundColor: theme.palette.primary.dark,
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

const expandBr = 'md';

const Navbar = () => {
  // react context
  const { user, setUser } = useContext(UserContext);
  const isContracted = useMediaQuery((theme) => theme.breakpoints.down(expandBr));
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!isContracted && open) {
      setOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isContracted]);

  return (
    <AppBar position="static" color="dark">
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', position: 'relative' }}>
          <IconButton
            size="large"
            edge="start"
            color="white"
            sx={{ display: { [expandBr]: 'none' }, alignSelf: 'center' }}
            onClick={() => setOpen(!open)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </IconButton>

          <Box sx={{ display: { xs: 'none', [expandBr]: 'flex' }, alignSelf: 'stretch' }}>
            {pages.map(({ text, to }) => <Link key={to} to={to}>{text}</Link>)}
            <Divider
              orientation="vertical"
              flexItem
              variant="middle"
              sx={{ marginLeft: 1, marginRight: 2 }}
            />
            {user ? (
              <Button
                size="small"
                color="white"
                sx={{
                  fontWeight: '700',
                  width: '100px',
                }}
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
                sx={{
                  fontWeight: '700',
                  width: '100px',
                }}
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
          {open ? (
            <Box sx={{
              display: { [expandBr]: 'none' },
              alignSelf: 'stretch',
              position: 'absolute',
              top: '56px',
              left: '0',
              width: '100%',
              height: '100vh',
              bgcolor: '#333',
              color: '#ddd',
              zIndex: '9',
            }}
            >
              {pages.map(({ text, to }) => (
                <Link
                  key={to}
                  to={to}
                  sx={{
                    padding: 1,
                  }}
                  onClick={() => setOpen(!open)}
                >
                  {text}
                </Link>
              ))}
              <Divider
                orientation="vertical"
                flexItem
                variant="middle"
                sx={{ marginLeft: 1, marginRight: 2, borderColor: '#fff' }}
              />
              {user ? (
                <Button
                  size="small"
                  color="white"
                  sx={{
                    fontWeight: '700',
                    margin: '0 auto',
                    textAlign: 'center',
                    width: '100px',
                    display: 'block',
                  }}
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
                  sx={{
                    fontWeight: '700',
                    margin: '0 auto',
                    textAlign: 'center',
                    width: '100px',
                    display: 'block',
                  }}
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
          )
            : ('')}
          <Typography sx={{ fontWeight: '700', color: '#FFF' }}>
            Your daily dose of
            <Typography component="span" color="secondary" sx={{ fontWeight: '700', textTransform: 'uppercase' }}> popular </Typography>
            culture
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
