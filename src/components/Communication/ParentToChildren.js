import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChildrenToParent  from './ChildrenToParent'
import ShowResult from './ShowResult'

class ParentToChildren extends Component {
    constructor(props){
      super(props);
      this.state = {
          age:props.age,
          showValue:"www.baidu.com"
      }
    }

    onMakeOlder(){        
        this.setState({
            age : this.state.age+3
        })
        console.log("age:",this.state.age);
    }
    eventClick(data){
      this.setState({
        showValue : data
      })
        console.log("children to parent:",data)
    }
    render() {
        let ULL=null;
        if(this.props.user){
             ULL=(<ul>
                   {this.props.user.Hobbies.map((hobby,index)=>{
                       return <li key={index}>{hobby}</li>
                    })}
                </ul>)
        }
      return (
            <div>
                <h2>ParentToChildren</h2>
                <div>我的名字是：{this.props.name}</div> 
                <div>我的 state 年龄是：{this.state.age}</div> 
                 {this.props.children}
                 <button onClick={this.onMakeOlder.bind(this)}>age++</button>

                 <ChildrenToParent events={this.eventClick.bind(this)} />
                 <ShowResult showValue={this.state.showValue} />
                 {ULL}
            </div>
      )
    }
}
ParentToChildren.propTypes ={
  name:PropTypes.string,
  age:PropTypes.number,
  user:PropTypes.object
}
export default ParentToChildren