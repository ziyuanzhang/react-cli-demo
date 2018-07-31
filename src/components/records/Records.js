import React,{ Component }  from 'react';
import './records.css'
import RecordsItem from './RecordsItem'
import axios  from 'axios'
import {baseAPI} from '../../utills/RecordsAPI'
import RecordsForm from "./RecordsForm"
import AmountBox from './AmountBox'

class Records extends Component{
    constructor(){
        super();
        this.state={
            error:null,
            isLoad:false,
            records:[]
        }
    }
    componentDidMount(){
        axios.get(baseAPI+'/api/records')
        .then((res)=>{
            console.log("axios",res.data);
            this.setState({
                isLoad:true,
                records:res.data
            })
        }).catch(err=>{
            this.setState({
                isLoad:true,
                error:err.message
                
            })
            console.log("error::",err);
        })
    }
    addRecord(record){
        this.setState({
            error:null,
            isLoad:true,
            records:[...this.state.records,record]
        })
    }
    updateRecord(record,data){
        const recordIndex = this.state.records.indexOf(record);
        const newRecords = this.state.records.map((item,index)=>{
            if(index !== recordIndex){
                return item;
            }else{
                return{
                    ...item,
                    ...data
                };
            }
        })
        this.setState({
            records:newRecords
        })
    }
    deleteRecord(record){
        const recordIndex = this.state.records.indexOf(record);
        const newRecords = this.state.records.filter((item,index)=>{
           return index !== recordIndex;
        })
        this.setState({
            records:newRecords
        })
    }
    Credit(){
       let credits = this.state.records.filter((record)=>{
            return record.amount >=0;
       })
      let creditsArr = credits.map((record)=>{
        return record.amount
       })
       return creditsArr.reduce((prev,curr)=>{
           return prev + Number.parseInt(curr)
       },0)
    }
    Debit(){
        let credits = this.state.records.filter((record)=>{
            return record.amount <0;
       })
      let creditsArr = credits.map((record)=>{
        return record.amount
       })
       return creditsArr.reduce((prev,curr)=>{
           return prev + Number.parseInt(curr)
       },0)
    }
    Balance(){
        return this.Credit() + this.Debit();
    }
   render(){
     const {error,isLoad,records}=this.state;
     let recordsComponent;
     if(error){
        recordsComponent = <div className="error">Error:{error}</div>;
     }else if(!isLoad){
        recordsComponent = <div className='loading'>load.....</div>;
     }else{
        recordsComponent = (
                <ul className='list'>
                    <li className='list-item list-item-title'>
                        <div>Date</div>
                        <div>Title</div>
                        <div>Amount</div>
                        <div>action</div>
                    </li>
                    {records.map((record,index)=>{
                         return <RecordsItem 
                                    key={index} 
                                    record={record} 
                                    handleEditRecord={this.updateRecord.bind(this)} 
                                    handleDeleteRecord={this.deleteRecord.bind(this)}/>
                    })}                  
                </ul>            
        )}
        return(
            <div className='records'>
               <h2>records</h2>
               <div className='AmountBoxS'>
                   <AmountBox title={'Credit'} amount={this.Credit()}/>
                   <AmountBox title={'Debit'} amount={this.Debit()}/>
                   <AmountBox title={'Balance'} amount={this.Balance()}/>
               </div>
                
                <RecordsForm handleNewRecord={this.addRecord.bind(this)}/>
                {recordsComponent}
            </div> 
         )
     }



}
export default Records;