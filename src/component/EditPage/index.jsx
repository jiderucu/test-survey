import React from 'react';
import './index.css';
import{
  Link
}from 'react-router';
import{
  hashHistory
} from 'react-router';
class EditPage extends React.Component {
  static propTypes = {
    name: React.PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state={
      display:false
    }
    this.state={
      list:[
      {
        path:'/',
        val:'请选择'
      },
    {
      path:'/singlePage',
      val:'单选题'
    },
    {
      path:'/multiplePage',
      val:'多选题'
    },
    {
      path:'/questionPage',
      val:'填空题'
    },
    {
      path:'/essayPage',
      val:'问答题'
    }
    ]
  }
    this.setOnClick = this.setOnClick.bind(this);
  } 
  setOnClick(){
    this.setState({display:!this.state.display})
  }
  handleChange(e){
    let linkPath = e.target.value;
    hashHistory.push(linkPath);
  }
  render() {
    const { list } = this.state;
    return (
      <div>
      	     <div className="headTop">
      	    	<img src="" alt=""/>图片
      	     </div>   
            	<div className="headTab">
            	       <span>你收到过那些奇葩礼物？</span>
            	</div>
             	<div className="headTab">
                    	<span>如果公司给你发的奇葩的妇女节礼物..</span>
                </div>
            	<div className="headTab">
            	       <span>你在朋友圈或者微博看到别人晒</span>
            	</div>
            	<div className="headTab">
                     	<span>妇女节你们公司是否有妇女节礼物</span>
            	</div>
          

                
                <div className="headText" onClick={this.setOnClick} >
                	 增加题目
                </div>
                 
                 <select style={{display:this.state.display==false?"none":"block"}} onChange={this.handleChange} >
                      {
                        list.map((item,index)=> <option key={index} value={item.path}>{item.val}</option>)
                      }
                     </select>
                

                <div className="headFoot">
                	<input type="text"  placeholder="这里可以添加底部描述"/>
                </div>


                <div>
                	 <div className="footContent">高级设置</div>
                	 <div className="footContent">发布</div>
                </div>
      </div>
    );
  }
}
export default EditPage; 