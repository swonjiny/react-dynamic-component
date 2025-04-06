import {createSlice} from "@reduxjs/toolkit";

const panelSlice = createSlice({
    name: "panelSlice", initialState: {
        leftPanels: [],
        rightPanels: [],
    }

    , reducers: {
        addLeftPanel: (state, action) => {
            if(state.leftPanels.some(panel => panel.userId === action.payload.userId  && panel.panelName === action.payload.panelName ) ) {
                state.leftPanels = (
                    state.leftPanels.map( item => {
                        if(item.userId === action.payload.userId && item.panelName === action.payload.panelName) {
                            return { ...item, ...action.payload}
                        }
                    } )
                )
            } else {
                state.leftPanels.push(action.payload);
            }
        },
        addRightPanel: (state, action) => {
            state.rightPanels.push(action.payload);
        }
    }
},)

export const {addLeftPanel,addRightPanel} = panelSlice.actions;
export default panelSlice.reducer;
