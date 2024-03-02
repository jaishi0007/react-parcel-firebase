import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Posts from "./Posts";
import Post from "./Post";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Posts />

    },
    {
        path: 'post/:id',
        element: <Post />
    }
]);

export default router;