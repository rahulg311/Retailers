import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

import { baseUrl } from '../../Constant/constant';
import { MethodNames } from '../../Constant/methodNames';

// Async thunk for signup
export const RetailerKyc = createAsyncThunk(
  'RetailerKyc/RetailerKyc',
  async ({ RetailerSignup, navigate }, { rejectWithValue }) => {
    const regex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    const PanCard = regex.test(RetailerSignup?.PanNo);

    if (!PanCard) {
      toast.error("PAN Card is Not valid!");
      return rejectWithValue("PAN Card is Not valid!");
    }

    if (RetailerSignup?.Mobile.length < 10) {
      toast.error("Please enter 10 digit Mobile no");
      return rejectWithValue("Please enter 10 digit Mobile no");
    }

    const Signupdata = {
      PanNo: RetailerSignup.PanNo,
      Mobile: RetailerSignup.Mobile,
    };

    try {
      const response = await axios.post(baseUrl + MethodNames.RetailerSignUp, Signupdata);
      const { RecordStatus } = response?.data?.RetailerSignUp[0];

      if (RecordStatus === "Success") {
        toast.success("Signup successfully");
        navigate("/Kyc1");
        return response.data;
      } else if (RecordStatus === "Already Registered!") {
        toast.success("Already Registered");
        return rejectWithValue("Already Registered");
      }
    } catch (error) {
      toast.error("Signup error");
      return rejectWithValue(error.response.data);
    }
  }
);

// Signup slice
const KycSlice = createSlice({
  name: 'signup',
  initialState: {
    RetailerSignup: {
      PanNo: "",
      Mobile: "",
    },
    loading: false,
    error: null,
  },
  reducers: {
    setField: (state, action) => {
      const { field, value } = action.payload;
      state.RetailerSignup[field] = value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(RetailerKyc.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(RetailerKyc.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(RetailerKyc.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setField } = KycSlice.actions;
export default KycSlice.reducer;
