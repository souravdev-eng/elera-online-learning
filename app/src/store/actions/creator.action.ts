import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {BASE_URL} from '../../api/baseUrl';

export const getCreatorList = createAsyncThunk(
  'creator/getCreatorList',
  async (data: {token: string}, {rejectWithValue}) => {
    try {
      const response = await axios.get(`${BASE_URL}/creator`, {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${data.token}`,
        },
      });
      return response.data.creator;
    } catch (error: any) {
      throw rejectWithValue(error.response.data.errors);
    }
  },
);

export const getCreatorById = createAsyncThunk(
  'creator/getCreatorDetails',
  async (data: {token: string; id: string}, {rejectWithValue}) => {
    try {
      const response = await axios.get(`${BASE_URL}/creator/${data.id}`, {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${data.token}`,
        },
      });
      return response.data;
    } catch (error: any) {
      throw rejectWithValue(error.response.data.errors);
    }
  },
);
