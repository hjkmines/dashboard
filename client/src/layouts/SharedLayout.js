import React from "react";
import  { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const SharedLayout = () => {
    return (
        <Box>
            <Navbar />
            <Outlet />
            <Footer />
        </Box>
    )
}

export default SharedLayout;