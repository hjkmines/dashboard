import React from 'react'
import { Box, Container, Paper, Typography } from "@mui/material";


const Navbar = () => {
  return (
    <Box>
      <Container>
        <Paper elevation={2}>
          <Typography>
            This is the Navbar!
          </Typography>
        </Paper>
      </Container>
    </Box>
  )
}

export default Navbar