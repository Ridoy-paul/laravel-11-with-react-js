import { createBrowserRouter } from "react-router-dom";
import Login from './../pages/Login';
import Home from './../pages/Home';
import Register from './../pages/Register';
import About from "../pages/About";
import NoteFound from "../pages/NoteFound";
import Layout from "../layouts/Layout";

export const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '*',
                element: <NoteFound/>
            },
        ]
    },
    
]);