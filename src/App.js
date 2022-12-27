
import './App.css';
import { Typography,styled, Box } from '@mui/material';
import Balance from './components/Balance';
import ExpenseCard from './components/ExpenseCard';
import NewTransaction from './components/NewTransaction';
import Transactions from './components/Transactions';
import { useState } from 'react';

const Header = styled(Typography)`
   font-size: 35px;
  
   color:green;
`

const Component = styled(Box)`
  display:flex;
  background: white;
  border-radius:15px;
  padding:15px;
  margin: auto;
  width:800px;
  & > div {
   width:50%;
   padding:10px;
  }
  
`

function App() {

 const [transactions, setTransactions] = useState([])  


  return (
    <div className="App">
      <Header>Expense Tracker</Header>
      <Component>
       <Box>
         <Balance transactions ={transactions}/>
         <ExpenseCard transactions = {transactions}/>
         <NewTransaction setTransactions={setTransactions}/>
       </Box>

       <Box>
         <Transactions transactions = {transactions} setTransactions={setTransactions}/>
       </Box>
      </Component>
    </div>
  );
}

export default App;
