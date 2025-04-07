import React, {useEffect} from 'react';
import {Tabs} from "antd";

const Tab = ({items}) => {
    const onChange = key => {
        console.log(key);
    };



    return (
        <Tabs hideAdd type="editable-card" defaultActiveKey="1" items={items} onChange={onChange} />
    );
};

export default Tab;
