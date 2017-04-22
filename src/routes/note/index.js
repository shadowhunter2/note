import React from 'react';
import { connect } from 'dva';
import {Link} from 'dva/router'
import { Table, Pagination, Popconfirm, Icon } from 'antd';
import styles from './index.css';

function RouterComponent({ dispatch, location, model, loading }) {
  function deleteHandler(id) {
    console.warn(`TODO: ${id}`);
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="">{text}</a>,
    },

  ];

  return (
    <div className={styles.normal}>
      <div className={styles.header}>
        <span>笔记列表</span>
        <em><Link to="/note/new"><Icon type="plus-circle-o" /></Link></em>
      </div>
      <ul>
        <li className={styles.active}>
          <div className={styles.listHeader}>
            <p>小标题</p>
          </div>
          <div className={styles.date}>创建时间：2017-1-10</div>
        </li>

        <li >
          <div className={styles.listHeader}>
            <p>小标题</p>
          </div>
          <div className={styles.date}>创建时间：2017-1-10</div>
        </li>

        <li >
          <div className={styles.listHeader}>
            <p>小标题</p>
          </div>
          <div className={styles.date}>创建时间：2017-1-10</div>
        </li>
        <li >
          <div className={styles.listHeader}>
            <p>小标题</p>
          </div>
          <div className={styles.date}>创建时间：2017-1-10</div>
        </li>
        <li >
          <div className={styles.listHeader}>
            <p>小标题</p>
          </div>
          <div className={styles.date}>创建时间：2017-1-10</div>
        </li>
        <li className={styles.active}>
          <div className={styles.listHeader}>
            <p>小标题</p>
          </div>
          <div className={styles.date}>创建时间：2017-1-10</div>
        </li>
       

      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    model: state.note,
    loading: state.loading.models.note
  }
}

export default connect(mapStateToProps)(RouterComponent);