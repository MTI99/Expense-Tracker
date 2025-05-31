import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const TransactionTable = ({ transactions, onEdit, onDelete }) => {
  return (
    <div className="table-responsive">
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount} EGP</td>
              <td>
                <span className={`status-badge ${transaction.type === 'income' ? 'status-income' : 'status-expense'}`}>
                  {transaction.type === 'income' ? 'Income' : 'Expense'}
                </span>
              </td>
              <td>
                <div className="actions">
                  <button 
                    className="btn-icon" 
                    onClick={() => onEdit(transaction)}
                    title="Edit"
                  >
                    <FaEdit />
                  </button>
                  <button 
                    className="btn-icon" 
                    onClick={() => onDelete(transaction.id)}
                    title="Delete"
                  >
                    <FaTrash />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;