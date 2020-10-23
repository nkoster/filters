import React from 'react';
import './App.css';
import FilterMenu from './components/FilterMenu';
import TankList from './components/TankList';
import list from './Tanks'

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
        <FilterMenu list={list} />
      </header>
    </div>
  )
}

export default App
