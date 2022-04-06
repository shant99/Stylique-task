import { createSlice } from "@reduxjs/toolkit";
const loc = JSON.parse(localStorage.getItem('Shant-MyStartup'))
const initialState = {
    randomText: '' ,
    data: [
        {
            name: 'Foundation',
            completed: false ,
            id: '0',
            subSteps: [
                { subStep: "Setup virtual office" , checked: false , id: '0-0' },
                { subStep: "Set mission & vision" , checked: false , id: '0-1' },
                { subStep: "Select business name" , checked: false , id: '0-2' },
                { subStep: "Buy domains" , checked: false , id: '0-3' },
            ]
        } ,
        {
            name: 'Discovery',
            completed: false ,
            id: '1',
            subSteps: [
                { subStep: "Create roadmap" , checked: false  , id: '1-0' },
                { subStep: "Competitor analysis" , checked: false  , id: '1-1' },
            ]
        } , 
        {
            name: 'Delivery',
            completed: false ,
            id: '2',
            subSteps: [
                { subStep: "Release marketing website" , checked: false , id: '2-0' },
                { subStep: "Release MVP" , checked: false , id: '2-1' },
            ]
        },
    ]
}

const myStartup = createSlice({
    name: 'myStartup' ,
    initialState, 
    reducers: {
        setData(state , action ){
            state.data = action.payload
        },
        setRandomText(state , action){
            state.randomText = action.payload
        }
    }
})

export let  { setData , setRandomText } = myStartup.actions;
export default myStartup.reducer;