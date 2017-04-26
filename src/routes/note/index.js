import React from 'react';
import { connect } from 'dva';
import {Link} from 'dva/router'
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import styles from './index.css';

import List from '../../components/note/list';
import ContentBox from '../../components/note/content';

function RouterComponent({ dispatch, location, model, loading }) {

  const { list, currentItem, currentItemDetail} = model;

  const contentProps = {
    btnName: '保存',
    currentItem: currentItem.id ? currentItem : list[0],
    currentItemDetail: currentItemDetail,
    setCurrent(item) {
      dispatch({
        type: 'note/queryDetail',
        payload: item
      })
    },
    fnSave(data, currentItemDetail){
      dispatch({
        type: 'note/update',
        payload: data,
        currentItemDetail: currentItemDetail
      })
    }
  }

  const listProps = {
    list: list || [],
    currentItem: currentItem.id ? currentItem : list[0],
    setCurrent(item){
      dispatch({
        type: 'note/queryDetail',
        payload: item
      })
    },
    remove(id){
      dispatch({
        type: 'note/remove',
        id
      })
    }
  }

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider width={240} style={{overflow: 'auto'}}>
        <List {...listProps}/>
      </Sider>
      <Layout>
        {
          currentItem.id ?
            <ContentBox {...contentProps} />
            :null
        }
      </Layout>
    </Layout>
  );
}

function mapStateToProps(state) {
  return {
    model: state.note,
    loading: state.loading.models.note
  }
}

export default connect(mapStateToProps)(RouterComponent);