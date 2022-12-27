import { Box, TextField, Typography, Button,styled } from '@mui/material'
import React, { useState } from 'react'

const Container = styled(Box)`
display:flex;
flex-direction:column;
gap:15px;

& > h5 {
    margin-top:30px;
}
`
 
function NewTransaction({setTransactions}) {

  const [text, setText] = useState('');
  const [amount, setAmount] = useState();

  const addTransaction = () => {
       const transaction = {
         id:Math.floor(Math.random()*100000),
         text:text,
         amount: +amount,
       }

       setTransactions(prevState => [transaction, ...prevState])
  }


  return (
  <Container>
      <Typography variant='h5'>New Transaction</Typography>
      <TextField label='Enter Expense Name' onChange={(e)=>setText(e.target.value)}/>
      <TextField label='Enter Amount' onChange={(e)=>setAmount(e.target.value) }/>
      <Button variant='contained' onClick = {()=>addTransaction()}>Add Transaction</Button>
  </Container>
  )
}

export default NewTransaction
