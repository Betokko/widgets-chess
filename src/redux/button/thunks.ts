import {createAsyncThunk} from "@reduxjs/toolkit";
import {getData} from "../../services";

export const getButtonData = createAsyncThunk('/constraints/getAll', async (params, thunkAPI) => {
    try {
        const res = await getData()
        console.log(res)
        return res
    } catch (err) {
        console.log(err)
    }
})
