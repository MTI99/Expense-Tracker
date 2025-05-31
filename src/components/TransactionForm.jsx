import React, { useState, useEffect } from 'react';
import { FaSave, FaTimes } from 'react-icons/fa';

const TransactionForm = ({ onAdd, onEdit, onCancel, transaction }) => {
  const [formData, setFormData] = useState({
    type: 'income',
    date: new Date().toISOString().split('T')[0],
    amount: '',
    category: '',
    description: ''
  });
  
  const categories = {
    income: [
      { value: 'Salary', label: 'Salary' },
      { value: 'Bonus', label: 'Bonus' },
      { value: 'Other', label: 'Other' }
    ],
    expense: [
      { value: 'Personal', label: 'Personal' },
      { value: 'Home', label: 'Home' },
      { value: 'Installments', label: 'Installments' },
      { value: 'Invest', label: 'Invest' },
      { value: 'Saving', label: 'Saving' },
      { value: 'Other', label: 'Other' }
    ]
  };
  
  useEffect(() => {
    if (transaction) {
      setFormData({
        id: transaction.id,
        type: transaction.type || 'income',
        date: transaction.date || new Date().toISOString().split('T')[0],
        amount: transaction.amount || '',
        category: transaction.category || '',
        description: transaction.description || ''
      });
    } else {
      // Set default category based on type
      const defaultCategory = formData.type === 'income' 
        ? categories.income[0].value 
        : categories.expense[0].value;
        
      setFormData(prev => ({
        ...prev,
        category: defaultCategory
      }));
    }
  }, [transaction]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Update category when type changes
    if (name === 'type') {
      const defaultCategory = value === 'income' 
        ? categories.income[0].value 
        : categories.expense[0].value;
        
      setFormData(prev => ({
        ...prev,
        [name]: value,
        category: defaultCategory
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.description || !formData.amount || formData.amount <= 0) {
      alert('Please enter valid data');
      return;
    }
    
    const transactionData = {
      ...formData,
      id: formData.id || Date.now(),
      amount: parseFloat(formData.amount)
    };
    
    if (transaction) {
      onEdit(transactionData);
    } else {
      onAdd(transactionData);
    }
  };

  return (
    <div className="transaction-form">
      <div className="form-header">
        <h3>{transaction ? 'Edit Transaction' : 'Add New Transaction'}</h3>
        <button className="close-btn" onClick={onCancel}>
          <FaTimes />
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="transactionType">Transaction Type</label>
            <select 
              id="transactionType" 
              name="type" 
              value={formData.type} 
              onChange={handleChange}
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="transactionDate">Date</label>
            <input 
              type="date" 
              id="transactionDate" 
              name="date" 
              value={formData.date} 
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="transactionAmount">Amount (EGP)</label>
            <input 
              type="number" 
              id="transactionAmount" 
              name="amount" 
              value={formData.amount} 
              onChange={handleChange}
              placeholder="Enter amount" 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="transactionCategory">Category</label>
            <select 
              id="transactionCategory" 
              name="category" 
              value={formData.category} 
              onChange={handleChange}
            >
              {(formData.type === 'income' 
                ? categories.income 
                : categories.expense
              ).map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
          
          <div className="form-group" style={{ gridColumn: 'span 2' }}>
            <label htmlFor="transactionDescription">Description</label>
            <input 
              type="text" 
              id="transactionDescription" 
              name="description" 
              value={formData.description} 
              onChange={handleChange}
              placeholder="Enter transaction description" 
            />
          </div>
        </div>
        
        <div className="form-actions">
          <button type="submit" className="btn btn-success">
            <FaSave /> Save Transaction
          </button>
          <button type="button" className="btn btn-danger" onClick={onCancel}>
            <FaTimes /> Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default TransactionForm;