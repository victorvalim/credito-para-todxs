/* eslint-disable arrow-body-style */
/* eslint-disable indent */
/* eslint-disable semi */
/* eslint-disable eol-last */
// eslint-disable-next-line no-unused-vars
import axios from 'axios';

const defaultAction = (payload) => {
  return {
      type: 'DEFAULT',
      payload,
  }
}

const loanValue = (payload) => {
  return {
      type: 'LOAN_VALUE',
      payload,
  }
}

const backToLoan = (payload) => {
  return {
      type: 'BACK_TO_LOAN',
      payload,
  }
}

const installmentsValue = (payload1, payload2, payload3) => {
  return {
      type: 'INSTALLMENTS_VALUE',
      payload1,
      payload2,
      payload3,
  }
}
const willBeHired = (payload) => {
  return {
      type: 'WILL_BE_HIRED',
      payload,
  }
}
const otherValue = (payload) => {
  return {
      type: 'OTHER_VALUE',
      payload,
  }
}

const showOtherContainer = (payload) => {
  return {
      type: 'SHOW_OTHER_CONTAINER',
      payload,
  }
}

const resetGlobalState = () => {
  return {
      type: 'RESET_GLOBAL_STATE',
  }
}
// const thunk = (payload) => async (dispatch) => {

//   }

export default {
  defaultAction,
  loanValue,
  backToLoan,
  installmentsValue,
  willBeHired,
  showOtherContainer,
  otherValue,
  resetGlobalState,
}