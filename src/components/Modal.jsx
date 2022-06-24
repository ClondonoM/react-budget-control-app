import { useState } from 'react';
import Message from './Message';
import close from '../img/close.svg';
const Modal = ({ setModal, animateModal, setAnimateModal, saveSpend }) => {
  const [modalMessage, setModalMessage] = useState('');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const handleCloseModal = () => {
    setAnimateModal(false);
    setTimeout(() => {
      setAnimateModal(true);
      setModal(false);
    }, 500);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if ([name, amount, category].includes('')) {
      setModalMessage('All fields are required');
      return;
    } else {
      setModalMessage('');
    }
    saveSpend({ name, amount, category });
  };
  return (
    <div className='modal'>
      <div className='close-modal'>
        <img src={close} alt='close' onClick={handleCloseModal} />
      </div>
      <form
        onSubmit={handleSubmit}
        className={`form ${animateModal ? 'animate' : 'close'}`}
      >
        <legend>New Spend</legend>
        {modalMessage && <Message type='error'>{modalMessage}</Message>}

        <div className='field'>
          <label htmlFor='spendName'>Spend Name</label>
          <input
            id='spendName'
            type='text'
            placeholder='add spend name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='field'>
          <label htmlFor='amount'>Amount</label>
          <input
            id='amount'
            type='number'
            placeholder='add spend amount'
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
        <div className='field'>
          <label htmlFor='category'>Category</label>
          <select
            id='category'
            type='text'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value=''>-- Select --</option>
            <option value='food'>Food</option>
            <option value='health'>Health</option>
            <option value='home'>Home</option>
            <option value='leisure'>Leisure</option>
            <option value='saving'>Saving</option>
            <option value='subscriptions'>Subscriptions</option>
            <option value='various'>Various</option>
          </select>
        </div>
        <input type='submit' value='Add Spend' />
      </form>
    </div>
  );
};

export default Modal;
