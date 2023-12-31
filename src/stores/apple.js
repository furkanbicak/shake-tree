import { createSlice }  from "@reduxjs/toolkit";
import functions        from "../functions";

const initialState = {
    /* 
        The function generates a random number of apples with a falling time between 
        the minimum and maximum values for the specified number of elements.
    */
    apples: functions.randomGenerateApples.generateApples(10, 1, 5),
}
const apple = createSlice({
    name: "apple",
    initialState,
    reducers: {
        // Lowers the apple by changing the y-axis of the apple
        dropApples: (state, action) => {
            state.apples.map((item) => {
                let { id } = item;
            
                if(id !== null){
                    state.apples[id].top = action.payload[id].top;
                } else {
                    alert(`${id} nolu elma bulunamadı`);
                }
            });
        },
        
        // Changes the x-axis of the apple and puts the apple in the basket
        sendToBasket: (state, action) => {

            state.apples.map((item) => {
                let { id } = item;

                if(id !== null){
                    state.apples[id].top = action.payload[id].top;
                    state.apples[id].left = action.payload[id].left;
                } else {
                    alert(`${id} nolu elma bulunamadı`);
                }
            });
        },

        // Reset the state.
        resetState: () =>{
            return initialState;
        }
    },
});

export const { dropApples, sendToBasket, resetState } = apple.actions;
export default apple.reducer;
