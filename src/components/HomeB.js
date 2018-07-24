import React, { Component } from 'react';
import {Prompt} from 'react-router-dom';

class HomeB extends Component {
    constructor(){
        super()
        this.state={
            enter:"请输入内容"
        }
    }
    onHandleChange(event){
       this.setState({
         enter : event.target.value
       })
       console.log("dd:",event.target.value)
    }
    onHandleClick(){
        this.setState({
            enter : "请输入内容"
          })
    }
    render() {
        return (
            <div className="HomeB">
                <h1>HomeB</h1>
                <Prompt message="残忍离开？"/>
                <label>
                   <input type="text" defaultValue={this.state.enter} value={this.state.enter} onChange={(event)=>this.onHandleChange(event)}/>
                   <button onClick={()=>this.onHandleClick()}>重置</button>
                </label>
                
                <p>{this.state.enter}</p>
            </div>
        )}
}
export default HomeB;