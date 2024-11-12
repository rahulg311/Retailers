
//  Retailer signUP 

import axios from "axios";

 export const SET_RETAILER_INFO= 'SET_SIGNUP_INFO';
 export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';



// Action creators
export const setRetailerSignupInfo = (signupDate, pancardNo, mobileNo) => ({
  type: SET_RETAILER_INFO,
  payload: { signupDate, pancardNo, mobileNo },
});


// Action creators


const signupSuccess = (status) => ({
  type: SIGNUP_SUCCESS,
  payload: status,
});

const signupFailure = (status) => ({
  type: SIGNUP_FAILURE,
  payload: status,
});

// Thunk action for signup
export const signup = (RetailerSignup,  baseUrl, MethodNames, toast, navigate) => {
  return async (dispatch) => {
    const Signupdata = {
      PanNo: RetailerSignup.PanNo,
      Mobile: RetailerSignup.Mobile,
    };

    try {
      const Res = await axios.post(baseUrl + MethodNames.RetailerSignUp, Signupdata);
      const status = Res?.data.RetailerSignUp[0].RecordStatus;
      if (status === "Success") {
        toast.success("Signup successfully");
        dispatch(signupSuccess(status));
        dispatch(setRetailerSignupInfo(RetailerSignup.PanNo,  RetailerSignup.Mobile));
        navigate("/Kyc1");
      } else if (status === "Already Registered!") {
        toast.success("Already Registered");
        dispatch(signupFailure(status));
      }
    } catch (error) {
      toast.error("Signup failed");
      dispatch(signupFailure("Failed"));
    }
  };
};