import React from "react";
import { createRoot } from 'react-dom/client';
import domReady from '@wordpress/dom-ready';
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/**
 * Import the stylesheet for the plugin.
 */
import './style/main.scss';
import Contacts from "./Contacts";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/Contacts",
      element: <Contacts />,
    },
  ]);

domReady(() => {
    ReactDOM.createRoot(document.getElementById('wp_react_page_content')).render(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>,
    );
});