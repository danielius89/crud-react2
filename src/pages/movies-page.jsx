import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
// import Link from '@mui/material/Link';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const hero = {
  /* backgroundImage: 'url("https://images.unsplash.com/photo-1597696929644-a2157a251a43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: '0% 50%',
  height: 'calc(100vh - 64px)', */
  backgroundColor: '#f4f4f4',
};

const theme = createTheme();

theme.typography.h1 = {
  fontSize: '1.5rem',
  '@media (min-width:600px)': {
    fontSize: '2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
  },
};

const HomePage = () => (
  <div style={hero}>
    <ThemeProvider theme={theme}>
      <Typography variant="h1" align="center" pt="1vh" component="div" gutterBottom>
        Filmai
      </Typography>
    </ThemeProvider>

    <Container maxWidth="lg">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} p={2}>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardMedia
              component="img"
              height="auto"
              image="https://geekified.net/wp-content/uploads/2019/07/stranger-things-eleven-papa-800x450.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Naujiena 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Earum, animi! Temporibus officiis quam quidem repellat et
                aperiam totam corrupti consectetur.
              </Typography>
            </CardContent>
            <CardActions>
              <Button href="/pottery" size="medium">Skaityti plačiau</Button>
            </CardActions>
          </Card>

        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardMedia
              component="img"
              height="auto"
              image="https://geekified.net/wp-content/uploads/2019/07/stranger-things-nancy-johnathan-800x450.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Naujiena2
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Earum, animi! Temporibus officiis quam quidem repellat et
                aperiam totam corrupti consectetur.
              </Typography>
            </CardContent>
            <CardActions>
              <Button href="/cup-shelf" size="medium">Skaityti plačiau</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardMedia
              component="img"
              height="auto"
              image="https://geekified.net/wp-content/uploads/2019/07/stranger-things-joyce1-800x450.jpg"
              alt="Joyce"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Naujiena3
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Earum, animi! Temporibus officiis quam quidem repellat et
                aperiam totam corrupti consectetur.
              </Typography>
            </CardContent>
            <CardActions>
              <Button href="/cup-shelf" size="medium">Skaityti plačiau</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardMedia
              component="img"
              height="auto"
              image="https://geekified.net/wp-content/uploads/2019/07/stranger-things-eleven-papa-800x450.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Naujiena 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Earum, animi! Temporibus officiis quam quidem repellat et
                aperiam totam corrupti consectetur.
              </Typography>
            </CardContent>
            <CardActions>
              <Button href="/pottery" size="medium">Skaityti plačiau</Button>
            </CardActions>
          </Card>

        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardMedia
              component="img"
              height="auto"
              image="https://geekified.net/wp-content/uploads/2019/07/stranger-things-nancy-johnathan-800x450.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Naujiena2
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Earum, animi! Temporibus officiis quam quidem repellat et
                aperiam totam corrupti consectetur.
              </Typography>
            </CardContent>
            <CardActions>
              <Button href="/cup-shelf" size="medium">Skaityti plačiau</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardMedia
              component="img"
              height="auto"
              image="https://geekified.net/wp-content/uploads/2019/07/stranger-things-joyce1-800x450.jpg"
              alt="Joyce"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Naujiena3
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Earum, animi! Temporibus officiis quam quidem repellat et
                aperiam totam corrupti consectetur.
              </Typography>
            </CardContent>
            <CardActions>
              <Button href="/cup-shelf" size="medium">Skaityti plačiau</Button>
            </CardActions>
          </Card>
        </Grid>
        {' '}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardMedia
              component="img"
              height="auto"
              image="https://geekified.net/wp-content/uploads/2019/07/stranger-things-eleven-papa-800x450.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Naujiena 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Earum, animi! Temporibus officiis quam quidem repellat et
                aperiam totam corrupti consectetur.
              </Typography>
            </CardContent>
            <CardActions>
              <Button href="/pottery" size="medium">Skaityti plačiau</Button>
            </CardActions>
          </Card>

        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardMedia
              component="img"
              height="auto"
              image="https://geekified.net/wp-content/uploads/2019/07/stranger-things-nancy-johnathan-800x450.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Naujiena2
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Earum, animi! Temporibus officiis quam quidem repellat et
                aperiam totam corrupti consectetur.
              </Typography>
            </CardContent>
            <CardActions>
              <Button href="/cup-shelf" size="medium">Skaityti plačiau</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardMedia
              component="img"
              height="auto"
              image="https://geekified.net/wp-content/uploads/2019/07/stranger-things-joyce1-800x450.jpg"
              alt="Joyce"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Naujiena3
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Earum, animi! Temporibus officiis quam quidem repellat et
                aperiam totam corrupti consectetur.
              </Typography>
            </CardContent>
            <CardActions>
              <Button href="/cup-shelf" size="medium">Skaityti plačiau</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  </div>
);

export default HomePage;
