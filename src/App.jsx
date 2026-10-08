import { useState } from 'react';
import heroImg from './assets/hero.png';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';
import dummyData from './assets/dummyData';
function App() {
  const [data, setData] = useState(dummyData);
  console.log(data);
  return (
    <>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <Form setData={setData}/>
          <Table data={data}/>
          <div className="context-menu">
            <div>Edit</div>
            <div>Delete</div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
