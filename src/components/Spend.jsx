import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import { dateFormat } from '../helpers';
import foodIcon from '../img/food.svg';
import healthIcon from '../img/health.svg';
import homeIcon from '../img/home.svg';
import leisureIcon from '../img/leisure.svg';
import savingIcon from '../img/saving.svg';
import subscriptionIcon from '../img/subscription.svg';
import spendIcon from '../img/spend.svg';

const iconsDirectory = {
  food: foodIcon,
  health: healthIcon,
  home: homeIcon,
  leisure: leisureIcon,
  saving: savingIcon,
  subscriptions: subscriptionIcon,
  various: spendIcon,
};
const Spend = ({ spend }) => {
  const { name, amount, category, date } = spend;
  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => console.log('Edit...')}>Edit</SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction nClick={() => console.log('Delete...')}>Delete</SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className='spend shade'>
          <div className='spend-content'>
            <img src={iconsDirectory[category]} alt='spend icon' />
            <div className='spend-description'>
              <p className='category'>{category}</p>
              <p className='spend-name'>{name}</p>
              <p className='spend-date'>{dateFormat(date)}</p>
            </div>
          </div>
          <p className='spend-amount'>${amount}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Spend;
