import close from '../img/close.svg';
const Modal = ({ setModal }) => {
  const handleCloseModal = () => {
    setModal(false);
  };
  return (
    <div className='modal'>
      <div className='close-modal'>
        <img src={close} alt='close' onClick={handleCloseModal} />
      </div>
      <form className='form'>
        <legend>New Spend</legend>
      </form>
    </div>
  );
};

export default Modal;
