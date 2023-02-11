import React from "react";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SharedLayout from "./layouts/SharedLayout";
// import { useTheme } from "@mui/material";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<SharedLayout />} >
            <Route index element={<HomePage />} />
        </Route>
            
    )
)

function App() {
    // const theme = useTheme();

    return(
        <RouterProvider router={router} />
    )
}

export default App;