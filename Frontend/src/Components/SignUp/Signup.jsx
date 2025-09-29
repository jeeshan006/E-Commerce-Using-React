import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
} from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name,setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    

    if (!email || !password) {
      setError('All fields are required');
      
    }
    else{
         setError('');
         console.log('Login successful:', { email, password });
         alert("Sign up Successfully")
         navigate('/login')
    }
   
    
  };

  return (
   <div className='h-screen relative top-20 flex'>
     <Container  maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 10 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Sign Up User
        </Typography>

        {error && (
          <Typography color="error" align="center" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            type="text"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
            <TextField
            fullWidth
            label="Email"
            type="email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            variant="contained"
            fullWidth
            type="submit"
            sx={{ marginTop: 2 }}
           
          >
            Sign Up
          </Button>
        </Box>
      </Paper>
    </Container>
   </div>
  );
};

export default Signup;

