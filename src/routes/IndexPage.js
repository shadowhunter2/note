import React from 'react';
import { connect } from 'dva';
import * as userService from '../services/user';

class IndexPage extends React.Component{
  state = {
    user: {name: ''}
  }

  componentDidMount(){
    (async () => {
      var { data } = await userService.getUser();

      this.setState({
        user: data
      })
    })();
  }

  render(){
    return (
      <div >
        <h1 >Yay! Welcome to dva {this.state.user.name} !</h1>
        <div />
        <ul >
          <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
          <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
        </ul>
      </div>
    )
  }
}


export default connect()(IndexPage);
