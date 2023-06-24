
import React  ,{useState} from 'react';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter'; 
import ExpensesChart from './ExpensesChart';
const Expenses = (props) =>
{
  const [filteredYear , setFilteredYear]=useState(2020);

  const filterChangeHandler = (selectedYear) =>
  {
     setFilteredYear(selectedYear);

  };

  //Filter returns a new array it props.items contains all the elements of the array aur un values se selectedyear ke liye filter karenge.
  const filteredExpenses= props.items.filter((expense) => 
    {
      return  expense.date.getFullYear().toString() === filteredYear;
      /* Converting into string because .date.fetFullyear se we'll get in Date format and above in usestate year is in  string. */
    });


  /*{filteredExpenses.length() ===0 && <p>No Expenses Found .</p>} 
  {filteredExpenses.length() > 0 &&  
    THIS is used instead of if because we cant use if in parantheses so we used this to put a condition 
    where the part after && is rendered if the part before && returns true. 
    */
 

  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear } 
        onChangeFilter={filterChangeHandler} 
      />

<ExpensesChart  expenses={filteredExpenses}/>
    <ExpensesList items={filteredExpenses} /> 
     </Card>
     </div>

  );
};
export default Expenses;