const BudgetControl = ({ budget }) => {
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
          <span>Balance: </span> {moneyFormat(0)}
        </p>
        <p>
          <span>Spent: </span> {moneyFormat(0)}
        </p>
      </div>
    </div>
  );
};

export default BudgetControl;
