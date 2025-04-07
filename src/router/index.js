import {createBrowserRouter} from "react-router";
import Home from "../pages/Home.jsx"
import First from "../pages/First.jsx";
import Laoyout from "../component/Laoyout.jsx";
import Tab from "../pages/Tab.jsx";
import Second from "../pages/Second.jsx";
import Third from "../pages/Third.jsx";

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
        },{
            path: "/second",
            Component: Second,
        },{
            path: "/third",
            Component: Third,
        }, {
            path: "/tab",
            Component: Tab,
        }
    ]
    }
])
export default router;
