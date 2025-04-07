
const TabPanel1 = () => {



    const test  = () => {
        console.log(1123)
    }



    return (
        <div style={{border: '1px solid blue', padding: '10px'}}>
            <h3>TAB 패널 1</h3>
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

export default TabPanel1;
