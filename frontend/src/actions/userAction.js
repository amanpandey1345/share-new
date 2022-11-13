import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,

  UPDATE_PROFILE_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,

  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,

  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,

  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  ALL_USERS_FAIL,

  CREATE_BET_REQUEST,
  CREATE_BET_SUCCESS,
  CREATE_BET_FAIL,

  ALL_BET_REQUEST,
  ALL_BET_SUCCESS,
  ALL_BET_FAIL,

  UPDATE_BALANCE_REQUEST,
  UPDATE_BALANCE_SUCCESS,
  UPDATE_BALANCE_FAIL,

  CREATE_DEPOSIT_REQUEST,
  CREATE_DEPOSIT_SUCCESS,
  CREATE_DEPOSIT_FAIL,

  CREATE_WITHDRAWAL_REQUEST,
  CREATE_WITHDRAWAL_SUCCESS,
  CREATE_WITHDRAWAL_FAIL,

  ALL_DEPOSIT_REQUEST,
  ALL_DEPOSIT_SUCCESS,
  ALL_DEPOSIT_FAIL,

  ALL_WITHDRAWAL_REQUEST,
  ALL_WITHDRAWAL_SUCCESS,
  ALL_WITHDRAWAL_FAIL,

  ALL_BETS_REQUEST,
  ALL_BETS_SUCCESS,
  ALL_BETS_FAIL,


  ALL_DEPOSITS_REQUEST,
  ALL_DEPOSITS_SUCCESS,
  ALL_DEPOSITS_FAIL,

  ALL_WITHDRAWALS_REQUEST,
  ALL_WITHDRAWALS_SUCCESS,
  ALL_WITHDRAWALS_FAIL,

  ALL_NOTIFICATION_REQUEST,
  ALL_NOTIFICATION_SUCCESS,
  ALL_NOTIFICATION_FAIL,


  UPDATE_DEPOSIT_REQUEST,
  UPDATE_DEPOSIT_SUCCESS,
  UPDATE_DEPOSIT_FAIL,




  UPDATE_WITHDRAWAL_REQUEST,
  UPDATE_WITHDRAWAL_SUCCESS,
  UPDATE_WITHDRAWAL_FAIL,


  UPDATE_ADUSER_REQUEST,
  UPDATE_ADUSER_SUCCESS,
  UPDATE_ADUSER_FAIL,

  UPDATE_SHOWTIME_REQUEST,
  UPDATE_SHOWTIME_SUCCESS,
  UPDATE_SHOWTIME_FAIL,



  UPDATE_WINSET_REQUEST,
  UPDATE_WINSET_SUCCESS,
  UPDATE_WINSET_FAIL,


  ALL_SHOWTIME_REQUEST,
  ALL_SHOWTIME_SUCCESS,
  ALL_SHOWTIME_FAIL,

  ALL_BETDONE_REQUEST,
  ALL_BETDONE_SUCCESS,
  ALL_BETDONE_FAIL,

  CREATE_SHOWHISTORY_REQUEST,
  CREATE_SHOWHISTORY_SUCCESS,
  CREATE_SHOWHISTORY_FAIL,

  CREATE_SAY_REQUEST,
  CREATE_SAY_SUCCESS,
  CREATE_SAY_FAIL,

  // GET_SAY_REQUEST,
  // GET_SAY_SUCCESS,
  // GET_SAY_FAIL,

  GET_SHOWHISTORY_FAIL,
  GET_SHOWHISTORY_SUCCESS,
  GET_SHOWHISTORY_REQUEST,


  
  CLEAR_ERRORS,
} from "../constants/userConstants";

import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = { header: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `/api/v1/login`,
      { email, password },
      config
    );
    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};

export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const config = { header: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(`/api/v1/register`, userData, config);
    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const { data } = await axios.get(`/api/v1/me`);
    dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
  }
};

export const logout = () => async (dispatch) => {
  try {
    await axios.get(`/api/v1/logout`);
    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
  }
};

export const updateProfile = (userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST });

    const config = { header: { "Content-Type": "application/json" } };

    const { data } = await axios.post(`/api/v1/`, userData, config);
    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error.response.data.message,
    });
  }
};
// Update Password
export const updatePassword = (passwords) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PASSWORD_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.put(
      `/api/v1/password/update`,
      passwords,
      config
    );

    dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};



// Forgot Password
export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(`/api/v1/password/forgot`, email, config);

    dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};


// Reset Password
export const resetPassword = (token, passwords) => async (dispatch) => {
  try {
    dispatch({ type: RESET_PASSWORD_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.put(
      `/api/v1/password/reset/${token}`,
      passwords,
      config
    );

    dispatch({ type: RESET_PASSWORD_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: RESET_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};


export const createBet = (betData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_BET_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/user/bet`,
      betData,
      config
    );

    dispatch({
      type: CREATE_BET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_BET_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const createDeposit = (betData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_DEPOSIT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/user/deposit`,
      betData,
      config
    );

    dispatch({
      type: CREATE_DEPOSIT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_DEPOSIT_FAIL,
      payload: error.response.data.message,
    });
  }
};


export const createWithdrawal = (betData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_WITHDRAWAL_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/user/withdrawal`,
      betData,
      config
    );

    dispatch({
      type: CREATE_WITHDRAWAL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_WITHDRAWAL_FAIL,
      payload: error.response.data.message,
    });
  }
};


// Get user bet
export const getBetUser =() => async (dispatch) => {
    try {
      dispatch({ type: ALL_BET_REQUEST });


      const { data } = await axios.get(`/api/v1/mybet`);

      dispatch({
        type: ALL_BET_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_BET_FAIL,
        payload: error.response.data.message,
      });
    }
  };


  // Get user bet
export const getDepositUser =() => async (dispatch) => {
  try {
    dispatch({ type: ALL_DEPOSIT_REQUEST });


    const { data } = await axios.get(`/api/v1/mydeposit`);

    dispatch({
      type: ALL_DEPOSIT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_DEPOSIT_FAIL,
      payload: error.response.data.message,
    });
  }
};


  // Get user bet
  export const getWithdrawalUser =() => async (dispatch) => {
    try {
      dispatch({ type: ALL_WITHDRAWAL_REQUEST });
  
  
      const { data } = await axios.get(`/api/v1/mywithdrawal`);
  
      dispatch({
        type: ALL_WITHDRAWAL_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_WITHDRAWAL_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Update balance
export const updateBalance = (userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_BALANCE_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v1/balance/update`,
      userData,
      config
    );

    dispatch({
      type: UPDATE_BALANCE_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: UPDATE_BALANCE_FAIL,
      payload: error.response.data.message,
    });
  }
};


export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_USERS_REQUEST });
    const { data } = await axios.get(`/api/v1/admin/users`);

    dispatch({ type: ALL_USERS_SUCCESS, payload: data.users });
  } catch (error) {
    dispatch({ type: ALL_USERS_FAIL, payload: error.response.data.message });
  }
};

export const getAllBets = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_BETS_REQUEST });
    const { data } = await axios.get(`/api/v1/admin/bets`);

    dispatch({ type: ALL_BETS_SUCCESS, payload: data.bets });
  } catch (error) {
    dispatch({ type: ALL_BETS_FAIL, payload: error.response.data.message });
  }
};

export const getAllDeposits = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_DEPOSITS_REQUEST });
    const { data } = await axios.get(`/api/v1/admin/deposits`);

    dispatch({ type: ALL_DEPOSITS_SUCCESS, payload: data.deposits });
  } catch (error) {
    dispatch({ type: ALL_DEPOSITS_FAIL, payload: error.response.data.message });
  }
};

export const getAllWithdrawals = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_WITHDRAWALS_REQUEST });
    const { data } = await axios.get(`/api/v1/admin/withdrawals`);

    dispatch({ type: ALL_WITHDRAWALS_SUCCESS, payload: data.withdrawals });
  } catch (error) {
    dispatch({ type: ALL_WITHDRAWALS_FAIL, payload: error.response.data.message });
  }
};


export const AdminUpdateUser1 = (id, userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_ADUSER_REQUEST });

    const config = { header: { "Content-Type": "application/json" } };

    const { data } = await axios.put(`/api/v1/admin/user/update/${id}`, userData, config);
    dispatch({ type: UPDATE_ADUSER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: UPDATE_ADUSER_FAIL,
      payload: error.response.data.message,
    });
  }
};


export const AdminUpdateWith1 = (id, userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_WITHDRAWAL_REQUEST });

    const config = { header: { "Content-Type": "application/json" } };

    const { data } = await axios.put(`/api/v1/admin/withdrawals/update/${id}`, userData, config);
    dispatch({ type: UPDATE_WITHDRAWAL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: UPDATE_WITHDRAWAL_FAIL,
      payload: error.response.data.message,
    });
  }
};



export const AdminUpdateDeposit1 = (id, userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_DEPOSIT_REQUEST });

    const config = { header: { "Content-Type": "application/json" } };

    const { data } = await axios.put(`/api/v1/admin/deposits/update/${id}`, userData, config);
    dispatch({ type: UPDATE_DEPOSIT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: UPDATE_DEPOSIT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const AdminUpdateShowTime = (userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_SHOWTIME_REQUEST });

    const config = { header: { "Content-Type": "application/json" } };

    const { data } = await axios.put(`/api/v1/admin/showtime/update`, userData, config);
    dispatch({ type: UPDATE_SHOWTIME_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: UPDATE_SHOWTIME_FAIL,
      payload: error.response.data.message,
    });
  }
};


export const AdminUpdateWinset = (userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_WINSET_REQUEST });

    const config = { header: { "Content-Type": "application/json" } };

    const { data } = await axios.put(`/api/v1/admin/winset/update`, userData, config);
    dispatch({ type: UPDATE_WINSET_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: UPDATE_WINSET_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getShowtime = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_SHOWTIME_REQUEST });
    const { data } = await axios.get(`/api/v1/admin/getshowtime`);

    dispatch({ type: ALL_SHOWTIME_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ALL_SHOWTIME_FAIL, payload: error.response.data.message });
  }
};

export const AdminUpdateBetDone = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_BETDONE_REQUEST });

    const config = { header: { "Content-Type": "application/json" } };

    const { data } = await axios.put(`/api/v1/admin/bet/done`,  config);
    dispatch({ type: ALL_BETDONE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ALL_BETDONE_FAIL,
      payload: error.response.data.message,
    });
  }
};


export const UpdateNotifi = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_NOTIFICATION_REQUEST });

    const config = { header: { "Content-Type": "application/json" } };

    const { data } = await axios.put(`/api/v1/me/notifi`,  config);
    dispatch({ type: ALL_NOTIFICATION_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ALL_NOTIFICATION_FAIL,
      payload: error.response.data.message,
    });
  }
};


export const createSay = (sayData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_SAY_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/user/say`,
      sayData,
      config
    );

    dispatch({
      type: CREATE_SAY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_SAY_FAIL,
      payload: error.response.data.message,
    });
  }
};


export const createShowhistory = (sayData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_SHOWHISTORY_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/admin/showhistory`,
      sayData,
      config
    );

    dispatch({
      type: CREATE_SHOWHISTORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_SHOWHISTORY_FAIL,
      payload: error.response.data.message,
    });
  }
};



export const getAllShowHistory =() => async (dispatch) => {
  try {
    dispatch({ type: GET_SHOWHISTORY_REQUEST });


    const { data } = await axios.get(`/api/v1/user/showhistory`);

    dispatch({
      type: GET_SHOWHISTORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SHOWHISTORY_FAIL,
      payload: error.response.data.message,
    });
  }
};
