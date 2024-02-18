import React from 'react';
import { makeStyles } from '@mui/system/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Grid, Typography, Divider } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  button: {
    margin: theme.spacing(3, 0, 2),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

const LoginPage = () => {
  const classes = useStyles();

  const handleSignIn = () => {
    // Handle sign-in logic here
  };

  return (
    <Grid container justify="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} sm={6} md={4}>
        <form className={classes.root} noValidate autoComplete="off">
          <Typography variant="h4" gutterBottom align="center" color="primary">
            Sign In
          </Typography>
          <TextField
            required
            id="username"
            label="Username"
            variant="outlined"
            fullWidth
          />
          <TextField
            required
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
          />
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSignIn}
          >
            Sign In
          </Button>
        </form>
        <Divider className={classes.divider} />
        <Typography variant="subtitle1" align="center" gutterBottom>
          Or sign in with social media
        </Typography>
        {/* Social Media Sign-In Buttons */}
        <Grid container justify="center" spacing={2}>
          {/* Add your social media sign-in buttons here */}
          <Grid item>
            <Button variant="contained" color="primary">
              Facebook
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary">
              Google
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" style={{ backgroundColor: '#1da1f2', color: '#fff' }}>
              Twitter
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
