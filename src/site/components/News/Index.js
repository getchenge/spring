import React, { Component } from 'react';
import styles from './style.scss';
import { List } from 'antd';
import Divider from 'antd/lib/divider';
const { Item } = List;

class News extends Component {
  render() {
    const { list } = this.props;
    return (
      <div className={styles['news-wraper']} id="news">
        <div className={styles['news-content']}>
          <div className={styles['news-label']}>最新动态</div>
          <List
            className={styles.news}
            dataSource={list}
            itemLayout="vertical"
            renderItem={(item) => (
              <Item
                key={item.title}
                extra={<img width={120} height={80} alt="cover" src={item.thumb} />}
              >
                <a href={item.link} target="_blank">
                  <List.Item.Meta
                    title={item.title}
                    description={item.description}
                  />
                </a>
              </Item>
            )}
          ></List>
        </div>
      </div>
    );
  }
}
export default News;
