import { configureStore }   from "@reduxjs/toolkit";
import apple                from "./apple";

const store = configureStore({
    reducer: {
        apple,
    },
});

export default store;