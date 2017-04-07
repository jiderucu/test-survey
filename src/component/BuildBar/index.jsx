import React from 'react';
import'./index.css';
import {
  Link
}from 'react-router';
 class BuildBar extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      	   <div className="head_pic">
              图片 
           </div>
            <div className="content_box">
               <p className="r_content">饭堂菜式投票</p>   
               <p>欢迎参与食堂菜式投票，您的悬着将决定食堂菜式的供应，谢谢参与！</p>
            </div>


            <div className="all_content">
              <p>选择你最爱吃的荤菜</p>
              <p><input type="checkbox" />荷叶蒸鸡</p>
              <p><input type="checkbox" />烧鹅</p> 
              <p><input type="checkbox" />红烧排骨</p> 
              <p><input type="checkbox" />红烧肉</p> 
              <p><input type="checkbox" />肉沫蒸蛋</p> 
              <p><input type="checkbox" />清蒸排骨</p> 
              <p><input type="checkbox" />盐水鸡</p> 
              <p><input type="checkbox" />烤鸡翅</p>
              <p><input type="checkbox" />咸蛋肉饼</p>  
              <p>选择你最爱吃的点心</p>
              <p><input type="checkbox" />小笼包</p>
              <p><input type="checkbox" />荷包蛋</p>
              <p><input type="checkbox" />面包</p>
              <p><input type="checkbox" />煎饼</p>
              <p><input type="checkbox" />春卷</p>
              <p><input type="checkbox" />马蹄糕</p>
              <p><input type="checkbox" />玉米饼</p>
              <p><input type="checkbox" />汤云吞</p>
              <p><input type="checkbox" />油条</p>
            </div>

                   <div className="content_foot"> 
                    <Link to="ballotPage">确认提交</Link>
                   </div>
      </div>
    );
  }
}
export default BuildBar;