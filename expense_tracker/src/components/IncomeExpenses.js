import React from 'react'

export default function IncomeExpenses({transactions}) {
    const amount = transactions.map((transaction) => Number(transaction.amount));
    const income = amount.filter((item) => item > 0).reduce((acc, item) => (acc + item), 0)
    const expenses = amount.filter((item) => item < 0).reduce((acc, item) => (acc + item), 0)
  return (
    <div className="inc-exp-container">
        <div>
            <h4>Income</h4>
            <p className="money plus">+Rs{income}</p>
        </div>

        <div>
            <h4>Expenses</h4>
            <p className="money minus">-Rs{expenses}</p>
        </div>

    </div>
  )
}
