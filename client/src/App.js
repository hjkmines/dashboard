import React from "react";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom";
import HomePage from "./pages/HomePage";
// import { useTheme } from "@mui/material";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<HomePage />} />
            
    )
)

function App() {
    // const theme = useTheme();

    return(
        <RouterProvider router={router} />
    )
}

export default App;