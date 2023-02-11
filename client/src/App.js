// React & react-router(-dom) : 
import React from "react";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom";

// Layouts - Parent->child relationship to establish constants 
import SharedLayout from "./layouts/SharedLayout";

// Pages - all relevant pages for FE endpoints
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Profile from "./pages/Profile";

// modern syntax for browser router. Function to create Browser router. Nested function inside to create the routes from the elements themselves 
const homeRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<SharedLayout />} >
            <Route index element={<HomePage />} />
            <Route  path='about' element={<AboutUs />} />
            <Route  path='profile' element={<Profile />} />
            {/* add other routes here, all nested elemetns   */}
        </Route>
            
    )
)

function App() {

    return(
        <RouterProvider router={homeRouter} />
    )
}

export default App;