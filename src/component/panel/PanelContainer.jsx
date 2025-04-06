import LeftPanel1 from "./LeftPanel1.jsx";
import LeftPanel2 from "./LeftPanel2.jsx";
import LeftPanel3 from "./LeftPanel3.jsx";

import RightPanel1 from "./RightPanel1.jsx";
import RightPanel2 from "./RightPanel2.jsx";
import RightPanel3 from "./RightPanel3.jsx";
const list = new Map([
    ['leftPanel1',LeftPanel1],
    ['leftPanel2',LeftPanel2],
    ['leftPanel3',LeftPanel3],
    ['rightPanel1',RightPanel1],
    ['rightPanel2',RightPanel2],
    ['rightPanel3',RightPanel3],
])


const PanelContainer = (name, key , panelEvent) => {
    const Panel = list.get(name);
    if(Panel) {
        return <Panel key={key} name={name}  panelEvent={panelEvent}/>;
    } else {
        return null;
    }
}

export default PanelContainer;
