import React, { Component } from 'react'
import { connect } from 'react-redux'
import Balance from '../components/Balance'
import AddTransaction from '../components/AddTransaction'
import { addTransaction, deleteTransaction } from '../redux/actions'
import TransactionsList from '../components/TransactionsList'
import IncomeExpenses from '../components/IncomeExpenses'

export class Main extends Component {
  
  render() {
    const { transactions, addTransaction, deleteTransaction } = this.props
    return (
      <div className="container">
        <Balance transactions={transactions} />
        <IncomeExpenses transactions={transactions}/>

        <TransactionsList transactions={transactions} deleteTransaction={(id) => deleteTransaction(id)}/>
        <AddTransaction addTransaction={(transaction) => addTransaction(transaction)} id={transactions[0] ? transactions[0].id + 1 : 1 } />
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
    transactions: state.transactions
})

const mapDispatchToProps = (dispatch) => ({
  addTransaction: (transaction) => dispatch(addTransaction(transaction)),
  deleteTransaction: (id) => dispatch(deleteTransaction(id))

})

export default connect(mapStateToProps, mapDispatchToProps)(Main)