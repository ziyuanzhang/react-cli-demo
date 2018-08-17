import React,{ Component }  from 'react';
import axios from 'axios';
import {baseAPI}  from '../../utills/RecordsAPI';


class RecordsForm extends Component{
    constructor(props){
        super(props);
        this.state={
            date:"",
            title:"",
            amount:""
        }
    }
    handleChange(event){
        let obj;       
        let name = event.target.name;
        let value = event.target.value;         
         //value = Number.parseFloat(value);

        /* if(Number.isFinite(value) ){
            console.log('value2:',value)
        }else{
            return
        } */
        this.setState((
            obj={},
            obj[name] = value,
            obj
        ))

    }
    handleSubmit(event){
        event.preventDefault();
        axios.post(`${baseAPI}/api/records`,this.state)
        .then((res)=>{
            console.log("handleSubmit:",res);
            this.props.handleNewRecord(res.data);
            this.setState({
                date:"",
                title:"",
                amount:""
            })
        }).catch(
            (error)=>{console.log("handleSubmitError:",error)}
        )

    }
    vaild(){ 
       return  this.state.date&&this.state.title&&this.state.amount;
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
               <label>Date:<input type="number" placeholder='Date' name="date" onChange={this.handleChange.bind(this)} value={this.state.date}/> </label>
               <label>Title:<input type="text" placeholder='Title' name="title" onChange={this.handleChange.bind(this)} value={this.state.title}/> </label>
               <label>Amount:<input type="number" placeholder='Amount' name="amount" onChange={this.handleChange.bind(this)} value = {this.state.amount}/> </label>
               <button disabled={!this.vaild()}>提交</button>
            </form>
        )
    }
}
export default RecordsForm;