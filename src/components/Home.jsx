import React from 'react'
import Balance from './Balance'
import IncomeList from './IncomeList'
import ExpenseList from './ExpenseList'

const Home = () => {
  return (
    <section className='home-container'>
        <Balance/>
        <IncomeList/>
        <ExpenseList/>
    </section>
  )
}

export default Home
