import { useEffect, useState } from 'react';
import Header from './components/Header';
import Filters from './components/Filters';
import SpendList from './components/SpendList';
import Modal from './components/Modal';
import { idGenerator } from './helpers';
import newspendIcon from './img/new-spend.svg';

function App() {
  const [spends, setSpends] = useState(
    localStorage.getItem('spends')
      ? JSON.parse(localStorage.getItem('spends'))
      : []
  );
  const [budget, setBudget] = useState(
    Number(localStorage.getItem('budget')) ?? 0
  );
  const [validBudget, setValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [editSpend, setEditSpend] = useState({});

  const [filter, setFilter] = useState('');
  const [filterSpends, setFilterSpends] = useState([]);

  useEffect(() => {
    if (Object.keys(editSpend).length > 0) {
      setModal(true);

      setTimeout(() => {
        setAnimateModal(true);
      }, 500);
    }
  }, [editSpend]);

  useEffect(() => {
    localStorage.setItem('budget', budget ?? 0);
  }, [budget]);

  useEffect(() => {
    localStorage.setItem('spends', JSON.stringify(spends) ?? []);
  }, [spends]);

  useEffect(() => {
    if (filter) {
      const filterSpends = spends.filter((spend) => spend.category === filter);
      setFilterSpends(filterSpends);
    }
  }, [filter]);

  useEffect(() => {
    const lsBudget = Number(localStorage.getItem('budget')) ?? 0;
    if (lsBudget > 0) {
      setValidBudget(true);
    }
  }, []);

  const handleNewSpend = () => {
    setModal(true);
    setEditSpend({});
    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
  };

  const saveSpend = (spend) => {
    if (spend.id) {
      const updatedSpend = spends.map((spendState) =>
        spendState.id === spend.id ? spend : spendState
      );
      setSpends(updatedSpend);
      setEditSpend({});
    } else {
      spend.id = idGenerator();
      spend.date = Date.now();
      setSpends([...spends, spend]);
    }

    setAnimateModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const deleteSpend = (id) => {
    const updatedAllSpend = spends.filter((spend) => spend.id !== id);
    setSpends(updatedAllSpend);
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
            <Filters filter={filter} setFilter={setFilter} />
            <SpendList
              spends={spends}
              setEditSpend={setEditSpend}
              deleteSpend={deleteSpend}
              filter={filter}
              filterSpends={filterSpends}
            />
          </main>
          <div className='new-spend'>
            <img
              src={newspendIcon}
              alt='newspendIcon'
              onClick={handleNewSpend}
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
          editSpend={editSpend}
          setEditSpend={setEditSpend}
        />
      )}
    </div>
  );
}

export default App;
