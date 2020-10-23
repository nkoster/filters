import React, { useState, useEffect } from 'react'
import './App.css'
import FilterMenu from './components/FilterMenu'
import testApi from './api'
import { CircularProgress } from '@material-ui/core'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [list, setList] = useState([])
  useEffect(_ => {
    testApi.fetchData((error, data) => {
        if (error) {
            setIsLoading(false)
            return console.error(error)
        }
        setList(data)
        setIsLoading(false)
    })
  }, [])
  return (
    <div className='App'>
      <header className='App-header'>
        {isLoading ? <CircularProgress /> : <FilterMenu list={list} />}
      </header>
    </div>
  )
}

export default App
