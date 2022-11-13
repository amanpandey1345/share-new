import { combineReducers, applyMiddleware, createStore } from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  betReducer,
  forgotPasswordReducer,
  getbetReducer,
  profileReducer,
  userBalanceReducer,
  userReducer,
  depositReducer,
  getdepositReducer,
  withdrawalReducer,
  getwithdrawalReducer,   
  allUsersReducer,
  allBetsReducer,
  allDepositsReducer,
  allWithdrawalsReducer,
  AdminUpdateDepositReducer,
  AdminUpdateWithdrawalReducer,
  AdminUpdateUserReducer,
  UpdateNotifiReducer,
  AdminUpdateShowTimeReducer,
  AdminUpdateWinsetReducer,
  GetShowTimeReducer,
  AdminUpdateBetReducer,
  AdminShowhistoryReducer,
  AdminSayReducer,
  getShowhistoryReducer,
  getSayReducer,
} from "./reducers/userReducer";

const reducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
  forgotPassword: forgotPasswordReducer,
  bets: betReducer,
  getbets: getbetReducer,
  deposits: depositReducer,
  getdeposits: getdepositReducer,
  withdrawals: withdrawalReducer,
  getwithdrawals: getwithdrawalReducer,
  userbalance: userBalanceReducer,
  AdminUsers:allUsersReducer,
  AdminBets:allBetsReducer,
  AdminDeposits:allDepositsReducer,
  AdminWithdrawals:allWithdrawalsReducer,
  AdminUpdateDeposite:AdminUpdateDepositReducer,
  AdminUpdateWithdrawal:AdminUpdateWithdrawalReducer,
  AdminUpdateUser:AdminUpdateUserReducer,
  UpdateNotification:UpdateNotifiReducer,
  UpdateShowTime:AdminUpdateShowTimeReducer,
  UpdateWinset:AdminUpdateWinsetReducer,
  GetShowTime:GetShowTimeReducer,
  AdminUpdateBet:AdminUpdateBetReducer,
  AdminShowhistory:AdminShowhistoryReducer,
  Say:AdminSayReducer,
  ShowHistorys:getShowhistoryReducer,
  Says:getSayReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
