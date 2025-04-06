import {createBrowserRouter} from "react-router";
import Home from "../pages/Home.jsx"
import First from "../pages/First.jsx";
import Laoyout from "../component/Laoyout.jsx";

const router = createBrowserRouter([{
    path : "/",
    Component : Laoyout,
    children: [
        {
            index: true,
            Component : Home,
        }, {
            path: "/first",
            Component: First,
        }
    ]
    }
])
export default router;
