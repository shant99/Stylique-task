import { configureStore } from "@reduxjs/toolkit";
import myStartup from "./slice/myStartup";

const store = configureStore({
    reducer: {
        myStartup
    }
})


export default store