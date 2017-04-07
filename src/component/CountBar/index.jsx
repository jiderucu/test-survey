import React from 'react';
import {
  Line
} from'rc-progress';
import './index.css';
 class CountBar extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main_top">
      	   
           <div className="Mar_top">
              <span>提交量</span>
              <span className="Mar_right">浏览量</span>
           </div>
         
         <div className="Mar_content">
            <p>1.你收到哪些奇葩的妇女节礼物</p>
            <p className="content_left">查看详细信息</p>
            <p className="content_top">2.如果公司给你发奇葩的妇女节礼物你会接受吗？</p>
              <p className="content_left">接受，偶尔拿奇葩礼物也挺好玩的</p>
              <p className="content_left content_width"><Line percent="5" strokeWidth="1" strokeColor="#D3D3D3" /></p>

              <p className="content_left">不接受，小心脏受不了，坚决要正经礼物</p>
               <p className="content_left content_width"><Line percent="5" strokeWidth="1" strokeColor="#D3D3D3" /></p>
              <p className="content_left">无所谓，总比什么都没有的好</p>
               <p className="content_left content_width"><Line percent="5" strokeWidth="1" strokeColor="#D3D3D3" /></p>
              <p className="content_top">3.你在朋友圈或者微博中看到别人晒过哪些奇葩的妇女节礼物</p>
              <p className="content_left">毛巾、卫生纸、洗衣液等生活用品</p>
               <p className="content_left content_width"><Line percent="5" strokeWidth="1" strokeColor="#D3D3D3" /></p>
              <p className="content_left">男同事爱的抱抱</p>
               <p className="content_left content_width"><Line percent="5" strokeWidth="1" strokeColor="#D3D3D3" /></p>
              <p className="content_left">鞋垫、袜子</p>
               <p className="content_left content_width"><Line percent="5" strokeWidth="1" strokeColor="#D3D3D3" /></p>
              <p className="content_left">免费的妇科体检一次</p>
               <p className="content_left content_width"><Line percent="5" strokeWidth="1" strokeColor="#D3D3D3" /></p>
              <p className="content_left">没有看到过</p>
               <p className="content_left content_width"><Line percent="5" strokeWidth="1" strokeColor="#D3D3D3" /></p>
              <p className="content_top">4.妇女节你们公司是否有妇女节礼物</p>
              <p className="content_left">有</p>
               <p className="content_left content_width"><Line percent="5" strokeWidth="1" strokeColor="#D3D3D3" /></p>
              <p className="content_left">没有</p>
               <p className="content_left content_width"><Line percent="5" strokeWidth="1" strokeColor="#D3D3D3" /></p>
        </div>
        
      </div>
    );
  }
}
export default CountBar;