import React from 'react';
import "./index.css";
import Switch from 'react-switchery';
 class SingleBar extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state={
      display:true
    }
    this.setOnClick = this.setOnClick.bind(this);
  };

 /* onChange(value){
  	console.log(value);
  }*/
   setOnClick(){
    this.setState({display:!this.state.display})
  }
  render() {
    return (
      <div>
         <div className="top_text">
         	标题
         </div>	
          <p className="choice">选项一</p>    
          <p className="choice">选项二</p>    
             <div className="hide_text" style={{display:this.state.display==true?"none":"block"}}>
               <input type="text" placeholder="选项内容" className="boder"/>
             </div>
             <div className="increase" onClick={this.setOnClick}>
             	增加选项
             </div>

             <div className="tet_foot">
             	<span>允许答题者选择其他</span>
             </div>
             <div className="tet_foot">
             	<span>设为必答题</span>
             </div>



             <div className="footBar">
             	确认
             </div>
      </div>
    );
  }
}
export default SingleBar;