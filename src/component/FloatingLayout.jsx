import React from 'react';

const FloatingLayout = ({ leftPanels, children, rightPanels }) => {
    return (
        <div className="floating-layout-container">
            <aside className="left-panels-container">
                {leftPanels && leftPanels.map((panel, index) => (
                    <div key={`left-panel-${index}`} className="left-panel">
                        {panel}
                    </div>
                ))}
            </aside>
            <main className="main-content">{children}</main>
            <aside className="right-panels-container">
                {rightPanels && rightPanels.map((panel, index) => (
                    <div key={`right-panel-${index}`} className="right-panel">
                        {panel}
                    </div>
                ))}
            </aside>
        </div>
    );
};

export default FloatingLayout;
