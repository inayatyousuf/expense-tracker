import { Box, Divider, List, Typography } from '@mui/material'
import React from 'react'
import Transaction from './Transaction'

function Transactions({transactions,setTransactions}) {
  
  return (
    <Box>
        <Typography variant='h5'>My Transactions History</Typography>
        <Divider />
        {transactions.length === 0 ? <Typography style={{marginTop:'30px', fontWeight:'bold', color:'red'}}>No Expenses History</Typography>
        :
         <List>
             {transactions.map(transaction => (
             <Transaction  transaction={transaction} setTransactions={setTransactions} transactions={transactions}/>
  ))}
         </List>
}
    </Box>
  )
}

export default Transactions
