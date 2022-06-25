import { useEffect, useState } from 'react';

const BudgetControl = ({ spends, budget }) => {
  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);

  useEffect(() => {
    const totalSpent = spends.reduce((total, spend) => spend.amount + total, 0);
    setSpent(totalSpent);
    setAvailable(budget - totalSpent);
  }, [spends]);

  const moneyFormat = (amount) => {
    return amount.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };
  return (
    <div className='budget-container container shade two-cols'>
      <div>
        <p>Graph</p>
      </div>
      <div className='budget-content'>
        <p>
          <span>Budget: </span> {moneyFormat(budget)}
        </p>
        <p>
          <span>Balance: </span> {moneyFormat(available)}
        </p>
        <p>
          <span>Spent: </span> {moneyFormat(spent)}
        </p>
      </div>
    </div>
  );
};

export default BudgetControl;
