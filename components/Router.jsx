import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Posts from "./Posts";
import Post from "./Post";
import CreatePost from "./CreatePost";

const router = createBrowserRouter([
    {
        path: '/',
        element: <CreatePost />
    },
    {
        path: '/post',
        element: <Posts />

    },
    {
        path: 'post/:id',
        element: <Post />
    },

]);

export default router;