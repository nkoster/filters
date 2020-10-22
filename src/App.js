import React from 'react';
import './App.css';
import FilterMenu from './components/FilterMenu';
import TankList from './components/TankList';

const items = [
  {
    filter: 'color',
    menu: [
      'red', 'green', 'blue'
    ]
  },
  {
    filter: 'price',
    menu: [
      '10', '20', '30'
    ]
  }
]

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <FilterMenu items={items} />
        <TankList />
      </header>
    </div>
  )
}

export default App
