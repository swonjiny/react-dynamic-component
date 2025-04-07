import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useNavigate} from "react-router";
import Tab from "../pages/Tab.jsx";
import {Button} from "antd";
import TabPanel1 from "./panel/TabPanel1.jsx";
import axios from "axios";
import PanelContainer from "./panel/PanelContainer.jsx";

const Laoyout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [path, setPath] = useState('')
    const [newTabIndex, setNewTabIndex] = useState(2);
    const [newTabTitle, setNewTabTitle] = useState('');
    const [items, setItems] = useState([]);
    const userId = "user1"
    useEffect(() => {
        axios.get('/data/panels.json').then((response) => {
            const panelInfo = response.data.filter(item => item.userId !== userId)[0] ?? {};
            console.log(panelInfo)

        })
    }, []);

    const addTab = () =>{
        const newTab = {
            key: String(newTabIndex),
            label: path || newTabTitle || `탭 ${newTabIndex}`,
            children: (
                <>
                <TabPanel1/>
                <TabPanel1/>
                </>
            ),
        };
        setItems([...items, newTab]);
        setNewTabIndex(newTabIndex + 1);
        setNewTabTitle(''); // 입력 필드 초기화

    }

    const clickUrl = (url) => {
        navigate(url)
    }

    useEffect(() => {
            setPath(location.pathname)

    }, [location.pathname]);
    return (

            <div>
                <Button onClick={()=> clickUrl('first')} type={path === '/first' ? 'primary' : ''}>first</Button>
                <Button onClick={()=> clickUrl('second')} type={path === '/second' ? 'primary' : ''}>second</Button>
                <Button onClick={()=> clickUrl('third')} type={path === '/third' ? 'primary' : ''}>third</Button>
                <p>
                    <Button onClick={addTab}>새탭만들기</Button>
                </p>

                <div style={{ border : '1px solid black' , width : '1800px' , height: '100vh'}}>
                    <Tab items={items} />
                </div>

            </div>
    )
}

export default Laoyout;
