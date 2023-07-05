import { createAsyncThunk } from '@reduxjs/toolkit';
import authApi from '../../apis/authApi';

export const userLoginWithPhone = createAsyncThunk('user/loginWithPhone', async (body: ILoginWithPhone, thunkAPI) => {
    try {
        const response = await authApi.loginWithPhone(body);
        return response.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const userSendOTPRegister = createAsyncThunk(
    'user/sendOTPRegister',
    async (body: ISendOTPRegister, thunkAPI) => {
        try {
            const response = await authApi.sendOTPRegister(body);
            return response.data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const userCurrentUser = createAsyncThunk('user/currentUser', async (_data, thunkAPI) => {
    try {
        const response = await authApi.currentUser();
        return response.data.data;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error);
    }
});

export const userVerifyOTP = createAsyncThunk('user/verifyOTP', async (data: IVerifyOTP, thunkAPI) => {
    try {
        const response = await authApi.verifyOTP(data);
        return response.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});
