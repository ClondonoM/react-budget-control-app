const NewBudget = ({ budget, setBudget }) => {
  return (
    <div className='budget-container container shade'>
      <form className='form'>
        <div className='field'>
          <label htmlFor=''>Define the Budget</label>
          <input
            className='new-budget'
            type='text'
            placeholder='Add your Budget'
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
        </div>
        <input type='submit' value='Add' />
      </form>
    </div>
  );
};

export default NewBudget;
