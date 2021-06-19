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
// const thunk = (payload) => async (dispatch) => {

//   }

export default {
  defaultAction,
}