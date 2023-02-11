import React from 'react'
import { Box, Stack, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Stack direction={"row"} sx={{ alignItems:"space-between "}} >
        <Box sx={{ backgroundColor:"magenta" }}>
            <Typography sx={{background:"transparent"}}>
                This is the footer! 
            </Typography>
            <Typography sx={{backgroundColor: "teal"}}>
                 part1
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