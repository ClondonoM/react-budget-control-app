import { useState } from 'react';
import Header from './components/Header';
import SpendList from './components/SpendList';
import Modal from './components/Modal';
import { idGenerator } from './helpers';
import newspendIcon from './img/new-spend.svg';

function App() {
  const [spends, setSpends] = useState([]);
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

  const saveSpend = (spend) => {
    spend.id = idGenerator();
    spend.date = Date.now();
    setSpends([...spends, spend]);

    setAnimateModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  return (
    <div className={modal ? 'pinUp' : ''}>
      <Header
        spends={spends}
        budget={budget}
        setBudget={setBudget}
        validBudget={validBudget}
        setValidBudget={setValidBudget}
      />
      {validBudget && (
        <>
          <main>
            <SpendList spends={spends} />
          </main>
          <div className='new-spend'>
            <img
              src={newspendIcon}
              alt='newspendIcon'
              onClick={handleNewspend}
            />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
          saveSpend={saveSpend}
        />
      )}
    </div>
  );
}

export default App;
