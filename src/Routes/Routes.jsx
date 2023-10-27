import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Statistics from "../pages/Statistics/Statistics/Statistics";
import Blog from "../pages/Blog/Blog/Blog";
import Home from "../pages/Home/Home/Home";
import AppliedJobs from "../pages/AppliedJobs/AppliedJobs/AppliedJobs";

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