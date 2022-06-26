import NewBudget from './NewBudget';
import BudgetControl from './BudgetControl';

const Header = ({
  spends,
  setSpends,
  budget,
  setBudget,
  validBudget,
  setValidBudget,
}) => {
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
        <BudgetControl
          spends={spends}
          setSpends={setSpends}
          budget={budget}
          setBudget={setBudget}
          setValidBudget={setValidBudget}
        />
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
