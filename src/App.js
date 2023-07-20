import { useSelector } from 'react-redux';
import './App.css';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import Navbar from './components/Navbar';

function App() {
  const currentBankBalance = useSelector(state => state.SBH_Bank.balance);
  return (
    <>
      <Navbar />
      <div className='d-flex flex-row align-items-center justify-content-around m-5'>
        <Counter1 />
        <span>Balance Right now: ${currentBankBalance}</span>
        <Counter2 />
      </div>
    </>
  );
}

export default App;
