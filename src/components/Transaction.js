import { ListItem, ListItemText, styled } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
const Detail = styled(ListItem)`
  margin-top:10px;
  
`

function Transaction({transaction,setTransactions,transactions}) {

    const bgColor = transaction.amount > 0 ? 'green' : 'red'
   const deleteTransaction =(id)=>{
    setTransactions(transactions.filter(transaction => transaction.id !== id))
   }
  return (
   
    <Detail style={{background:`${bgColor}`, color:'#fff'}}>

    
        <ListItemText>{transaction.text}</ListItemText>
        <ListItemText>{transaction.amount}</ListItemText>
         <DeleteIcon onClick={()=>deleteTransaction(transaction.id)}/>
       
    </Detail>
  )
}

export default Transaction
