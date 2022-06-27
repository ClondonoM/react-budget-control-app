import { useState } from 'react';
import Message from './Message';

const NewBudget = ({ budget, setBudget, setValidBudget }) => {
  const [message, setMessage] = useState('');
  const haldleBudget = (e) => {
    e.preventDefault();
    if (!Number(budget) || Number(budget) < 0) {
      setMessage('Please enter a valid number');
      return;
    }
    setMessage('');
    setValidBudget(true);
  };

  return (
    <div onSubmit={haldleBudget} className='budget-container container shade'>
      <form className='form'>
        <div className='field-budget'>
          <label>Define the Budget</label>
          <input
            type='number'
            placeholder='Add your Budget'
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
          />
        </div>
        <input type='submit' value='Add' />
        {message && <Message type='error'>{message}</Message>}
      </form>
    </div>
  );
};

export default NewBudget;
