import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChildrenToParent  from './ChildrenToParent'

class Home extends Component {
    constructor(props){
      super(props);
      this.state = {
          age:props.age
      }
    }
    onMakeOlder(){        
        this.setState({
            age:this.state.age+3
        })
        console.log("age:",this.age);
    }
    eventClick(data){
        console.log("children to parent:",data)
    }
    render() {
      return (
            <div>
                <h1>Home</h1>
                <div>我的名字是：{this.props.name}</div> 
                <div>我的 state 年龄是：{this.state.age}</div> 
                 {this.props.children}
                 <button onClick={this.onMakeOlder.bind(this)}>age++</button>

                 <ChildrenToParent events={this.eventClick} />
            </div>
      )
    }
}
Home.propTypes ={
  name:PropTypes.string,
  age:PropTypes.number
}
export default Home