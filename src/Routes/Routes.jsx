import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Statistics from "../pages/Statistics/Statistics";
import AppliedJobs from "../pages/AppliedJobs/AppliedJobs";
import Blog from "../pages/Blog/Blog";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'statistics',
                element: <Statistics/>
            },
            {
                path: 'appliedJobs',
                element: <AppliedJobs/>
            },
            {
                path: 'blog',
                element: <Blog/>
            }
        ]
    },
]);