import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Statistics from "../pages/Statistics/Statistics/Statistics";
import Blog from "../pages/Blog/Blog/Blog";
import Home from "../pages/Home/Home/Home";
import AppliedJobs from "../pages/AppliedJobs/AppliedJobs/AppliedJobs";
import JobDetail from "../pages/Home/JobDetail/JobDetail";
import NotFound404 from "../pages/NotFound404/NotFound404";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'statistics',
                element: <Statistics />
            },
            {
                path: 'appliedJobs',
                element: <AppliedJobs />
            },
            {
                path: 'job/:jobId',
                element: <JobDetail />
            },
            {
                path: 'blog',
                element: <Blog />
            },
            {
                path: '*',
                element: <NotFound404/>
            }
        ]
    },
]);