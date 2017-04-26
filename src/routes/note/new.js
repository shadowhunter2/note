import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router'
import { Layout, Menu, Icon, Button } from 'antd';
const { Header, Sider } = Layout;
import styles from './index.css';

import ContentBox from '../../components/note/content';

function RouterComponent({ dispatch, location, model, loading }) {

  const contentProps = {
    btnName:'新增',
    fnSave(data){
      dispatch({
        type: 'note/insert',
        payload: data
      })
    }
  }

  return (
    <Layout style={{ height: '100vh' }}>
      <Layout>
        <ContentBox {...contentProps}/>
      </Layout>
    </Layout>
  );
}

function mapStateToProps(state) {
  return {
    model: state.note_new,
    loading: state.loading.models.note_new
  }
}

export default connect(mapStateToProps)(RouterComponent);