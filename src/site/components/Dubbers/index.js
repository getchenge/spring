import React, { Component } from 'react';
import styles from './style.scss';

class Dubbers extends Component {
  render() {
    const { list } = this.props;
    let dubbers = '';

    list && list.length > 0 && (dubbers = list.map((item) => {
      const avatarStyle = {
        'backgroundImage': `url(${item.avatar})`
      };
      return (
        <li className={styles.item}>
          <div className={styles.avatar} style={avatarStyle}>
            <div className={styles['avatar-name']}>{item.name}</div>
          </div>
          {/* <img className={styles.avatar} src={item.avatar} alt="" /> */}
          <div className={styles.text}>
            <div className={styles.name}>{item.name}</div>
            <pre className={styles.desc}>
              {item.description}
            </pre>
          </div>
        </li>
      );
    }));
    return (
      <div className={styles.wraper}>
        <ul className={styles.list}>
          {dubbers}
        </ul>
      </div>
    );
  }
}

// 香港著名配音导演/演员 清泉配音工作室创始人
// 香港国语著名配音演员，声音浑厚略有鼻音，尾音带气声，声音少修饰，语调平实 而有力。曾在许多TVB剧集，香港电影中做国语配音，亦在众多国产电视剧，广告和译制片中成功配音。
// 香港星空卫视顶级台声
// 成龙、刘德华、梁朝伟御用配音
// 成龙：《特务迷城》小北、《新警察故事》陈国荣、《宝贝计划》人字拖、《功夫之王》僧人
//  张国荣：《东邪西毒》西毒、《枪王》Rick
//  梁朝伟：《东京攻略》阿林
//  刘德华：《门徒》阿坤、《见龙御甲》赵子龙

// 音频工程师、填词人、
//       歌手、配音导演
//       上海清泉录音工作室  音频总工程师
// 暴雪中国 合作游戏语音设计师
// 《星银岛》央视版 插曲《我还是我》 中文填词、演唱
// 《石中剑》中文版 全片所有歌曲中文填词、主题曲演唱、声乐指导
// 《小美人鱼3》中文版 全片所有歌曲中文填词、声乐指导
// 《飞机总动员》中文版 插曲《爱情机器》中文填词、声乐指导
//  配音导演作品：
//  动画片《百变星球历险记》
//  动画片《莉莉的梦幻湾》
//  动画片《豆小鸭》第一季
//  中文填词、声乐指导、部分歌曲演唱
//  爱探险的朵拉
//  暴雪《魔兽世界4.0-7.0》国服 游戏内全语音效果制作
// 暴雪《星际争霸2 自由之翼》国服 游戏内全语音效果制作
// 暴雪《星际争霸2 虫群之心》国服 游戏内全语音效果制作
// 暴雪《星际争霸2 虚空之遗》国服 游戏内全语音效果制作
// 暴雪《暗黑破坏神3》国服 游戏内全语音效果制作
// 暴雪《炉石传说》国服 游戏内全语音效果制作
// 暴雪《风暴英雄》国服 游戏内全语音效果制作
// 米哈游《崩坏3》国服 游戏内全语音 录音、效果制作
// 网番动画片混音、音效：
// 《从前有座灵剑山》第一季 中文版 混音师
// 《从前有座灵剑山》第二季 中文版 混音师
// 《银之守墓人》中文版 混音师
// 《中国惊奇先生》混音师、音效师
// 《王牌御史》混音师、音效师
// 《妖怪名单》混音师、音效师
// 《那年那兔那些事儿》第一季 混音师、音效师
// 《雏蜂》中文版、日文版 混音师、音效师
// 《撸时代》第一季 混音师、音效师
// 《凸变英雄》中文版 混音师
// 《一课一练》中文版 混音师
// 《灵契》中文版 混音师、音效师
// 《馒头日记》混音师、音效师
// 《我叫白小飞》混音师、音效师
// 《端脑》混音师、音效师







export default Dubbers;
