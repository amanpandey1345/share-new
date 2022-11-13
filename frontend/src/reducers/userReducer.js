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

  // UPDATE_PROFILE_REQUEST,
  // UPDATE_PROFILE_SUCCESS,
  // UPDATE_PROFILE_RESET,
  // UPDATE_PROFILE_FAIL,

  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  ALL_USERS_FAIL,

  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_RESET,
  UPDATE_PASSWORD_FAIL,

  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,

  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,

  CREATE_BET_REQUEST,
  CREATE_BET_SUCCESS,
  CREATE_BET_FAIL,

  UPDATE_BALANCE_REQUEST,
  UPDATE_BALANCE_SUCCESS,
  UPDATE_BALANCE_RESET,
  UPDATE_BALANCE_FAIL,

  CREATE_DEPOSIT_REQUEST,
  CREATE_DEPOSIT_SUCCESS,
  CREATE_DEPOSIT_FAIL,

  ALL_BET_REQUEST,
  ALL_BET_SUCCESS,
  ALL_BET_FAIL, 

  ALL_BETS_REQUEST,
  ALL_BETS_SUCCESS,
  ALL_BETS_FAIL, 

  CREATE_WITHDRAWAL_REQUEST,
  CREATE_WITHDRAWAL_SUCCESS,
  CREATE_WITHDRAWAL_FAIL,

  ALL_DEPOSIT_REQUEST,
  ALL_DEPOSIT_SUCCESS,
  ALL_DEPOSIT_FAIL,

  ALL_WITHDRAWAL_REQUEST,
  ALL_WITHDRAWAL_SUCCESS,
  ALL_WITHDRAWAL_FAIL,

  ALL_DEPOSITS_REQUEST,
  ALL_DEPOSITS_SUCCESS,
  ALL_DEPOSITS_FAIL,
 
  ALL_WITHDRAWALS_REQUEST,
  ALL_WITHDRAWALS_SUCCESS,
  ALL_WITHDRAWALS_FAIL,


  ALL_NOTIFICATION_REQUEST,
  ALL_NOTIFICATION_SUCCESS,
  ALL_NOTIFICATION_FAIL,
  ALL_NOTIFICATION_RESET,

  UPDATE_DEPOSIT_REQUEST,
  UPDATE_DEPOSIT_SUCCESS,
  UPDATE_DEPOSIT_FAIL,
  UPDATE_DEPOSIT_RESET,

  UPDATE_WITHDRAWAL_REQUEST,
  UPDATE_WITHDRAWAL_SUCCESS,
  UPDATE_WITHDRAWAL_FAIL,
  UPDATE_WITHDRAWAL_RESET,

  UPDATE_ADUSER_REQUEST,
  UPDATE_ADUSER_SUCCESS,
  UPDATE_ADUSER_FAIL,
  UPDATE_ADUSER_RESET,

  UPDATE_SHOWTIME_REQUEST,
  UPDATE_SHOWTIME_SUCCESS,
  UPDATE_SHOWTIME_FAIL,
  UPDATE_SHOWTIME_RESET,


  UPDATE_WINSET_REQUEST,
  UPDATE_WINSET_SUCCESS,
  UPDATE_WINSET_FAIL,
  UPDATE_WINSET_RESET,

  ALL_SHOWTIME_REQUEST,
  ALL_SHOWTIME_SUCCESS,
  ALL_SHOWTIME_FAIL,

  ALL_BETDONE_REQUEST,
  ALL_BETDONE_SUCCESS,
  ALL_BETDONE_FAIL,
  ALL_BETDONE_RESET,

  CREATE_SHOWHISTORY_REQUEST,
  CREATE_SHOWHISTORY_SUCCESS,
  CREATE_SHOWHISTORY_FAIL,

  CREATE_SAY_REQUEST,
  CREATE_SAY_SUCCESS,
  CREATE_SAY_FAIL,

  GET_SAY_REQUEST,
  GET_SAY_SUCCESS,
  GET_SAY_FAIL,

  GET_SHOWHISTORY_FAIL,
  GET_SHOWHISTORY_SUCCESS,
  GET_SHOWHISTORY_REQUEST,


  CLEAR_ERRORS,
} from "../constants/userConstants";

export const userReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_USER_REQUEST:
    case LOAD_USER_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case LOGIN_SUCCESS:
    case REGISTER_USER_SUCCESS:
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGIN_FAIL:
    case REGISTER_USER_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    case LOAD_USER_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
        // error: action.payload,
      };
    case LOGOUT_SUCCESS:
      return {
        loading: true,
        isAuthenticated: false,
        user: null,
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        error:action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const profileReducer = (state = {}, action) => {
  switch (action.type) {

    case UPDATE_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };



    case UPDATE_PASSWORD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };


    case UPDATE_PASSWORD_RESET:

      return {
        ...state,
        isUpdated: false,
      };



    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const forgotPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST:
    case RESET_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };

    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload,
      };

    case FORGOT_PASSWORD_FAIL:
    case RESET_PASSWORD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};


export const betReducer = (state = { bet: [] }, action) => {
  switch (action.type) {
    case CREATE_BET_REQUEST:

      return {
        loading: true,
        bets: [],
      };
    case CREATE_BET_SUCCESS:

      return {
        loading: false,
        bet: action.payload,
      };


    case CREATE_BET_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};


export const getbetReducer = (state = { getbet: [] }, action) => {
  switch (action.type) {
    case ALL_BET_REQUEST:

      return {
        loading: true,
        getbet: [],
      };

    case ALL_BET_SUCCESS:
      return {
        loading: false,
        getbet: action.payload,
      };
    case ALL_BET_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};


export const userBalanceReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_BALANCE_REQUEST:
      return {
        ...state,
        loading: true,
      };


    case UPDATE_BALANCE_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,

      };

    case UPDATE_BALANCE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,

      };

    case UPDATE_BALANCE_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};


export const depositReducer = (state = { deposit: [] }, action) => {
  switch (action.type) {
    case CREATE_DEPOSIT_REQUEST
    :

      return {
        loading: true,
        deposit: [],
      };
    case CREATE_DEPOSIT_SUCCESS:

      return {
        loading: false,
        deposit: action.payload,
      };


    case CREATE_DEPOSIT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const withdrawalReducer = (state = { withdrawal: [] }, action) => {
  switch (action.type) {
    case CREATE_WITHDRAWAL_REQUEST:

      return {
        loading: true,
        withdrawal: [],
      };
    case CREATE_WITHDRAWAL_SUCCESS:

      return {
        loading: false,
        withdrawal: action.payload,
      };


    case CREATE_WITHDRAWAL_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const getdepositReducer = (state = { getdeposit: [] }, action) => {
  switch (action.type) {
    case ALL_DEPOSIT_REQUEST:

      return {
        Dloading: true,
        getdeposit: [],
      };

    case ALL_DEPOSIT_SUCCESS:
      return {
        Dloading: false,
        getdeposit: action.payload,
      };
    case ALL_DEPOSIT_FAIL:
      return {
        Dloading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};


export const getwithdrawalReducer = (state = { getwithdrawal: [] }, action) => {
  switch (action.type) {
    case ALL_WITHDRAWAL_REQUEST:

      return {
        Wloading: true,
        getwithdrawal: [],
      };

    case ALL_WITHDRAWAL_SUCCESS:
      return {
        Wloading: false,
        getwithdrawal: action.payload,
      };
    case ALL_WITHDRAWAL_FAIL:
      return {
        Wloading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};


export const allUsersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case ALL_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case ALL_USERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};


export const allBetsReducer = (state = { bets: [] }, action) => {
  switch (action.type) {
    case ALL_BETS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_BETS_SUCCESS:
      return {
        ...state,
        loading: false,
        bets: action.payload,
      };

    case ALL_BETS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};


export const allWithdrawalsReducer = (state = { withdrawals: [] }, action) => {
  switch (action.type) {
    case ALL_WITHDRAWALS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_WITHDRAWALS_SUCCESS:
      return {
        ...state,
        loading: false,
        withdrawals: action.payload,
      };

    case ALL_WITHDRAWALS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};


export const allDepositsReducer = (state = { deposits: [] }, action) => {
  switch (action.type) {
    case ALL_DEPOSITS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_DEPOSITS_SUCCESS:
      return {
        ...state,
        loading: false,
        deposits: action.payload,
      };

    case ALL_DEPOSITS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const AdminUpdateWithdrawalReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_WITHDRAWAL_REQUEST:
      return {
        ...state,
        loading: true,
      };


    case UPDATE_WITHDRAWAL_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,

      };

    case UPDATE_WITHDRAWAL_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,

      };

    case UPDATE_WITHDRAWAL_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};


export const AdminUpdateDepositReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_DEPOSIT_REQUEST:
      return {
        ...state,
        loading: true,
      };


    case UPDATE_DEPOSIT_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,

      };

    case UPDATE_DEPOSIT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,

      };

    case UPDATE_DEPOSIT_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};


export const AdminUpdateUserReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_ADUSER_REQUEST:
      return {
        ...state,
        loading: true,
      };


    case UPDATE_ADUSER_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,

      };

    case UPDATE_ADUSER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,

      };

    case UPDATE_ADUSER_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};


export const UpdateNotifiReducer = (state = {}, action) => {
  switch (action.type) {
    case ALL_NOTIFICATION_REQUEST:
      return {
        ...state,
        loading: true,
      };


    case ALL_NOTIFICATION_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,

      };

    case ALL_NOTIFICATION_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,

      };

    case ALL_NOTIFICATION_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};


export const AdminUpdateShowTimeReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_SHOWTIME_REQUEST:
      return {
        ...state,
        loading: true,
      };


    case UPDATE_SHOWTIME_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,

      };

    case UPDATE_SHOWTIME_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,

      };

    case UPDATE_SHOWTIME_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};



export const AdminUpdateWinsetReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_WINSET_REQUEST:
      return {
        ...state,
        loading: true,
      };


    case UPDATE_WINSET_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,

      };

    case UPDATE_WINSET_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,

      };

    case UPDATE_WINSET_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};


export const GetShowTimeReducer = (state = { showtime: [] }, action) => {
  switch (action.type) {
    case ALL_SHOWTIME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_SHOWTIME_SUCCESS:
      return {
        ...state,
        loading: false,
        showtime: action.payload,
      };

    case ALL_SHOWTIME_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const AdminUpdateBetReducer = (state = {}, action) => {
  switch (action.type) {
    case ALL_BETDONE_REQUEST:
      return {
        ...state,
        loading: true,
      };


    case ALL_BETDONE_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated1: action.payload,

      };

    case ALL_BETDONE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,

      };

    case ALL_BETDONE_RESET:
      return {
        ...state,
        isUpdated1: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};


export const AdminShowhistoryReducer = (state = { showhistory: [] }, action) => {
  switch (action.type) {
    case CREATE_SHOWHISTORY_REQUEST
    :

      return {
        loading: true,
        showhistory: [],
      };
    case CREATE_SHOWHISTORY_SUCCESS:

      return {
        loading: false,
        showhistory: action.payload,
      };


    case CREATE_SHOWHISTORY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};


export const AdminSayReducer = (state = { say: [] }, action) => {
  switch (action.type) {
    case CREATE_SAY_REQUEST
    :

      return {
        loading: true,
        say: [],
      };
    case CREATE_SAY_SUCCESS:

      return {
        loading: false,
        showhistory: action.payload,
      };


    case CREATE_SAY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const getShowhistoryReducer = (state = { showhistory: [] }, action) => {
  switch (action.type) {
    case GET_SHOWHISTORY_REQUEST:

      return {
        loading: true,
        showhistory: [],
      };

    case GET_SHOWHISTORY_SUCCESS:
      return {
        loading: false,
        showhistory: action.payload,
      };
    case GET_SHOWHISTORY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};


export const getSayReducer = (state = { say: [] }, action) => {
  switch (action.type) {
    case GET_SAY_REQUEST:

      return {
        loading: true,
        say: [],
      };

    case GET_SAY_SUCCESS:
      return {
        loading: false,
        say: action.payload,
      };
    case GET_SAY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
