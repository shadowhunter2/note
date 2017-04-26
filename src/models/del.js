import * as appService from '../services/app';

export default {
  namespace: 'del',
  state: {
    loginUser: null
  },

  reducers: {
    setUser(state, { payload }) {
      return { ...state, loginUser: payload }
    }
  },

  effects: {
    *getUser({ payload }, { call, put }) {
      const { data: user } = yield call(appService.getUser)

      yield put({
        type: 'setUser',
        payload: user
      })
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {
      dispatch({
        type: 'getUser'
      })
    }
  },
}
