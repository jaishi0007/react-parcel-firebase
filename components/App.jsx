import React from "react";
import Post from "./Post";
import Posts from './Posts'
import { RouterProvider } from "react-router-dom";
import router from "./Router";

function App() {

    return (
        <div className="app-container">
            <RouterProvider router={router}/>
        </div>
    )

}

export default App;