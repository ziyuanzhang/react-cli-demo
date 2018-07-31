import React,{ Component }  from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { baseAPI } from '../../utills/RecordsAPI';


class RecordsItem extends Component{
  constructor(props){
    super(props);
    this.state={
      edit:false
    }
  }
  handleToggle(){
    this.setState({
      edit:!this.state.edit
    })
  }
  handleUpdate(){
    console.log("updateID:",this.props.record.id)
    const data={
      date:this.refs.date.value,
      title:this.refs.title.value,
      amount:this.refs.amount.value
    }
    console.log("updateData:",data);
    axios.put(`${baseAPI}/api/records/${this.props.record.id}`,data)
    .then(res=>{
        console.log('updateRes:',res);  
        this.props.handleEditRecord(this.props.record,res.data)
        this.setState({
          edit:false
        })
        
    }).catch(error=>{
      console.log('updateErr:',error.message);
    })
  }
  handleDelete(){
    axios.delete(`${baseAPI}/api/records/${this.props.record.id}`)
    .then(res=>{
      console.log('deleteRes:',res);  
      this.props.handleDeleteRecord(this.props.record);
    }).catch(error=>{
      console.log('deleteErr:',error.message);
    })
  }

  recordRow(){
    return(
      <li className="list-item">
        <div>{this.props.record.date}</div>
        <div>{this.props.record.title}</div>
        <div>{this.props.record.amount}</div>
        <div><button onClick={this.handleToggle.bind(this)}>Edit</button> <button onClick={this.handleDelete.bind(this)}>Delete</button></div>
      </li>
    )
  }
  recordForm(){
      return(
        <li className="list-item">
          <div><input type="text" defaultValue={this.props.record.date} ref='date'/></div>
          <div><input type="text" defaultValue={this.props.record.title} ref='title'/></div>
          <div><input type="text" defaultValue={this.props.record.amount} ref='amount'/></div>
          <div><button onClick={this.handleUpdate.bind(this)}>Upate</button> <button onClick={this.handleToggle.bind(this)}>Cencel</button></div>
        </li>
      )
  }
   render(){
    if(this.state.edit){
       return this.recordForm();
    }else{
       return this.recordRow();
    }
   }
}
export default RecordsItem;

RecordsItem.propTypes={
  id:PropTypes.number,
  date:PropTypes.number,
  title:PropTypes.string,
  amount:PropTypes.string
}
