import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import MainLayout from "./Layout/MainLayout.jsx";
import HomePage from "./Routes/HomePage.jsx";


const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            { path: "/", element: <HomePage /> },
        ],
    },
]);


createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/*<ThemeProvider>*/}
        {/* Wrapping the RouterProvider with Provider for UI components */}
        <RouterProvider router={router} />
        {/*</ThemeProvider>*/}
    </StrictMode>
)

