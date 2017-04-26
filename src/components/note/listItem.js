import React from 'react';
import styles from './note.css';
import {Icon} from 'antd';

class listItem extends React.Component {
  state = {
    hover: false
  }

  handleEnter(){
    this.setState({
      hover: true
    })
  }

  handleLeave(){
    this.setState({
      hover: false
    })
  }

  remove(e){
    e.stopPropagation();

    const { item, remove } = this.props;
    
    remove(item.id)
  }

  render() {
    const { item, currentItem, setCurrent, remove} = this.props;
    const time = item.modify_time ? item.modify_time : item.create_time;
    const isActive = currentItem.id == item.id


    return (
      <li
        key={'notes' + item.id}
        className={isActive ? styles.active : ''}
        onMouseEnter={this.handleEnter.bind(this)}
        onMouseLeave={this.handleLeave.bind(this)}
        onClick={setCurrent.bind(null, item)}
      >
        <div className={styles.listHeader}>
          <p>{item.title}</p>
        </div>
        <div className={styles.date}>{time.substring(0, 10)}</div>
        {
          this.state.hover ? 
            <Icon className={styles.del} type="delete" onClick={this.remove.bind(this)}/>
            :null
        }
      </li>
    )
  }
}

export default listItem;