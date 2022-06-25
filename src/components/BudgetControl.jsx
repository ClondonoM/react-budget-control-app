import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const BudgetControl = ({ spends, budget }) => {
  const [percentage, setPercentage] = useState(0);
  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);

  useEffect(() => {
    const totalSpent = spends.reduce((total, spend) => spend.amount + total, 0);
    const newPercentage = ((totalSpent / budget) * 100).toFixed(2);
    setSpent(totalSpent);
    setAvailable(budget - totalSpent);
    setTimeout(() => {
      setPercentage(newPercentage);
    }, 1000);
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
        <CircularProgressbar
          styles={buildStyles({
            pathColor: '#1a788a',
            trailColor: '#f5f5f5',
            textColor: '#1a788a',
            textWeight: 'bold',
          })}
          value={percentage}
          text={`${percentage}% Spent`}
        />
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
