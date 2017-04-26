import React from 'react';
import styles from './note.css';
import { Layout, Menu, Icon, Button, Input } from 'antd';
import LzEditor from 'react-lz-editor'
import _ from 'lodash';
const { Header, Content, Footer, Sider } = Layout;

class contentBox extends React.Component {
  constructor(props) {
    super(props);
    const currentItemDetail = this.props.currentItemDetail || {};
    
    this.state = {
      content: currentItemDetail.title,
      title: currentItemDetail.content
    }
    this.receiveHtml = this.receiveHtml.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.fnSave = this.fnSave.bind(this);
  }

  receiveHtml(content) {
    this.setState({
      content: content
    })
  }

  handleTitleChange(e){
    this.setState({
      title: e.target.value
    })
  }

  fnSave(){
    const currentItemDetail = this.props.currentItemDetail || {};
    const { fnSave } = this.props;
    _.merge(currentItemDetail, this.state)
    fnSave(_.merge({}, this.state, { id: currentItemDetail.id }), currentItemDetail )
  }

  componentDidMount(){
    const { currentItem, currentItemDetail, setCurrent } = this.props;
    if (currentItem && currentItem.id && !currentItemDetail.id) {
      setCurrent(currentItem);
    } 
  }

  componentWillReceiveProps(){
    const {currentItemDetail={}} = this.props || {};
    this.setState({
      title: currentItemDetail.title,
      content: currentItemDetail.content
    })
  }

  render() {
    return (
      <Layout style={{ height: '100vh', background: '#fff' }}>
        <div className={styles.contentHeader}>
          <div>
            <Button onClick={this.fnSave}>{this.props.btnName}</Button>
          </div>

          <Input placeholder="标题" value={this.state.title} onChange={this.handleTitleChange}/>
          
        </div>
        <LzEditor
          color={false}
          image={false}
          video={false}
          urls={false}
          active={true}
          importContent={this.state.content}
          cbReceiver={this.receiveHtml}/>
      </Layout>
    )
  }
}

export default contentBox;