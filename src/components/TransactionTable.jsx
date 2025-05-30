// src/components/TransactionTable.jsx
import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const TransactionTable = ({ transactions, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>التاريخ</th>
          <th>الوصف</th>
          <th>الفئة</th>
          <th>المبلغ</th>
          <th>النوع</th>
          <th>الإجراءات</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount.toLocaleString('ar-SA')} EGP</td>
            <td>
              <span className={`status-badge ${transaction.type === 'income' ? 'status-income' : 'status-expense'}`}>
                {transaction.type === 'income' ? 'إيراد' : 'مصروف'}
              </span>
            </td>
            <td>
              <div className="actions">
                <button 
                  className="btn-icon" 
                  onClick={() => onEdit(transaction)}
                  title="تعديل"
                >
                  <FaEdit />
                </button>
                <button 
                  className="btn-icon" 
                  onClick={() => onDelete(transaction.id)}
                  title="حذف"
                >
                  <FaTrash />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;