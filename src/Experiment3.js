import React from 'react';
import {
  Container,
  TextField,
  Button,
  Card,
  CardContent,
  Typography
} from '@mui/material';

function Experiment3() {
  return (
    <Container maxWidth="sm" style={{ marginTop: '40px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Experiment-3: Material UI Design
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Login Form
          </Typography>

          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
          />

          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '16px' }}
          >
            Login
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Experiment3;
