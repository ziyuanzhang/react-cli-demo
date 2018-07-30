import React,{ Component }  from 'react';
import './records.css'
import RecordsItem from './RecordsItem'
import axios  from 'axios'
import {base_api as baseAPI} from '../../utills/RecordsAPI'
import RecordsForm from "./RecordsForm"

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
                    </li>
                    {records.map((record,index)=>{
                         return <RecordsItem key={index} record={record}/>
                    })}                  
                </ul>            
        )}
        return(
            <div className='records'>
               <h2>records</h2>
                <RecordsForm />
                {recordsComponent}
            </div> 
         )
     }



}
export default Records;