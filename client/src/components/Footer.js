import React from 'react'
import { Box, Stack, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Stack direction={"row"} >
        <Box>
            <Typography>
                This is the footer! 
            </Typography>
        </Box>
        <Box>
            <Typography>
                Item 1
            </Typography>
        </Box>
        <Box>
            <Typography>
                Item 2
            </Typography>
        </Box>
        <Box>
            <Typography>
                Item 3
            </Typography>
        </Box>
        <Container>
            test 4
        </Container>
    </Stack>
  )
}

export default Footer