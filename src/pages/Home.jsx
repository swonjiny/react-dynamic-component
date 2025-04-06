import React, {useEffect, useState} from 'react';
import PanelContainer from "../component/panel/PanelContainer.jsx";
import FloatingLayout from "../component/FloatingLayout.jsx";

const Home = () => {
    const [leftPanels, setLeftPanels] = useState([])
    const [rightPanels, setRightPanels] = useState([])

    const userId = "user1"

    const panelList = [
        {
            "userId": "user1",
            "leftPanels": [
                "leftPanel1",
                "leftPanel2",
                "leftPanel3"
            ],
            "rightPanels": [
                "rightPanel1",
                "rightPanel2",
                "rightPanel3"
            ]
        },
        {
            "userId": "user2",
            "leftPanels": [
                "leftPanel2",
                "leftPanel3"
            ],
            "rightPanels": [
                "rightPanel3"
            ]
        },
        {
            "userId": "user3",
            "leftPanels": [
                "leftPanel3",
                "leftPanel1"
            ],
            "rightPanels": [
                "rightPanel3",
                "rightPanel2",
                "rightPanel1"
            ]
        }
    ]
    const clickTest = () => {
        console.log('클릭테스트')
    }

    useEffect(() => {
        setTimeout(()=> {
            const obj = panelList.filter(item => item.userId === userId);
            setLeftPanels(obj[0].leftPanels.map((item, index) => PanelContainer(item, userId+index , clickTest)))
            setRightPanels(obj[0].rightPanels.map((item, index) => PanelContainer(item, userId+index)))

        } , 2000)


    }, []);

    const leftPanel1 = (
        <div style={{ border: '1px solid blue', padding: '10px' }}>
            <h3>왼쪽 패널 1</h3>
            <ul>
                <li>항목 A</li>
                <li>항목 B</li>
            </ul>
        </div>
    );

    const leftPanel2 = (
        <div style={{ border: '1px solid navy', padding: '10px' }}>
            <h3>왼쪽 패널 2</h3>
            <p>추가 정보</p>
        </div>
    );

    const rightPanel1 = (
        <div style={{ border: '1px solid green', padding: '10px' }}>
            <h3>오른쪽 패널 1</h3>
            <p>광고 1</p>
        </div>
    );

    const rightPanel2 = (
        <div style={{ border: '1px solid teal', padding: '10px' }}>
            <h3>오른쪽 패널 2</h3>
            <button>액션</button>
        </div>
    );


    return (
        <FloatingLayout leftPanels={leftPanels}
                        rightPanels={rightPanels}>
            <div style={{ border: '1px solid green', padding: '10px' , textAlign: 'center' }}>
                <h1>메인 콘텐츠</h1>
                <p>이곳은 웹사이트의 주요 내용이 들어가는 부분입니다.</p>
                <p>더 많은 내용...</p>

            </div>
        </FloatingLayout>
    );
}
export default Home;
