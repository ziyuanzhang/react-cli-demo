import React,{ Component }  from 'react';


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
        this.setState((
            obj={},
            obj[name] = value,
            obj
        ))

    }
    vaild(){ 
       return  this.state.date&&this.state.title&&this.state.amount;
    }

    render(){
        return(
            <form >
               <label>Date:<input type="text" placeholder='Date' name="date" onChange={this.handleChange.bind(this)}/> </label>
               <label>Title:<input type="text" placeholder='Title' name="title" onChange={this.handleChange.bind(this)}/> </label>
               <label>Amount:<input type="number" placeholder='Amount' name="amount" onChange={this.handleChange.bind(this)}/> </label>
               <button disabled={!this.vaild()}>提交</button>
            </form>
        )
    }
}
export default RecordsForm;