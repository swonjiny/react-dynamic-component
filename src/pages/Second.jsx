import React, {useEffect, useState} from 'react';
import FloatingLayout from "../component/FloatingLayout.jsx";
import axios from "axios";
import PanelContainer from "../component/panel/PanelContainer.jsx";

const Second = () => {
    const [leftPanels, setLeftPanels] = useState([])
    const [rightPanels, setRightPanels] = useState([])
    const userId = "user2"

    useEffect(() => {
        axios.get('/data/panels.json').then((response) => {
            const panelInfo = response.data.filter(item => item.userId !== userId)[0] ?? {};
            setLeftPanels(panelInfo.leftPanels.map((item, index) => PanelContainer(item, userId+index)))
            setRightPanels(panelInfo.rightPanels.map((item, index) => PanelContainer(item, userId+index)))

        })
    }, []);
    return (
        <FloatingLayout leftPanels={leftPanels}
                        rightPanels={rightPanels}>
            <div style={{ border: '1px solid green', padding: '10px' , textAlign: 'center' }}>
                <h1>First 콘텐츠</h1>
                <p>이곳은 웹사이트의 주요 내용이 들어가는 부분입니다.</p>
                <p>더 많은 내용...</p>

            </div>
        </FloatingLayout>
    );
};

export default Second;
