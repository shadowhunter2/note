import React from 'react';
import { Link } from 'dva/router'
import { Popconfirm, Icon } from 'antd';
import styles from './note.css';
import ListItem from  './listItem'

function List(props) {

  const { list, currentItem, setCurrent, remove} = props;

  return (
    <div className={styles.normal} style={{ overflow: 'auto' }}>
      <div className={styles.header}>
        <span>笔记列表</span>
        <em><Link to="/note/new"><Icon type="plus-circle-o" /></Link></em>
      </div>
      <ul>
        {
          list.map((item, index) => {
            return (
              <ListItem 
                key={'item'+ index}
                remove={remove}
                currentItem={currentItem}
                setCurrent={setCurrent}
                item={item} />
            )
          })
        }
      </ul>
    </div>
  );
}

export default List;