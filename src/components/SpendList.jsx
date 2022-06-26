import Spend from './Spend';
const SpendList = ({
  spends,
  setEditSpend,
  deleteSpend,
  filter,
  filterSpends,
}) => {
  return (
    <div className='spends-list container'>
      {filter ? (
        <>
          <h2>
            {filterSpends.length
              ? 'Spends - Swipe to edit or delete'
              : 'No Spends Yet in this category'}
          </h2>
          {filterSpends.map((spend) => (
            <Spend
              key={spend.id}
              spend={spend}
              setEditSpend={setEditSpend}
              deleteSpend={deleteSpend}
            />
          ))}
        </>
      ) : (
        <>
          <h2>
            {spends.length
              ? 'Spends - Swipe to edit or delete'
              : 'No Spends Yet'}
          </h2>
          {spends.map((spend) => (
            <Spend
              key={spend.id}
              spend={spend}
              setEditSpend={setEditSpend}
              deleteSpend={deleteSpend}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default SpendList;
