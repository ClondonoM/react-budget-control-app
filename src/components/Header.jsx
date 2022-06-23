import NewBudget from './NewBudget';
import BudgetControl from './BudgetControl';

const Header = ({ budget, setBudget, validBudget, setValidBudget }) => {
  return (
    <header>
      <h1>Budget Control</h1>
      <div className='personal-link'>
        <a
          href='https://carlos-londono.dev/'
          target='_blank'
          referer='no-referer'
        >
          <h3>
            by <span>carlos-londono.dev</span>
          </h3>
        </a>
      </div>

      {validBudget ? (
        <BudgetControl budget={budget} />
      ) : (
        <NewBudget
          budget={budget}
          setBudget={setBudget}
          setValidBudget={setValidBudget}
        />
      )}
    </header>
  );
};

export default Header;
