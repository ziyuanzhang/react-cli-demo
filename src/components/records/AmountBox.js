import React  from 'react';
const AmountBox=(props)=>{
    return(
        <div className='Amount-container'>
             <p className='Amount-title'>{props.title}</p>
             <p className='Amount-body'>{props.amount}</p>
        </div>
    )
}

export default AmountBox;