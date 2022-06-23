import { useState } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import newspendIcon from './img/new-spend.svg';

function App() {
  const [budget, setBudget] = useState('');
  const [validBudget, setValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const handleNewspend = () => {
    setModal(true);
    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
  };
  return (
    <div>
      <Header
        budget={budget}
        setBudget={setBudget}
        validBudget={validBudget}
        setValidBudget={setValidBudget}
      />
      {validBudget && (
        <div className='new-spend'>
          <img src={newspendIcon} alt='newspendIcon' onClick={handleNewspend} />
        </div>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
        />
      )}
    </div>
  );
}

export default App;
