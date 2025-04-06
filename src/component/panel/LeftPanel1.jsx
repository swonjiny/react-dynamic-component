import React, {useEffect} from 'react';
import {useLocation} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {addLeftPanel} from "../../store/panelSlice.js";

const LeftPanel1 = ({name, panelEvent}) => {
    const location = useLocation()
    const dispatch = useDispatch()
    const panelInfo = useSelector(state => state.panelInfo.leftPanels)
    const test  = () => {
        const obj = {
                path : location.pathname.split('/')[1] ?? 'home',
                panelName: name,
                objectList : [
                    {
                        objId : 'languages',
                        value: document.getElementById('languages').value
                    }
                ]

        }

        console.log(obj)
        dispatch(addLeftPanel(obj))
        if (typeof panelEvent === 'function') {
            panelEvent();
        }
    }

    useEffect(() => {
        console.log('패널붙음')
        console.log(panelInfo)
        const pathName = location.pathname.split('/')[1] ?? 'home'
        panelInfo.map(item => {
            item.objectList.map(oItem => {
                if(oItem.objId ==='languages' && item.path === pathName && item.panelName === 'leftPanel1' ) {
                    console.log(oItem)
                    document.getElementById('languages').value = oItem.value
                }
            })
        })

    }, []);

    return (
        <div style={{border: '1px solid blue', padding: '10px'}}>
            <h3>왼쪽 패널 1</h3>
            <ul>
                <li>항목 A</li>
                <li>항목 B</li>
            </ul>

                <label htmlFor="lang">Language</label>
                <select name="languages" id="languages" onChange={test}>
                    <option value="javascript">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="java">Java</option>
                    <option value="golang">Golang</option>
                    <option value="python">Python</option>
                    <option value="c#">C#</option>
                    <option value="C++">C++</option>
                    <option value="erlang">Erlang</option>
                </select>

        </div>
    );
};

export default LeftPanel1;
