import { dateFormat } from '../helpers';
import { images } from '../constants/images';
// const iconsDirectory = {

//             food: food
//             health: health
//             home: home
//             leisure: leisure
//             saving: saving
//             subscriptions: subscriptions
//             various: spends

// }
const Spend = ({ spend }) => {
  const { name, amount, category, date } = spend;
  return (
    <div className='spend shade'>
      <div className='spend-content'>
        <div className='spend-description'>
          <p className='category'>{category}</p>
          <p className='spend-name'>{name}</p>
          <p className='spend-date'>{dateFormat(date)}</p>
        </div>
      </div>
      <p className='spend-amount'>${amount}</p>
    </div>
  );
};

export default Spend;
