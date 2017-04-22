import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router'
import styles from './app.less';
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

function App({ dispatch, children, loading, location, app }) {

  const menuStyle = {
    width: 70,
    height: 60,
    lineHeight: '70px',
    textAlign: 'center',
    marginLeft: -8,
  }

  const newMenu = (
    <Menu>
      <Menu.Item>
        <Link to="/calendar/new">新建行程</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/calendar/new">新建笔记</Link>
      </Menu.Item>
    </Menu>
  )

  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.logo}></div>
        <div className={styles.headTitle}>老表写笔记</div>
        <Menu className={styles.headerMenu} mode="horizontal">
          <SubMenu title={<span><Icon type="user" />{'user'} </span>} >
            <Menu.Item>
              <a href="/login">注销</a>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Header>

      <Layout style={{ height: '100vh' }}>
        <Sider style={{ overflow: 'auto', background: '#41464B' }} width={60}>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['3']} style={{ width: 60, background: '#41464B' }}>
            <Menu.Item key="2" style={menuStyle}>
              <Link to="/calendar">
                <Icon type="calendar" className={styles.icon} />
              </Link>
            </Menu.Item>

            <Menu.Item key="3" style={menuStyle}>
              <Link to="/note">
                <Icon type="book" className={styles.icon} />
              </Link>
            </Menu.Item>

            <Menu.Item key="4" style={menuStyle}>
              <Link to="/del">
                <Icon type="delete" className={styles.icon} />
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout>
          <Content style={{ background: '#fff' }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default connect((state) => {
  return {
    app: state.app,
    loading: state.loading.models.app
  }
})(App);

