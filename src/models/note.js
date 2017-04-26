import * as noteService from '../services/note';
import { message } from 'antd';
import {fns } from '../utils/';

export default {
  namespace: 'note',
  state: {
    list:[],
    currentItem: {},
    currentItemDetail: {}
  },

  reducers: {
    querySuccess(state, {list, currentItem}){
      return {...state, list, currentItem}
    },

    setCurrent(state, { currentItem, currentItemDetail }){
      return { ...state, currentItem, currentItemDetail}
    },

    setCurrentDetail(state, { currentItemDetail }) {
      return { ...state, currentItemDetail }
    },
  },

  effects: {
    *insert({payload}, {call, put}){
      const data = yield call(noteService.add, payload);

      if (data.rt) {
        message.success('新增笔记成功');
        fns.redirect('note')
      }
      else {
        message.error(data.msg)
      }
    },
    *update({ payload, currentItemDetail }, { call, put }) {
      const data = yield call(noteService.update, payload);

      if (data.rt) {
        message.success('保存笔记成功');
        yield put({
          type: 'setCurrentDetail',
          currentItemDetail: currentItemDetail
        })

        fns.redirect('note')
      }
      else {
        message.error(data.msg)
      }
    },

    *query({payload}, {call, put}){
      const data = yield call(noteService.query, payload);

      if(data.rt){
        yield put({
          type: 'querySuccess',
          list: data.list || [],
          currentItem: data.list[0] || {}
        })
      }
    },

    *queryDetail({ payload}, {call, put}){
      const data = yield call(noteService.queryDetail, {id:payload.id});

      if(data.rt){
        yield put({
          type: 'setCurrent',
          currentItem: payload,
          currentItemDetail: data.item
        })
      }
    },

    *remove({id},{call,put}){
      const data = yield call(noteService.remove, {id});

      if(data.rt){
        message.success('删除成功');
        fns.redirect('note')
      }
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen( ({ pathname, query}) => {
        if(pathname === '/note/new'){
          
        }

        if(pathname === '/note'){
          dispatch({
            type: 'query'
          })
        }
      })
    }
  },
}
