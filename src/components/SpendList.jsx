import Spend from './Spend';
const SpendList = ({ spends }) => {
  return (
    <div className='spends-list container'>
      <h2>{spends.length ? 'Spends' : 'No Spends Yet'}</h2>
      {spends.map((spend) => (
        <Spend key={spend.id} spend={spend} />
      ))}
    </div>
  );
};

export default SpendList;
