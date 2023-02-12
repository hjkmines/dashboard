import React from 'react'
import { Container, Box, Typography, Button, styled, useTheme } from "@mui/material";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

const HomePage = () => {
  const theme = useTheme();

  const CustomBox = styled("div")(({ theme }) => ({
    backgroundColor: "#",
    color: theme.mintGreen,
    "& :hover": {
      backgroundColor: "#2e8b57"
    }
  }));



  return (
    <Box>
      <Container sx={{mt:4, mb:4,}}>
        <Typography>
          This is the HomePage! 
        </Typography>
      </Container>

      <CustomBox>
          <Button color={theme.mintGreen} variant='contained' endIcon={<ThumbUpOffAltIcon />}>
            Test
          </Button>
      </CustomBox>
    </Box>
  )
}

export default HomePage