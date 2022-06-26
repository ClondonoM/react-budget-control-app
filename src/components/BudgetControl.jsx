import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const BudgetControl = ({
  spends,
  setSpends,
  budget,
  setBudget,
  setValidBudget,
}) => {
  const [percentage, setPercentage] = useState(0);
  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);

  useEffect(() => {
    const totalSpent = spends.reduce((total, spend) => spend.amount + total, 0);
    const newPercentage = ((totalSpent / budget) * 100).toFixed(1);
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

  const handleResetApp = () => {
    const result = confirm('Do you really want to reset the Budget?');
    if (result) {
      setSpends([]);
      setBudget(0);
      setValidBudget(false);
    }
  };
  return (
    <div className='budget-container container shade two-cols'>
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: percentage > 100 ? '#DC2626' : '#1a788a',
            trailColor: '#f5f5f5',
            textColor: percentage > 100 ? '#DC2626' : '#1a788a',
          })}
          value={percentage}
          text={`${percentage}% Spent`}
        />
      </div>
      <div className='budget-content'>
        <button className='reset-app' onClick={handleResetApp}>
          Reset Budget
        </button>
        <p>
          <span>Budget: </span> {moneyFormat(budget)}
        </p>
        <p className={`${available < 0 ? 'neg' : ''}`}>
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
